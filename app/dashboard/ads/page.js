"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { commonStore, adStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Dashboard";
import Table from "@/components/table/Table";

const Ads = () => {
  const { ads, loadAds } = adStore;

  useEffect(() => {
    loadAds();
  }, [loadAds]);

  return (
    <div>
      <Layout>
        <Table
          title="Ads"
          data={ads}
          columns={[
            "title",
            "location",
            "position",
            "employment type",
            "field",
            "minimum salary",
            "maximum salary",
            "creator",
          ]}
        />
      </Layout>
    </div>
  );
};

export default observer(Ads);
