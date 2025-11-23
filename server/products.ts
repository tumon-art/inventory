"use server";

import { db } from "@/db/drizzle";
import { products, Product } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProducts() {
  try {
    const allUsers = await db.select().from(products);
    return allUsers;
  } catch (error) {
    console.error(error);
    throw error
  }

}

export async function createProduct(user: Omit<Product, "id" | "createdAt" | "updatedAt">) {
  try {
    await db.insert(products).values(user);
  } catch (error) {
    console.error(error);
    return { error: "Failed to create user" };
  }
}

export async function updateProduct(user: Omit<Product, "createdAt" | "updatedAt">) {
  try {
    await db.update(products).set(user).where(eq(products.id, user.id));
  } catch (error) {
    console.error(error);
    return { error: "Failed to update user" };
  }
}

export async function deleteProduct(id: string) {
  try {
    await db.delete(products).where(eq(products.id, id));
  } catch (error) {
    console.error(error);
    return { error: "Failed to delete user" };
  }
}
