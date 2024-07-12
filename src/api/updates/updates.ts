import api from "@/api";

export async function getUpdates() {
  const updates: any = await api("updates", "GET");
  return updates;
}
