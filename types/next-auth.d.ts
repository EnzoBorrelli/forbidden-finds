import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

//ref: https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation

declare module "next-auth" {
  //agregamos la propiedad role al modulo next-auth
  interface Session {
    user: {
      id: string;
      role: string;
      name: string;
      email: string;
    } & DefaultSession;
  }
  interface User extends DefaultUser {
    role: string;
    name: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
    name: string;
    email: string;
  }
}