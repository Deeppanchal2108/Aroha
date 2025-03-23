"use server";

import { prisma } from "@/lib/prisma"
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";



export async function signUp(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;


  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (existingUser) {
    // Redirect to login page if user already exists
    redirect("/login");
  }

  const supabase = await createClient()

  // Create user in Supabase Auth
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true, // Auto-confirm email
  });

  if (error) {
    return { error: error.message };
  }

  const userId = data.user?.id;

  // Save user in Prisma database
  await prisma.user.create({
    data: {
      id: userId!,
      email,
      firstName,
      lastName,
      roles: {
        connect: [{ role: "PATIENT" }], // Assign default role
      },
    },
  });

  // Redirect after successful signup
  redirect("/");
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  console.log("Data In login  : ",data);
  if (error) {
    return { error: error.message };
  }

  redirect("/");
}

export const logout = async () => {
  const supabase = await createClient()
  const { } = await supabase.auth.signOut();
  redirect("/login")
}