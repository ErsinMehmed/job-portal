class Faculty {
  getFaculties = async () => {
    try {
      const response = await fetch("api/faculties");

      return response.json();
    } catch (error) {
      throw error;
    }
  };
}

export default new Faculty();
