import { signIn } from "next-auth/react";

class Auth {
  createTeacherApi = async (data) => {
    try {
      const response = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response.json();
    } catch (error) {
      throw error;
    }
  };

  login = async (data) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default new Auth();
