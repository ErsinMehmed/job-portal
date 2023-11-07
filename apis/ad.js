class Ad {
  constructor() {
    this.cachedAds = new Map();
  }

  async getAds(page, perPage, searchText) {
    try {
      const cacheKey = `${page}_${perPage}_${searchText}`;

      if (this.cachedAds.has(cacheKey)) {
        return this.cachedAds.get(cacheKey);
      }

      let url = `/api/ads?page=${page ?? 1}&per_page=${perPage ?? 10}`;

      if (searchText) {
        url += `&search=${searchText}`;
      }

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
