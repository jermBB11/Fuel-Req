// api.ts

import ky, { Options } from "ky";
import { ApiResponse } from "./types/api-response";

// Replace this with your actual token retrieval logic (e.g., from cookies, localStorage, or auth context)
function getAuthToken(): string | null {
  return localStorage.getItem("auth_token"); // Or use a secure cookie reader if needed
}

// -----------------------------
// ky instance
// -----------------------------

export const api = ky.create({
  prefixUrl: `${process.env.NEXT_PUBLIC_APP_URL}/api`, // 🔁 Change to your API base URL
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getAuthToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
