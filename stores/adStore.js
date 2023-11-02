import { makeObservable, observable, action } from "mobx";
import adApi from "@/apis/ad";

class Ad {
  ads = {};

  constructor() {
    makeObservable(this, {
      ads: observable,
      setAds: action,
    });
  }

  setAds = (ads) => {
    this.ads = ads;
  };

  loadAds = async () => {
    this.setAds(await adApi.getAds());
  };
}

export default new Ad();
