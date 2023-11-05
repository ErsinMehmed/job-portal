import { makeObservable, observable, action } from "mobx";
import adApi from "@/apis/ad";

class Ad {
  ads = [];
  currentPage = 1;
  perPage = 10;
  isLoading = true;

  constructor() {
    makeObservable(this, {
      ads: observable,
      currentPage: observable,
      perPage: observable,
      isLoading: observable,
      setAds: action,
      setCurrentPage: action,
      setPerPage: action,
      setIsLoading: action,
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

    this.loadAds(
      this.currentPage > newTotalPages ? newTotalPages : this.currentPage
    );
  };

  setIsLoading = (loading) => {
    this.isLoading = loading;
  };

  loadAds = async (newPage) => {
    this.setAds(await adApi.getAds(newPage ?? this.currentPage, this.perPage));
    this.setIsLoading(false);
  };

  handlePageChange = (direction) => {
    const newPage =
      direction === "next" ? this.currentPage + 1 : this.currentPage - 1;
    this.setCurrentPage(newPage);
    this.loadAds();
  };

  handlePageClick = (page) => {
    this.setCurrentPage(page);
    this.loadAds();
  };
}

export default new Ad();
