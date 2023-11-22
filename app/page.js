"use client";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import homeBannerImg from "../public/images/home-banner-img.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { authStore, commonStore } from "../stores/useStore";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { BsBriefcase } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import Layout from "@/components/layouts/Website";
import Alert from "../components/Alert";
import Input from "../components/html/Input";

const Home = () => {
  const { loginData, setLoginData, login } = authStore;
  const { userKind, errorFields, errorMessage, successMessage, setIsLoading } =
    commonStore;
  const { data: session } = useSession();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleInputChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Layout>
      <div className='flex items-center px-10 lg:px-12 xl:px-16 w-full max-w-screen-2xl mx-auto pt-8 space-x-10'>
        <div className='w-7/12'>
          <div className='text-4xl text-slate-700 font-semibold font-mono'>
            Тук има <span className='text-[#1967d2]'>93,178</span> публикации за
            теб!
          </div>

          <div className='text-slate-400 text-sm font-semibold mt-2.5'>
            Намери Работа, Служители & Възможност за кариера
          </div>

          <div className='bg-white p-5 shadow border border-slate-200 rounded-lg flex items-center space-x-3 mt-8'>
            <div className='flex items-center w-full'>
              <HiOutlineMagnifyingGlass className='h-7 w-7 sm:mt-0.5 text-gray-500' />

              <input
                type='text'
                placeholder='име, ключова дума или компания'
                className='text-gray-700 text-sm focus:outline-none w-full p-2.5'
              />
            </div>

            <div className='flex items-center w-full border-l-2 pl-2'>
              <CiLocationOn className='h-8 w-8 sm:mt-0.5 text-gray-500' />

              <input
                type='text'
                placeholder='град или държава'
                className='text-gray-700 text-sm focus:outline-none w-full p-2.5'
              />
            </div>

            <button className='flex justify-center text-white bg-blue-500 hover:bg-[#1967d2] hover:text-white font-semibold focus:outline-none rounded-lg py-2.5 px-4 transition-all active:scale-95'>
              Намери
            </button>
          </div>

          <div className='text-slate-400 text-sm mt-2.5 ml-0.5'>
            <span className='font-semibold mr-2.5 text-slate-500'>
              Популярни търсения:{" "}
            </span>{" "}
            Програмист, Дизайнер, Архитект, Шофьор
          </div>
        </div>

        <div className='w-5/12 relative'>
          <div className='absolute top-10 -left-36 bg-white p-3.5 rounded-xl shadow-md border border-slate-100 flex items-center space-x-4 w-72'>
            <div className='bg-[#fef3d9] p-2.5 rounded-lg'>
              <BsEnvelope className='text-[#f9ae0b] w-8 h-8' />
            </div>

            <div className='font-semibold text-slate-700'>
              Направи запитване до Ричард Mуфан
            </div>
          </div>

          <div className='absolute top-20 -right-16 bg-white p-3.5 rounded-xl shadow-md border border-slate-100 items-center space-x-4 w-64'>
            <div className='text-center font-semibold text-slate-700 mb-3'>
              10k+ Кандидати
            </div>

            <AvatarGroup isBordered>
              <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
              <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' />
              <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
              <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026302d' />
              <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
            </AvatarGroup>
          </div>

          <div className='absolute top-80 -right-8 bg-white p-3.5 rounded-xl shadow-md border border-slate-100 flex items-center space-x-4 w-72'>
            <div className='bg-[#f8d5d3] p-2.5 rounded-full'>
              <BsBriefcase className='text-red-400 w-7 h-7' />
            </div>

            <div>
              <div className='font-semibold'>Творческа агенция</div>
              <div className='text-gray-400 text-sm'>Стартирайте сега</div>
            </div>

            <div className='bg-[#f8d5d3] p-2 rounded-full mt-1'>
              <FaCheck className='text-white' />
            </div>
          </div>

          <Image
            src={homeBannerImg}
            alt='Picture of the author'
            width={"100%"}
            height={660}
          />
        </div>
      </div>
    </Layout>
  );
};

export default observer(Home);
