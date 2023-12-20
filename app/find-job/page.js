"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { adStore } from "@/stores/useStore";
import { FiList } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import Layout from "@/components/layouts/Website";
import AdBox from "@/components/ad/adBox";

const FindJob = () => {
  const { ads, loadUserAds } = adStore;

  useEffect(() => {
    loadUserAds();
  }, [loadUserAds]);

  return (
    <Layout>
      <div className="bg-[#f6f8fd] pt-24 pb-[78px] text-center w-full">
        <h2 className="font-semibold text-2xl sm:text-3xl text-center text-slate-700 mb-2.5">
          Намери работа
        </h2>

        <div className="flex justify-center w-full">
          <Breadcrumbs>
            <BreadcrumbItem startContent={<FaHouse />}>Начало</BreadcrumbItem>
            <BreadcrumbItem startContent={<FiList />}>Обяви</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-3 max-w-screen-2xl mt-10 sm:mt-12 px-6 sm:px-8">
        <div className="col-span-1"></div>
        <div className="col-span-3 md:col-span-2 space-y-5">
          {ads?.ads?.map((ad, index) => (
            <AdBox key={index} data={ad} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default observer(FindJob);
