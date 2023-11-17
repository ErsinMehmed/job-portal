"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { adStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Dashboard";
import Table from "@/components/table/Table";
import Pagination from "@/components/table/Pagination";
import LinearLoader from "@/components/LinearLoader";

const Ads = () => {
  const {
    ads,
    perPage,
    isLoading,
    searchText,
    filterData,
    showFilter,
    loadUserAds,
    handlePageChange,
    handlePageClick,
    setPerPage,
    setSearchText,
    setFilterData,
    searchAds,
    setShowFilter,
  } = adStore;

  useEffect(() => {
    loadUserAds();
  }, [loadUserAds]);

  const filteredAds = ads?.ads?.map(
    ({
      _id,
      title,
      location,
      position,
      employment_type,
      field,
      salary,
      expired,
    }) => ({
      _id,
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
      <div className="flex items-center min-h-screen 2xl:px-10">
        <Table
          title="Обяви"
          data={filteredAds}
          columns={[
            "заглавие",
            "локация",
            "позиция",
            "тип",
            "област",
            "заплата",
            "статус",
          ]}
          perPage={perPage}
          filterSearchOnClick={searchAds}
          filterData={filterData}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          setFilterData={setFilterData}
          isLoading={isLoading}
          setPerPage={setPerPage}
          pagination={ads.pagination}
          searchBarText="Нова обява"
          searchBarPlaceholder="заглавие, локация или позиция"
          searchBarValue={searchText}
          setSearchBarText={setSearchText}
          filterSection={true}
          editButtonLink="/dashboard/ads/edit"
        >
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

      <LinearLoader />
    </Layout>
  );
};

export default observer(Ads);
