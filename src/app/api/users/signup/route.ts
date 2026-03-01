import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(request: NextRequest) {
    try {
        connectDB();
        const reqBody = await request.json()
        const { username, email, password } = reqBody;
        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user

        const newUser = await new User({
            username,
            email,
            password: hashedPassword,
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });




    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}