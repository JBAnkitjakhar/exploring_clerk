//actions/user.actions.ts

"use server";

import User from "@/modals/user.modal";
import { connect } from "@/db";

export async function createUser(user: any) {
  try {
    await connect();
    console.log("Attempting to create user in MongoDB:", user);
    const newUser = await User.create(user);
    console.log("User created in MongoDB:", newUser);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user in MongoDB:", error);
    throw error;
  }
}
