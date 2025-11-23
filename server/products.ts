"use server";

import { db } from "@/db/drizzle";
import { products, Product } from "@/db/schema";

export async function getProducts() {
  try {
    const allUsers = await db.select().from(products);
    return allUsers;
  } catch (error) {
    console.error(error);
    throw error
  }

}

export async function createUser(user: Omit<Product, "id" | "createdAt" | "updatedAt">) {
  try {
    await db.insert(products).values(user);
  } catch (error) {
    console.error(error);
    return { error: "Failed to create user" };
  }
}
