import { makeObservable, observable, action } from "mobx";
import adAction from "@/actions/adAction";

class Ad {
  ads = [];
  currentPage = 1;
  perPage = 10;
  isLoading = true;
  searchText = "";
  showFilter = false;
  filterData = {
    dateFrom: "",
    dateTo: "",
    status: "",
    field: "",
    employmentType: "",
    minSalary: null,
    maxSalary: null,
  };
  adDataCreate = {
    title: "Заглавие",
    category: "Категория",
    position: "Длъжност",
    employment_type: "Тип заетоест",
  };

  constructor() {
    makeObservable(this, {
      ads: observable,
      currentPage: observable,
      perPage: observable,
      isLoading: observable,
      searchText: observable,
      filterData: observable,
      showFilter: observable,
      adDataCreate: observable,
      setAds: action,
      setCurrentPage: action,
      setPerPage: action,
      setIsLoading: action,
      setSearchText: action,
      setFilterData: action,
      setShowFilter: action,
      setAdDataCreate: action,
    });
  }

  setAds = (data) => {
    this.ads = data;
  };

  setCurrentPage = (data) => {
    this.currentPage = data;
  };

  setPerPage = (perPage) => {
    this.perPage = perPage;

    const newTotalPages = Math.ceil(
      this.ads.pagination?.total_results / perPage
    );

    this.setCurrentPage(
      this.currentPage > newTotalPages ? newTotalPages : this.currentPage
    );

    this.loadUserAds(
      this.currentPage > newTotalPages ? newTotalPages : this.currentPage
    );
  };

  setIsLoading = (data) => {
    this.isLoading = data;
  };

  setSearchText = (data) => {
    this.searchText = data;
    this.setCurrentPage(1);
    this.loadUserAds();
  };

  setFilterData = (data) => {
    this.filterData = data;
  };

  setShowFilter = (data) => {
    this.showFilter = data;
  };

  setAdDataCreate = (data) => {
    this.adDataCreate = data;
  };

  loadUserAds = async (newPage) => {
    this.setAds(
      await adAction.getUserAds(
        newPage ?? this.currentPage,
        this.perPage,
        this.searchText,
        this.filterData
      )
    );

    this.setIsLoading(false);
  };

  handlePageChange = (direction) => {
    const newPage =
      direction === "next" ? this.currentPage + 1 : this.currentPage - 1;
    this.setCurrentPage(newPage);
    this.loadUserAds();
  };

  handlePageClick = (page) => {
    this.setCurrentPage(page);
    this.loadUserAds();
  };

  searchAds = () => {
    this.setSearchText("");
    this.setCurrentPage(1);
    this.loadUserAds();
  };
}

export default new Ad();
