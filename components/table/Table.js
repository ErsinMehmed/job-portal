import React, { useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Chip,
  ModalFooter,
} from "@nextui-org/react";
import { perPageResult } from "@/app/data";
import { isAdActive } from "@/utils";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Loader from "./Loader";
import Select from "./Select";
import Link from "next/link";

const Table = (props) => {
  const [adId, setAdId] = useState(null);

  const toggleFilterSection = () => {
    props.setShowFilter(!props.showFilter);
  };

  const handleDeleteAd = (id) => {
    props.deleteAd(id);
  };

  const handleInputChange = (value) => {
    props.setSearchBarText(value);
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderCellValue = (key, value) => {
    switch (key) {
      case "creator":
        return value.name;
      case "salary":
        return `${value}.00 лв.`;
      case "expired":
        const isActive = isAdActive(value);
        return (
          <Chip
            className="capitalize"
            color={isActive ? "success" : "danger"}
            size="sm"
            variant="flat"
          >
            {isActive ? "Активна" : "Изтекла"}
          </Chip>
        );
      default:
        return value;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 2xl:px-0">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl mt-3">
                Изтрий обявата
              </ModalHeader>
              <ModalBody>
                <div>Сигурни ли сте, че искате да изтриете обявата ?</div>

                <div className="flex flex-row mt-3 mb-4 space-x-3 justify-evenly">
                  <button
                    onClick={() => {
                      onClose();
                      handleDeleteAd(adId);
                    }}
                    className="w-full py-2.5 text-sm font-semibold text-center text-white transition-all bg-red-600 border border-red-600 rounded-lg hover:bg-red-500 active:scale-95"
                  >
                    Изтрий
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full py-2.5 text-sm font-semibold text-center text-gray-700 transition-all bg-white border border-gray-200 rounded-lg hover:bg-gray-100 active:scale-95"
                  >
                    Откажи
                  </button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <SearchBar
        isLoading={props.isLoading}
        placeholder={props.searchBarPlaceholder}
        value={props.searchBarValue}
        text={props.searchBarText}
        onChange={(value) => handleInputChange(value)}
        filterButtonOnClick={toggleFilterSection}
        disabled={props.showFilter}
        filterButtonShow={props.filterSection}
      />

      {props.filterSection && (
        <Filter
          show={props.showFilter}
          close={toggleFilterSection}
          searchOnClick={props.filterSearchOnClick}
          data={props.filterData}
          setData={props.setFilterData}
        />
      )}

      <div
        className={`bg-white p-4 rounded-t-lg shadow border border-gray-100 ${
          props.showFilter ? "mt-4" : ""
        }`}
      >
        {props.isLoading ? (
          <>
            <div className="h-1.5 bg-gray-200 rounded-full w-16 mb-2"></div>
            <div className="h-1.5 bg-gray-200 rounded-full w-20"></div>
          </>
        ) : (
          <h2 className="text-lg font-semibold leading-tight">{props.title}</h2>
        )}
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-b-lg overflow-hidden table-fixed">
          <table className="min-w-full leading-normal bg-white">
            {props.isLoading ? (
              <Loader
                numberOfRows={props.perPage}
                cellCount={props.columns.length + 1}
                numberOfColumn={props.columns.length + 1}
              />
            ) : (
              <>
                <thead>
                  <tr>
                    {props.columns.map((column, index) => (
                      <th
                        className="px-4 py-3.5 border-b-2 border-[#ebf4ff] bg-[#ebf4ff] text-left text-sm font-bold text-slate-700 uppercase tracking-wider"
                        key={index}
                      >
                        {column}
                      </th>
                    ))}

                    <th
                      colSpan={2}
                      className="px-5 text-center py-3.5 border-b-2 border-[#ebf4ff] bg-[#ebf4ff] text-sm font-bold text-slate-800 uppercase tracking-wider"
                    >
                      Действия
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white w-full">
                  {props.data?.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.entries(row).map(
                        ([key, value], cellIndex) =>
                          key !== "_id" && (
                            <td
                              className={`${
                                cellIndex === 1
                                  ? "font-semibold text-slate-800"
                                  : "text-slate-600"
                              } px-4 py-4 border-b border-[#ebf4ff] text-sm whitespace-nowrap`}
                              key={cellIndex}
                            >
                              {renderCellValue(key, value)}
                            </td>
                          )
                      )}

                      <td className="pl-4 py-1.5 border-b border-[#ebf4ff] text-center">
                        <Link
                          href={`${props.editButtonLink + row._id}`}
                          className="flex w-fit text-white  bg-[#0071f5] hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center transition-all active:scale-90"
                        >
                          <MdModeEditOutline className="w-4 h-4" />
                        </Link>
                      </td>

                      <td className="pr-4 py-1.5 border-b border-[#ebf4ff] text-center">
                        <button
                          type="button"
                          onClick={() => {
                            setAdId(row._id);
                            onOpen();
                          }}
                          className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center transition-all active:scale-90"
                        >
                          <MdDelete className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>

          {props.totalPages > 1 && (
            <div className="px-5 py-4 bg-white border-t flex  items-center justify-between">
              <div className="w-32 h-0 -mt-10">
                {props.isLoading ? (
                  <div className="bg-[#f4f4f5] w-14 h-8 rounded-lg px-2 pt-2 mt-1">
                    <div className="h-1 animate-pulse bg-gray-200 rounded-full w-10/12 mb-2"></div>
                    <div className="h-1 animate-pulse bg-gray-200 rounded-full"></div>
                  </div>
                ) : (
                  <Select
                    options={perPageResult}
                    value={props.perPage}
                    onChange={(event) => props.setPerPage(event)}
                  />
                )}
              </div>

              {props.children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
