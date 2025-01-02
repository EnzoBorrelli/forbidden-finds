import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { prisma } from "@/lib/prisma";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma), //adapatador para user nexthAuth con prisma
  secret:process.env.NEXTAUTH_SECRET, //.env variable
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/log-in", //pagina personalizada para inicio de sesion
  },
  providers: [ //proveedores, actualmente unicamente se utilzia credenciales
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "email",
          placeholder: "nombre@mail.com",
        },
        password: {
          label: "Contraseña:",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) { // si no existen estos valores, se retorna null
          return null;
        }
        const existingUser = await prisma.user.findUnique({
          where: { email: credentials?.email }, // se verifica que exista el usuario a partir de su email
        });
        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare( // se compara la contrasena introducida con la de la base datos
          credentials.password,
          existingUser.password
        );
        if (!passwordMatch) {
          return null;
        }
        return { //si todo es correcto se retornan los siguientes datos
          id:`${existingUser.id}`,
          name: existingUser.username,
          email: existingUser.email,
          role:existingUser.role
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // hacemos que el rol del usuario persista mediante cookies
      if (user){
        return{
          ...token,
          role:user.role
        }
      }
      return token;
    },
    async session({ session, token }) {
      return{
        ...session,
        user:{
          ...session.user,
          role:token.role
        }
      }
    },
  },
};