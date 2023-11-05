class Ad {
  constructor() {
    this.cachedAds = new Map();
  }

  async getAds(page, perPage) {
    try {
      const cacheKey = `${page}_${perPage}`;

      if (this.cachedAds.has(cacheKey)) {
        return this.cachedAds.get(cacheKey);
      }

      const url = `/api/ads?page=${page ?? 1}&per_page=${perPage ?? 10}`;
      const response = await fetch(url);

      const data = await response.json();

      this.cachedAds.set(cacheKey, data);

      return data;
    } catch (error) {
      throw error;
    }
  }

  clearCache() {
    this.cachedAds.clear();
  }
}

export default new Ad();
