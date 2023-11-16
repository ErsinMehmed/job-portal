class Ad {
  constructor() {
    this.cachedAds = new Map();
  }

  getUserAds = async (page, perPage, searchText, filterData) => {
    try {
      const cacheKey = `${page}_${perPage}_${searchText}_${filterData?.dateFrom}_${filterData?.dateTo}_${filterData?.status}_${filterData?.field}_${filterData?.employmentType}_${filterData?.minSalary}_${filterData?.maxSalary}`;

      if (this.cachedAds.has(cacheKey)) {
        return this.cachedAds.get(cacheKey);
      }

      let url = `/api/user/ads?page=${page ?? 1}&per_page=${perPage ?? 10}`;

      if (searchText) {
        url += `&search=${searchText}`;
      }

      if (filterData?.dateFrom) {
        url += `&date_from=${filterData.dateFrom}`;
      }

      if (filterData?.dateTo) {
        url += `&date_to=${filterData.dateTo}`;
      }

      if (filterData?.status) {
        url += `&status=${filterData.status}`;
      }

      if (filterData?.field) {
        url += `&field=${filterData.field}`;
      }

      if (filterData?.employmentType) {
        url += `&employment_type=${filterData.employmentType}`;
      }

      if (filterData?.minSalary) {
        url += `&min_salary=${filterData.minSalary}`;
      }

      if (filterData?.maxSalary) {
        url += `&max_salary=${filterData.maxSalary}`;
      }

      const response = await fetch(url);

      const data = await response.json();

      // this.cachedAds.set(cacheKey, data);

      return data;
    } catch (error) {
      throw error;
    }
  };

  clearCache() {
    this.cachedAds.clear();
  }
}

export default new Ad();
