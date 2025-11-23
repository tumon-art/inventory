"use server";

import { db } from "@/db/drizzle";
import { products } from "@/db/schema";

export async function getProducts() {
  return await db.select().from(products)

}

