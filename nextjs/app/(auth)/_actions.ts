"use server";

import { prisma } from "@/lib/prisma"
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";


export async function signUp(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const role = formData.get("userType") as string;
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    redirect("/login");
  }

  const supabase = await createClient();

  // Sign up user in Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { firstName, lastName, role: role }, // Correct metadata storage
    },
  });

  if (error) {
    return { error: error.message };
  }

  const userId = data.user?.id;
  if (!userId) {
    return { error: "Failed to retrieve user ID" };
  }

  // Save user in Prisma database
  await prisma.user.create({
    data: {
      id: userId,
      email,
      firstName,
      lastName,
      roles: {
        connect: [{ role: role  }], 
      }, 
    },
  });

  redirect("/login");
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