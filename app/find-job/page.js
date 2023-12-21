"use client";
import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { adStore } from "@/stores/useStore";
import { FiList } from "react-icons/fi";
import { FaHouse } from "react-icons/fa6";
import Layout from "@/components/layouts/Website";
import AdBox from "@/components/ad/adBox";

const FindJob = () => {
  const { siteAds, currentPageSite, loadAds, setCurrentPageSite } = adStore;
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const updatedPageSite = currentPageSite + 1;

          setCurrentPageSite(updatedPageSite);

          loadAds(updatedPageSite);
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (observerRef.current) {
      observerRef.current.observe(
        document.getElementById("lazy-load-trigger-element")
      );
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadAds]);

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

      <div className="grid grid-cols-3 gap-x-3 max-w-screen-2xl my-10 px-6 sm:px-8">
        <div className="col-span-1"></div>
        <div className="col-span-3 md:col-span-2 space-y-6">
          {Array.isArray(siteAds) &&
            siteAds.map((ad, index) => <AdBox key={index} data={ad} />)}
        </div>
      </div>

      <div
        id="lazy-load-trigger-element"
        style={{ height: "1px", position: "relative", bottom: "-1px" }}
      />
    </Layout>
  );
};

export default observer(FindJob);
