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
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { adStore } from "@/stores/useStore";
import { getWords, getRemainingWords } from "@/utils";
import adAction from "@/actions/adAction";
import Image from "next/image";
import moment from "moment";
import adBannerImg from "@/public/images/ad-show-banner.png";
import adProfileImg from "@/public/images/ad-profile-logo.png";
import Autocomplete from "@/components/html/Autocomplete";
import { dashboardCategories, employmentTypes } from "@/app/data";
import "moment/locale/bg";

const ShowEditCreate = (props) => {
  const { adDataCreate, setAdDataCreate } = adStore;
  const { data: session } = useSession();
  const params = useParams();
  const [adData, setadData] = useState();
  const [activeElement, setActiveElement] = useState(null);
  const inputRef = useRef(null);

  const handleElementClick = (element) => {
    setActiveElement(element);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [activeElement]);

  const handleInputChange = (name, value) => {
    setAdDataCreate({ ...adDataCreate, [name]: value });
  };

  const renderInputElement = (field, width) => {
    return (
      <input
        ref={inputRef}
        value={adDataCreate[field]}
        onChange={(event) => handleInputChange(field, event.target.value)}
        className={`text-center focus:outline-none border border-slate-100 shadow-lg rounded-lg w-${width} py-0`}
        onBlur={() => setActiveElement(null)}
      />
    );
  };

  useEffect(() => {
    getadData(params.id);
  }, []);

  const getadData = async (id) => {
    setadData(await adAction.getAd(id));
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
        <div className="rounded-2xl shadow-md border order-2 lg:order-1">
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
                ? renderInputElement("title")
                : adDataCreate.title
              : adData?.ad?.title ?? ""}
          </h2>

          <div className="flex flex-wrap justify-center mt-1.4 sm:mt-2.5 space-x-1 sm:space-x-2">
            {props.editable ? (
              <div
                onClick={() => handleElementClick("category")}
                className="cursor-pointer"
              >
                {activeElement === "category" ? (
                  <Autocomplete
                    onChange={(value) => handleInputChange("category", value)}
                    items={dashboardCategories}
                    value={adDataCreate.category}
                    label="Избери категория"
                    onBlur={() => setActiveElement(null)}
                  />
                ) : (
                  <Chip isDisabled color="primary" variant="shadow">
                    {adDataCreate.category}
                  </Chip>
                )}
              </div>
            ) : (
              <Chip isDisabled color="primary" variant="shadow">
                {adData?.ad?.category}
              </Chip>
            )}

            {props.editable ? (
              <div
                onClick={() => handleElementClick("position")}
                className="cursor-pointer"
              >
                {activeElement === "position" ? (
                  <Autocomplete
                    onChange={(value) => handleInputChange("position", value)}
                    items={dashboardCategories}
                    value={adDataCreate.position}
                    label="Избери джлъжност"
                    onBlur={() => setActiveElement(null)}
                  />
                ) : (
                  <Chip isDisabled color="primary" variant="shadow">
                    {adDataCreate.position}
                  </Chip>
                )}
              </div>
            ) : (
              <Chip isDisabled color="primary" variant="shadow">
                {adData?.ad?.position}
              </Chip>
            )}

            {props.editable ? (
              <div
                onClick={() => handleElementClick("employment_type")}
                className="cursor-pointer"
              >
                {activeElement === "employment_type" ? (
                  <Autocomplete
                    onChange={(value) =>
                      handleInputChange("employment_type", value)
                    }
                    items={employmentTypes}
                    value={adDataCreate.employment_type}
                    label="Избери тип заетост"
                    onBlur={() => setActiveElement(null)}
                  />
                ) : (
                  <Chip isDisabled color="primary" variant="shadow">
                    {adDataCreate.employment_type}
                  </Chip>
                )}
              </div>
            ) : (
              <Chip isDisabled color="primary" variant="shadow">
                {adData?.ad?.employment_type}
              </Chip>
            )}
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
                {moment(adData?.ad?.updatedAt)
                  .locale("bg")
                  .format("D MMMM YYYY")}
              </span>
            </h2>
          </div>

          <div className="px-6 sm:px-12 text-slate-600 mt-5 text-justify sm:text-left">
            {getWords(adData?.ad.details ?? "", 40)}
          </div>

          <div className="px-6 sm:px-12 text-slate-600 mt-3 text-justify sm:text-left">
            {getRemainingWords(adData?.ad.details ?? "", 40)}
          </div>

          <h2 className="font-semibold text-xl sm:text-2xl text-slate-700 mb-2.5 mt-10 sm:mt-12 px-6 sm:px-12">
            Изисквания за позицията
          </h2>

          <ul className="pl-10 pr-3 sm:px-16 space-y-2 text-slate-600">
            {adData?.ad?.qualifications &&
              adData?.ad.qualifications.map((qualification, index) => (
                <li key={index} className="list-disc">
                  {qualification}
                </li>
              ))}
          </ul>

          <h2 className="font-semibold text-xl sm:text-2xl text-slate-700 mb-2.5 mt-10 sm:mt-12 px-6 sm:px-12">
            Търсени умения
          </h2>

          <ul className="pl-10 pr-3 sm:px-16 space-y-2 text-slate-600">
            {adData?.ad?.skills &&
              adData?.ad.skills.map((skill, index) => (
                <li key={index} className="list-disc">
                  {skill}
                </li>
              ))}
          </ul>

          <h2 className="font-semibold text-xl sm:text-2xl text-slate-700 mb-2.5 mt-10 sm:mt-12 px-6 sm:px-12">
            Предлагаме ти
          </h2>

          <ul className="pl-10 pr-3 sm:px-16 space-y-2 text-slate-600 mb-10">
            {adData?.ad?.job_benefits &&
              adData?.ad.job_benefits.map((benefit, index) => (
                <li key={index} className="list-disc">
                  {benefit}
                </li>
              ))}
          </ul>

          <div className="flex gap-2 mb-5 px-6 sm:px-20 lg:hidden">
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

        <div className="orde-1 lg:order-2">
          <div className="lg:sticky top-24 lg:w-96">
            <div className="flex gap-2 mb-3.5">
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

            <div className="rounded-2xl shadow-md border p-5 space-y-3 mt-5 text-slate-700">
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
