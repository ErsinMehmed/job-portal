"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { commonStore, adStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Dashboard";
import Table from "@/components/table/Table";
import Pagination from "@/components/table/Pagination";

const AdCreate = () => {
  const {
    ads,
    perPage,
    isLoading,
    loadAds,
    handlePageChange,
    handlePageClick,
    setPerPage,
  } = adStore;

  useEffect(() => {
    loadAds();
  }, [loadAds]);

  return (
    <Layout>
      <div className='flex items-center min-h-screen'>ersin</div>
    </Layout>
  );
};

export default observer(AdCreate);
