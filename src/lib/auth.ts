// src/lib/auth.ts

export const Auth = {
  /**
   * Logs in a user by sending credentials to the backend API.
   * Stores the JWT token in localStorage on success.
   */
  async login(username: string, password: string) {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        console.error("Login failed:", res.statusText);
        return false;
      }

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        return true;
      }

      return false;
    } catch (err) {
      console.error("Error logging in:", err);
      return false;
    }
  },
  /**
   * Logs out the current user by removing the token.
   */
  logout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      document.cookie = "token=; path=/; max-age=0";
    }
  },

  /**
   * Retrieves the JWT token from localStorage.
   */
  getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  },

  /**
   * Checks whether the user is logged in (based on token existence and expiration).
   */
  isLoggedIn() {
    if (typeof window === "undefined") return false;

    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp ? payload.exp > now : true;
    } catch (err) {
      console.warn("Invalid token:", err);
      return false;
    }
  },
};
