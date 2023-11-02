class Ad {
  getAds = async () => {
    try {
      const response = await fetch("/api/ads");

      return response.json();
    } catch (error) {
      throw error;
    }
  };
}

export default new Ad();
