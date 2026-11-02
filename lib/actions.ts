"use server";

import { addProduct } from "@/lib/products";
import { createNotice } from "@/lib/notices";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProductAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const price = Number(formData.get("price") ?? 0);

  if (!name || !description || price <= 0) return;

  addProduct(name, description, price);
  revalidatePath("/products");
}

export async function createNoticeAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();

  if (!title || !author || !content) {
    throw new Error("제목, 작성자, 내용을 모두 입력해주세요.");
  }

  const notice = await createNotice({ title, author, content });
  revalidatePath("/notices");
  redirect(`/notices/${notice.id}`);
}
