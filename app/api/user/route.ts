import { prisma } from "@/lib/prisma";
import { updatedUserSchema, userSchema } from "@/utils/zodSchemas/userSchemas";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

//TODO: add validation for email and username

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
    const { password: newUserPassword, ...user } = newUser;
    console.log(`Hashed password excluded: ${newUserPassword}`);

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

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, username, email, avatar } = updatedUserSchema.parse(body);

    const existingUser = await prisma.user.findUnique({ where: { id: id } });

    if (!existingUser) {
      return NextResponse.json(
        { user: null, message: "user not found" },
        { status: 404 }
      );
    }

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

    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: {
        username: username,
        avatar: !avatar ? existingUser.avatar : avatar,
        email: email,
      },
    });

    return NextResponse.json(
      { user: updatedUser, message: "User updated successfully" },
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
