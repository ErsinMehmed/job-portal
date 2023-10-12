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

      return response;
    } catch (error) {
      throw error;
    }
  };
}

export default new Auth();
