"use client";
import React, { useEffect, useState, useRef } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { Chip } from "@nextui-org/react";
import {
  CiLocationOn,
  CiAlignBottom,
  CiTimer,
  CiClock2,
  CiUmbrella,
  CiDollar,
  CiMicrophoneOn,
  CiSettings,
  CiCalendar,
  CiUser,
  CiCircleList,
  CiSearch,
} from "react-icons/ci";
import { BsTrash3 } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi2";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { adStore } from "@/stores/useStore";
import { getWords, getRemainingWords } from "@/utils";
import adAction from "@/actions/adAction";
import Image from "next/image";
import moment from "moment";
import adBannerImg from "@/public/images/ad-show-banner.png";
import adProfileImg from "@/public/images/ad-profile-logo.png";
import EditableBadge from "@/components/ad/EditableBadge";
import {
  dashboardCategories,
  employmentTypes,
  workPositions,
} from "@/app/data";
import "moment/locale/bg";

const ShowEditCreate = (props) => {
  const { adDataCreate, setAdDataCreate } = adStore;
  const { data: session } = useSession();
  const params = useParams();
  const [adData, setAdData] = useState();
  const [activeElement, setActiveElement] = useState(null);
  const [renderSectionData, setRenderSectionData] = useState([
    {
      title: "Търсени умения",
      key: "skills",
      placeholder: "Примерно търсено умение",
      order: adDataCreate.qualification_section_order,
      orderName: "qualification_section_order",
    },
    {
      title: "Изисквания за позицията",

      key: "qualifications",
      placeholder: "Примерно изискване за длъжността",
      order: adDataCreate.skill_section_order,
      orderName: "skill_section_order",
    },
    {
      title: "Предлагаме ти",
      key: "job_benefits",
      placeholder: "Какво предлагате",
      order: adDataCreate.job_benefit_section_order,
      orderName: "job_benefit_section_order",
    },
  ]);
  const inputRef = useRef(null);

  const handleElementClick = (element) => {
    setActiveElement(element);
    removeArrayEmptyValue();
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".editable-element")) {
      setActiveElement(null);
    }
  };

  const removeArrayEmptyValue = () => {
    Object.keys(adDataCreate).forEach((field) => {
      const fieldValue = adDataCreate[field];

      if (Array.isArray(fieldValue)) {
        const emptyValueIndex = fieldValue.findIndex((value) => value === "");

        if (emptyValueIndex !== -1 && fieldValue.length > 1) {
          const updatedArray = fieldValue.filter((value) => value !== "");
          setAdDataCreate({ ...adDataCreate, [field]: updatedArray });
        }
      }
    });
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [activeElement]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (name, value, index) => {
    if (index !== undefined) {
      const updatedArray = [...adDataCreate[name]];
      updatedArray[index] = value;

      setAdDataCreate({ ...adDataCreate, [name]: updatedArray });
    } else {
      setAdDataCreate({ ...adDataCreate, [name]: value });
    }
  };

  const renderInputElement = (field, index, align, width) => {
    return (
      <input
        ref={inputRef}
        value={
          index || index === 0
            ? adDataCreate[field][index]
            : adDataCreate[field]
        }
        onChange={(event) => {
          handleInputChange(
            field,
            event.target.value,
            index || index === 0 ? index : undefined
          );
        }}
        className={`text-${
          align ?? "left"
        } focus:outline-none border border-slate-100 shadow-lg rounded-lg w-${
          width ?? "full"
        } py-0 editable-element`}
      />
    );
  };

  const renderTextareaElement = (field) => {
    return (
      <textarea
        ref={inputRef}
        value={adDataCreate[field]}
        onChange={(event) => handleInputChange(field, event.target.value)}
        className={`focus:outline-none border border-slate-100 shadow-lg rounded-lg w-full editable-element h-60 sm:h-44 md:h-40 lg:h-36 xl:h-32 resize-none p-1.5`}
        onBlur={() => setActiveElement(null)}
      />
    );
  };

  const renderListItems = (items) => (
    <ul className="pl-10 pr-3 sm:px-16 space-y-2 text-slate-600">
      {items &&
        items.map((item, index) => (
          <li key={index} className="list-disc">
            {item}
          </li>
        ))}
    </ul>
  );

  const renderListCreateEditItems = (fieldName, text) => (
    <ul
      className={` ${
        adDataCreate[fieldName].length > 1 ? "px-11" : "px-16"
      }  space-y-2 text-slate-600`}
    >
      {adDataCreate[fieldName] &&
        adDataCreate[fieldName].map((item, index) =>
          activeElement === fieldName + index ? (
            renderInputElement(fieldName, index)
          ) : (
            <>
              <li
                key={index}
                className={`list-disc cursor-pointer ${
                  adDataCreate[fieldName].length > 1 && "flex items-center"
                }`}
              >
                {adDataCreate[fieldName].length > 1 && (
                  <span>
                    <button
                      className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95 mr-2"
                      onClick={() => {
                        adDataCreate[fieldName].splice(index, 1);
                        removeArrayEmptyValue();
                      }}
                    >
                      <BsTrash3 />
                    </button>
                  </span>
                )}

                <span
                  onClick={() => {
                    handleElementClick(fieldName + index);
                  }}
                >
                  {item}
                </span>
              </li>

              {index === adDataCreate[fieldName].length - 1 &&
                adDataCreate[fieldName].length < 10 && (
                  <div className="flex justify-center mt-4 w-full">
                    <button
                      className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95"
                      onClick={() => {
                        adDataCreate[fieldName].push(text);
                        removeArrayEmptyValue();
                      }}
                    >
                      <HiOutlinePlus />
                    </button>
                  </div>
                )}
            </>
          )
        )}
    </ul>
  );

  const renderSection = (title, key, placeholder, order, orderFieldName) => {
    const isFirst = order === 1;
    const isLast =
      order === Math.max(...renderSectionData.map((section) => section.order));

    const handleArrowClick = (direction) => {
      const sections = [...renderSectionData];
      const index = sections.findIndex((section) => section.key === key);

      if (direction === "up" && index > 0) {
        sections[index].order = sections[index - 1].order;
        sections[index - 1].order = order;
      } else if (direction === "down" && index < sections.length - 1) {
        sections[index].order = sections[index + 1].order;
        sections[index + 1].order = order;
      }

      setAdDataCreate({
        ...adDataCreate,
        [orderFieldName]: sections,
      });
    };

    return (
      <div key={key}>
        {props.editable ? (
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl sm:text-2xl text-slate-700 mb-2.5 mt-10 sm:mt-12 px-6 sm:px-12">
              {title}
            </h2>

            {isFirst && (
              <button
                className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95 mt-9 mr-12"
                onClick={() => handleArrowClick("down")}
              >
                <IoIosArrowDown className="w-5 h-5" />
              </button>
            )}

            {!isFirst && !isLast && (
              <div>
                <div>
                  <button
                    className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95 mt-9 mr-12"
                    onClick={() => handleArrowClick("up")}
                  >
                    <IoIosArrowUp className="w-5 h-5" />
                  </button>
                </div>
                <button
                  className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95 mt-2 mr-12"
                  onClick={() => handleArrowClick("down")}
                >
                  <IoIosArrowDown className="w-5 h-5" />
                </button>
              </div>
            )}

            {isLast && (
              <button
                className="rounded-full p-1.5 bg-white border hover:bg-slate-50 transition-all active:scale-95 mt-9 mr-12"
                onClick={() => handleArrowClick("up")}
              >
                <IoIosArrowUp className="w-5 h-5" />
              </button>
            )}
          </div>
        ) : (
          <h2 className="font-semibold text-xl sm:text-2xl text-slate-700 mb-2.5 mt-10 sm:mt-12 px-6 sm:px-12">
            {title}
          </h2>
        )}

        {props.editable
          ? renderListCreateEditItems(key, placeholder)
          : renderListItems(adData?.ad?.[key])}
      </div>
    );
  };

  useEffect(() => {
    getAdData(params.id);
  }, [params.id]);

  const getAdData = async (id) => {
    setAdData(await adAction.getAd(id));
  };

  return (
    <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto relative">
      <Link
        href="/ads"
        className="flex items-center pl-4 2xl:pl-5 pt-8 text-blue-600 font-semibold hover:ml-1.5 hover:text-blue-400 transition-all"
      >
        <HiOutlineArrowLeft className="mt-0.5 mr-1 w-5 h-5" />
        Виж всички обяви
      </Link>

      <div className="w-full px-4 2xl:px-5 pb-10 pt-8 flex flex-col-reverse lg:flex-row gap-8 relative">
        <div className="rounded-2xl shadow-md border pb-10">
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

          <h2
            className={`font-semibold text-2xl sm:text-4xl text-center text-slate-700 mt-7 ${
              activeElement !== "title" && "mb-1.5"
            } ${props.editable && "cursor-pointer"}`}
            onClick={() => handleElementClick("title")}
          >
            {props.editable
              ? activeElement === "title"
                ? renderInputElement("title", undefined, "center")
                : adDataCreate.title
              : adData?.ad?.title ?? ""}
          </h2>

          <div className="flex flex-wrap justify-center mt-1.4 sm:mt-2.5 space-x-1 sm:space-x-2">
            <EditableBadge
              editable={props.editable}
              editCreateValue={adDataCreate.category}
              onChange={(value) => handleInputChange("category", value)}
              items={dashboardCategories}
              value={adDataCreate.category}
              label="Избери категория"
              text={adData?.ad?.category}
            />

            <EditableBadge
              editable={props.editable}
              editCreateValue={adDataCreate.position}
              onChange={(value) => handleInputChange("position", value)}
              items={workPositions}
              value={adDataCreate.position}
              label="Избери длъжност"
              text={adData?.ad?.position}
            />

            <EditableBadge
              editable={props.editable}
              editCreateValue={adDataCreate.employment_type}
              onChange={(value) => handleInputChange("employment_type", value)}
              items={employmentTypes}
              value={adDataCreate.employment_type}
              label="Избери тип заетост"
              text={adData?.ad?.employment_type}
            />
          </div>

          <div className="px-6 sm:px-12 py-10">
            <div className="border-b-2 border-gray-200" />
          </div>

          <div className="sm:flex justify-between items-center px-6 sm:px-12">
            <h2 className="font-semibold text-xl sm:text-2xl text-center text-slate-700 mb-1.5">
              Описание
            </h2>

            <h2 className="font-semibold text-sm sm:text-base text-center text-slate-700 mb-1.5">
              Публикувано на
              <span className="text-slate-500">
                {" "}
                {props.editable
                  ? moment().locale("bg").format("D MMMM YYYY")
                  : moment(adData?.ad?.updatedAt)
                      .locale("bg")
                      .format("D MMMM YYYY")}
              </span>
            </h2>
          </div>

          {props.editable ? (
            <div
              className="px-6 sm:px-12 text-slate-600 mt-5 text-justify sm:text-left cursor-pointer"
              onClick={() => handleElementClick("details")}
            >
              {activeElement === "details"
                ? renderTextareaElement("details")
                : adDataCreate.details}
            </div>
          ) : (
            <>
              <div className="px-6 sm:px-12 text-slate-600 mt-5 text-justify sm:text-left">
                {getWords(adData?.ad.details ?? "", 40)}
              </div>

              <div className="px-6 sm:px-12 text-slate-600 mt-3 text-justify sm:text-left">
                {getRemainingWords(adData?.ad.details ?? "", 40)}
              </div>
            </>
          )}

          <div>
            <div>
              {renderSectionData
                .sort((a, b) => a.order - b.order)
                .map((section) =>
                  renderSection(
                    section.title,
                    section.key,
                    section.placeholder,
                    section.order,
                    section.orderName
                  )
                )}
            </div>
          </div>

          <div className="flex gap-2 mt-8 px-6 sm:px-20 lg:hidden">
            <button className="bg-blue-500 text-white py-2 rounded-full w-full transition-all hover:bg-[#1967d2] lg:hover:scale-105 font-semibold">
              Кандидаствай
            </button>

            {session?.user && (
              <button className="bg-[#e2eaf8] rounded-full p-2.5 text-blue-500 hover:text-white hover:bg-blue-500 transition-all lg:hover:scale-110">
                <FiBookmark className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 lg:sticky top-24 w-full lg:w-96">
            <div className="hidden lg:flex gap-2 mb-3.5">
              <button className="bg-blue-500 text-white py-2 rounded-full w-full transition-all hover:bg-[#1967d2] font-semibold active:scale-95">
                Кандидаствай
              </button>

              {session?.user && (
                <button className="bg-[#e2eaf8] rounded-full p-2.5 text-blue-500 hover:text-white hover:bg-blue-500 transition-all active:scale-95">
                  <FiBookmark className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="rounded-2xl shadow-md border p-5 space-y-3">
              <h2 className="font-semibold text-lg text-slate-700 border-b-2 pb-2.5">
                ДЕТАЙЛИ
              </h2>

              <div className="flex items-center gap-1">
                <CiLocationOn className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  {adData?.ad?.location}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiMicrophoneOn className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  {adData?.ad?.languages &&
                    adData?.ad.languages.map((language, index) => (
                      <span key={index}>
                        {index === 0 ? "" : " "}
                        {language}
                        {index !== adData?.ad.languages.length - 1 && ","}
                      </span>
                    ))}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiAlignBottom className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  {adData?.ad?.employment_type}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiSettings className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  {adData?.ad?.education_requirements}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiTimer className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  Години опит {adData?.ad?.experience}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiClock2 className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  {adData?.ad?.employment}
                </div>
              </div>

              <div className="flex items-center gap-1">
                <CiUmbrella className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  Отпуска: {adData?.ad?.paid_leave} дни
                </div>
              </div>

              <div className="flex items-center gap-1 border-b-2 pb-2.5">
                <CiDollar className="text-slate-600 w-5 h-5 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  Заплата: {adData?.ad?.salary} лв.
                </div>
              </div>

              <h2 className="font-semibold text-lg text-slate-700">
                Меки умения
              </h2>

              <div className="flex flex-wrap gap-2">
                {adData?.ad?.soft_skills &&
                  adData?.ad.soft_skills.map((skill, index) => (
                    <Chip
                      key={index}
                      size="sm"
                      color="primary"
                      variant="shadow"
                      isDisabled
                    >
                      {skill}
                    </Chip>
                  ))}
              </div>
            </div>

            <div className="rounded-2xl shadow-md border p-5 space-y-3 mt-8 sm:mt-0 sm:ml-8 lg:ml-0 lg:mt-5 text-slate-700">
              <Image
                src={adProfileImg}
                alt="Ad banner"
                width={"100%"}
                height={"100%"}
                className="rounded-xl bg-white"
              />

              <h2 className="font-semibold sm:text-lg border-b-2 pb-3 pt-2">
                {adData?.ad?.creator.name}
              </h2>

              <p className="text-sm sm:text-base">
                {getWords(adData?.ad?.creator.company_description ?? "", 20)}
              </p>

              <p className="text-sm sm:text-base">
                {getRemainingWords(
                  adData?.ad?.creator.company_description ?? "",
                  20
                )}
              </p>

              <div className="flex items-center gap-1 text-sm sm:text-base">
                <CiCalendar className="text-slate-600 w-4 h-4 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  В България
                  {" " + moment(adData?.ad?.creator.company_created).year()}
                </div>
              </div>

              <div className="flex items-center gap-1 border-b-2 pb-3 text-sm sm:text-base">
                <CiUser className="text-slate-600 w-4 h-4 mt-0.5" />

                <div className="text-slate-700 font-semibold">
                  {adData?.ad?.creator.company_size} служители
                </div>
              </div>

              <div className="flex text-sm sm:text-base items-center justify-between text-blue-600 pt-1">
                <button className="flex items-center gap-1 hover:text-blue-400 transition-all">
                  <CiCircleList className="w-4 h-4 mt-0.5" />

                  <div className="font-semibold">ОБЯВИ ({adData?.adCount})</div>
                </button>

                <button className="flex items-center gap-1 hover:text-blue-400 transition-all">
                  <CiSearch className="w-4 h-4 mt-0.5" />

                  <div className="font-semibold">ВИЖ ПРОФИЛА</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(ShowEditCreate);
