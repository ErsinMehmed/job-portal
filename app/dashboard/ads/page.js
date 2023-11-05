"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { commonStore, adStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Dashboard";
import Table from "@/components/table/Table";
import Pagination from "@/components/table/Pagination";

const Ads = () => {
  const {
    ads,
    perPage,
    loadAds,
    handlePageChange,
    handlePageClick,
    setPerPage,
  } = adStore;

  useEffect(() => {
    loadAds();
  }, [loadAds]);

  const filteredAds = ads.ads?.map(
    ({ title, location, position, employment_type, field, salary }) => ({
      title,
      location,
      position,
      employment_type,
      field,
      salary,
    })
  );

  return (
    <Layout>
      <Table
        title='Обяви'
        data={filteredAds}
        columns={["заглавие", "локация", "позиция", "тип", "сфера", "заплата"]}
        perPage={perPage}
        setPerPage={setPerPage}
        pagination={ads.pagination}>
        {" "}
        <Pagination
          currentPage={ads.pagination?.current_page}
          totalPages={ads.pagination?.total_pages}
          totalItems={ads.pagination?.total_results}
          perPage={ads.pagination?.per_page}
          handlePrevPage={handlePageChange}
          handleNextPage={() => handlePageChange("next")}
          handlePageClick={(pageNumber) => {
            handlePageClick(pageNumber);
          }}
        />
      </Table>
    </Layout>
  );
};

export default observer(Ads);
