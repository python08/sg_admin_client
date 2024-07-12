import api from "@/api";

export async function getAllCategories() {
    // FP
    const products: any = await api("all-categories","GET");
    return products;
  }