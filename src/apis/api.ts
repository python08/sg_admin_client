import { serverUrl } from "./constant/constant";

export async function loadData(route: string, reValidate?: any) {
  // Call an external API endpoint to get posts
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/${route}`, reValidate);

    if (res.status >= 400) {
      // This will activate the closest `error.js` Error Boundary
      return { error: res.statusText };
    }
    return await res.json();
  } catch (error) {
    return { error };
  }
}

// FP
export async function loadReview(apiKey: string) {
  // Call an external API endpoint to get posts
  try {
    const res = await fetch(`${apiKey}`);

    if (res.status >= 400) {
      // This will activate the closest `error.js` Error Boundary
      return { error: res.statusText };
    }
    return await res.json();
  } catch (error) {
    return { error };
  }
}
