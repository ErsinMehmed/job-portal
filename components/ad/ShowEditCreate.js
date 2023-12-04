"use client";
import React, { useEffect, useState } from "react";
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
import adAction from "@/actions/adAction";
import Image from "next/image";
import moment from "moment";
import adBannerImg from "@/public/images/ad-show-banner.png";
import adProfileImg from "@/public/images/ad-profile-logo.png";
import "moment/locale/bg";

const ShowEditCreate = () => {
  const { data: session } = useSession();
  const params = useParams();
  const [adData, setAdData] = useState();

  useEffect(() => {
    getAdData(params.id);
  }, []);

  const getAdData = async (id) => {
    setAdData(await adAction.getAd(id));
  };

  console.log(adData);

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
        <div className="rounded-2xl shadow-md border">
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

          <h2 className="font-semibold text-2xl sm:text-4xl text-center text-slate-700 mb-1.5 mt-7">
            {adData?.title}
          </h2>

          <div className="flex justify-center mt-1.4 sm:mt-2.5 space-x-1 sm:space-x-2">
            <Chip isDisabled color="primary" size="sm">
              {adData?.category}
            </Chip>

            <Chip isDisabled color="primary" size="sm">
              {adData?.position}
            </Chip>

            <Chip
              className="hidden sm:flex"
              isDisabled
              color="primary"
              size="sm"
            >
              {adData?.employment_type}
            </Chip>
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
                {moment(adData?.updatedAt).locale("bg").format("D MMMM YYYY")}
              </span>
            </h2>
          </div>

          <div className="px-6 sm:px-12 text-slate-600 mt-5 text-justify sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            augue sagittis erat consectetur est. Blandit blandit nec mauris
            pulvinar. Lectus duis amet tortor, sit tincidunt. Rhoncus tincidunt
            imperdiet penatibus vitae risus, vitae. Blandit auctor justo nisl
            massa.
          </div>

          <div className="px-6 sm:px-12 text-slate-600 mt-3 text-justify sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            dictum ultrices lacus sodales nunc felis eu, consectetur arcu. Vitae
            nulla scelerisque id pellentesque feugiat vel eu.
          </div>

          <h2 className="font-semibold text-xl sm:text-2xl text-slate-700 mb-2.5 mt-10 sm:mt-12 px-6 sm:px-12">
            Изисквания за позицията
          </h2>

          <ul className="pl-10 pr-3 sm:px-16 space-y-2 text-slate-600">
            <li className="list-disc">
              Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac
              auctor.
            </li>
            <li className="list-disc">
              Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac
              auctor.
            </li>
            <li className="list-disc">
              Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
            </li>
            <li className="list-disc">
              Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac
              auctor.
            </li>
          </ul>

          <h2 className="font-semibold text-xl sm:text-2xl text-slate-700 mb-2.5 mt-10 sm:mt-12 px-6 sm:px-12">
            Предлагаме ти:
          </h2>

          <ul className="pl-10 pr-3 sm:px-16 space-y-2 text-slate-600 mb-10">
            <li className="list-disc">
              Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac
              auctor.
            </li>
            <li className="list-disc">
              Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac
              auctor.
            </li>
            <li className="list-disc">
              Mauris commodo quis imperdiet massa tincidunt nunc pulvinar
            </li>
            <li className="list-disc">
              Neque sodales ut etiam sit amet nisl purus. Non tellus orci ac
              auctor.
            </li>
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

        <div className="lg:sticky top-24 lg:h-[53.6rem] lg:w-[50rem] xl:w-[45rem]">
          <div className="flex gap-2 mb-3.5">
            <button className="bg-blue-500 text-white py-2 rounded-full w-full transition-all hover:bg-[#1967d2] lg:hover:scale-105 font-semibold">
              Кандидаствай
            </button>

            {session?.user && (
              <button className="bg-[#e2eaf8] rounded-full p-2.5 text-blue-500 hover:text-white hover:bg-blue-500 transition-all lg:hover:scale-110">
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
                {adData?.location}
              </div>
            </div>

            <div className="flex items-center gap-1">
              <CiMicrophoneOn className="text-slate-600 w-5 h-5 mt-0.5" />

              <div className="text-slate-700 font-semibold">
                Английски, Немски
              </div>
            </div>

            <div className="flex items-center gap-1">
              <CiAlignBottom className="text-slate-600 w-5 h-5 mt-0.5" />

              <div className="text-slate-700 font-semibold">
                Постоянна работа
              </div>
            </div>

            <div className="flex items-center gap-1">
              <CiSettings className="text-slate-600 w-5 h-5 mt-0.5" />

              <div className="text-slate-700 font-semibold">Бакалавър</div>
            </div>

            <div className="flex items-center gap-1">
              <CiTimer className="text-slate-600 w-5 h-5 mt-0.5" />

              <div className="text-slate-700 font-semibold">
                Години опит от 5 до 10
              </div>
            </div>

            <div className="flex items-center gap-1">
              <CiClock2 className="text-slate-600 w-5 h-5 mt-0.5" />

              <div className="text-slate-700 font-semibold">
                Пълно работно време
              </div>
            </div>

            <div className="flex items-center gap-1">
              <CiUmbrella className="text-slate-600 w-5 h-5 mt-0.5" />

              <div className="text-slate-700 font-semibold">
                Отпуска: 25 дни
              </div>
            </div>

            <div className="flex items-center gap-1">
              <CiDollar className="text-slate-600 w-5 h-5 mt-0.5" />

              <div className="text-slate-700 font-semibold">
                Заплата: 1800 лв. (Бруто)
              </div>
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

            <h2 className="font-semibold border-b-2 pb-3 pt-2">
              Bulgaria IT Company
            </h2>

            <p className="text-sm">
              International telesales company working with global brands in
              English, Italian and Spanish speaking.
            </p>

            <p className="text-sm">
              No cold calls! We only work with warm high-quality leads and
              trusted international partners.
            </p>

            <div className="flex items-center gap-1 text-sm">
              <CiCalendar className="text-slate-600 w-4 h-4 mt-0.5" />

              <div className="text-slate-700 font-semibold">
                В България от 2020
              </div>
            </div>

            <div className="flex items-center gap-1 border-b-2 pb-3  text-sm">
              <CiUser className="text-slate-600 w-4 h-4 mt-0.5" />

              <div className="text-slate-700 font-semibold">200 служители</div>
            </div>

            <div className="flex text-sm items-center justify-between text-blue-600 pt-1">
              <button className="flex items-center gap-1 hover:text-blue-400 transition-all">
                <CiCircleList className="w-4 h-4 mt-0.5" />

                <div className="font-semibold">ОБЯВИ (7)</div>
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
  );
};

export default ShowEditCreate;
