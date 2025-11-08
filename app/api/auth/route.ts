import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const USERS = [
  { username: "admin", password: "mobinkaram123456789" }, // You can add more users or use a DB
];

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Check user credentials
    const user = USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    // Return token
    return NextResponse.json({ success: true, token });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
