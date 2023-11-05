class Ad {
  getAds = async (page, perPage) => {
    try {
      let url = `/api/ads?page=${page ?? 1}&per_page=${perPage ?? 10}`;

      const response = await fetch(url);

      return response.json();
    } catch (error) {
      throw error;
    }
  };
}

export default new Ad();
