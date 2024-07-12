import { loadReview } from "../api";

export async function getAllReviews(apiKey: string) {
  const reviews = await loadReview(apiKey);
  return reviews;
}
