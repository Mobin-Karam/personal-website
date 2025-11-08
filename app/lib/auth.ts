// Simple localStorage-based mock auth (client-side)
export const Auth = {
  login(username: string, password: string) {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("auth", "true");
      return true;
    }
    return false;
  },

  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token"); // remove JWT token
    }
  },


  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  },

  isLoggedIn: () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    return !!token;
  },
};
