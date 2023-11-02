"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { commonStore, adStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Dashboard";
import Table from "@/components/Table";

const Ads = () => {
  const { ads, loadAds } = adStore;

  useEffect(() => {
    loadAds();
  }, [loadAds]);

  return (
    <div>
      <Layout>
        <Table />
      </Layout>
    </div>
  );
};

export default observer(Ads);
