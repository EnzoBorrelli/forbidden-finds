import { prisma } from "@/lib/prisma";
import { userSchema } from "@/utils/zodSchemas/userSchemas";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, password } = userSchema.parse(body);

    const isMailUsed = await prisma.user.findUnique({
      where: { email: email },
    });

    if (isMailUsed) {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 409 }
      );
    }

    const isUsernamePicked = await prisma.user.findUnique({
      where: { username: username },
    });

    if (isUsernamePicked) {
      return NextResponse.json(
        { error: "Username already picked" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        avatar: 1,
        email,
        role: "user",
        password: hashedPassword,
      },
    });
    // eslint-disable-next-line no-unused-vars
    const { password: newUserPassword, ...user } = newUser;

    return NextResponse.json(
      { user, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "something was wrong, try again" },
      { status: 500 }
    );
  }
}
