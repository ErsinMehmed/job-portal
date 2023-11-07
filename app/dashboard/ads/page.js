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
    isLoading,
    searchText,
    loadAds,
    handlePageChange,
    handlePageClick,
    setPerPage,
    setSearchText,
  } = adStore;

  useEffect(() => {
    loadAds();
  }, [loadAds]);

  const filteredAds = ads.ads?.map(
    ({
      title,
      location,
      position,
      employment_type,
      field,
      salary,
      expired,
    }) => ({
      title,
      location,
      position,
      employment_type,
      field,
      salary,
      expired,
    })
  );

  return (
    <Layout>
      <div className='flex items-center min-h-screen'>
        <Table
          title='Обяви'
          data={filteredAds}
          columns={[
            "заглавие",
            "локация",
            "позиция",
            "тип",
            "сфера",
            "заплата",
            "статус",
          ]}
          perPage={perPage}
          isLoading={isLoading}
          setPerPage={setPerPage}
          pagination={ads.pagination}
          searchBarText='Нова обява'
          searchBarPlaceholder='заглавие, локация или позиция'
          searchBarValue={searchText}
          setSearchBarText={setSearchText}>
          {" "}
          <Pagination
            isLoading={isLoading}
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
      </div>
    </Layout>
  );
};

export default observer(Ads);
