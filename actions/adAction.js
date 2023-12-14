class Ad {
  getUserAds = async (page, perPage, searchText, filterData) => {
    try {
      let url = `/api/ads?page=${page ?? 1}&per_page=${perPage ?? 10}`;

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

      return data;
    } catch (error) {
      throw error;
    }
  };

  getAd = async (id) => {
    const response = await fetch(`/api/ads/${id}`);

    return response.json();
  };

  getAdCategories = async (categories) => {
    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categories),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  };

  deleteAd = async (id) => {
    try {
      const response = await fetch(`/api/ads?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  };
}

export default new Ad();
