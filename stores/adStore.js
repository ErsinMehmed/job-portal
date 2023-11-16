import { makeObservable, observable, action } from "mobx";
import adApi from "@/actions/adAction";

class Ad {
  ads = [];
  currentPage = 1;
  perPage = 10;
  isLoading = true;
  searchText = "";
  filterData = {
    dateFrom: "",
    dateTo: "",
    status: "",
    field: "",
    employmentType: "",
    minSalary: null,
    maxSalary: null,
  };

  constructor() {
    makeObservable(this, {
      ads: observable,
      currentPage: observable,
      perPage: observable,
      isLoading: observable,
      searchText: observable,
      filterData: observable,
      setAds: action,
      setCurrentPage: action,
      setPerPage: action,
      setIsLoading: action,
      setSearchText: action,
      setFilterData: action,
    });
  }

  setAds = (ads) => {
    this.ads = ads;
  };

  setCurrentPage = (currentPage) => {
    this.currentPage = currentPage;
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

  setIsLoading = (loading) => {
    this.isLoading = loading;
  };

  setSearchText = (searchText) => {
    this.searchText = searchText;
    this.loadUserAds();
  };

  setFilterData = (filterData) => {
    this.filterData = filterData;
  };

  loadUserAds = async (newPage) => {
    this.setAds(
      await adApi.getUserAds(
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
    this.loadUserAds();
  };
}

export default new Ad();
