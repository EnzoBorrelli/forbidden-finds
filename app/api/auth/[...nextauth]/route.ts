import NextAuth from "next-auth";
import { options } from "./options";

//ref: https://authjs.dev/guides/role-based-access-control#with-database

const handler = NextAuth(options);

export { handler as GET, handler as POST };

//cambiar credeniales personales por credenciales de la escuela