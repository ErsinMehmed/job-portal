"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { authStore, commonStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Website";
import Image from "next/image";
import adBannerImg from "@/public/images/ad-show-banner.png";
import adProfileImg from "@/public/images/ad-profile-logo.png";

const AdShow = () => {
  const { loginData, setLoginData, login } = authStore;
  const { userKind, errorFields, errorMessage, successMessage, setIsLoading } =
    commonStore;

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleInputChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Layout>
      <div className="w-full max-w-screen-2xl mx-auto px-5 pt-16 flex gap-6">
        <div className="rounded-2xl shadow-md border">
          <Image
            src={adBannerImg}
            alt="Ad banner"
            width={"100%"}
            height={"100%"}
            className="rounded-t-2xl h-48"
          />

          <div className="flex justify-center rounded-xl -mt-12">
            <Image
              src={adProfileImg}
              alt="Ad banner"
              width={"100%"}
              height={"100%"}
              className="rounded-xl h-24 w-24 p-1 bg-white"
            />
          </div>

          <h2 className="font-semibold text-4xl text-center text-slate-700 mb-1.5 mt-8">
            Backend Software Engineer
          </h2>
        </div>

        <div className="rounded-2xl shadow-md border h-fit">ersin</div>
      </div>
    </Layout>
  );
};

export default observer(AdShow);
