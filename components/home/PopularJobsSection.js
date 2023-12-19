import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BsBriefcase, BsGeoAlt, BsClock, BsCashStack } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";
import adAction from "@/actions/adAction";
import { formatCurrency } from "@/utils";
import Image from "next/image";
import companyImg from "@/public/images/up-logo.png";

const PopularJobsSection = () => {
  const [popularAds, setPopularAds] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    adAction
      .getPopularAds()
      .then((response) => {
        setPopularAds(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={
        inView
          ? {
              y: 0,
              opacity: 1,
              transition: { duration: 1.3 },
            }
          : {}
      }
      className='w-full py-10 md:py-16 border-b flex justify-center'>
      <div className='w-full md:max-w-screen-2xl'>
        <h2 className='font-bold text-2xl sm:text-3xl text-center text-slate-700 mb-1.5'>
          Популярни обяви
        </h2>

        <div className='text-slate-500 text-center mb-10'>
          Осъзнайте стойността си и намерете работата, която отговаря на
          изискванията ви
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={
            inView
              ? {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 1.3, delay: 0.8 },
                }
              : {}
          }
          ref={ref}
          className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-5 xl:gap-8 px-5 lg:px-5 xl:px-16'>
          {popularAds?.map((ad, index) => (
            <div
              key={index}
              className='border rounded-lg shadow w-full p-5 sm:p-4 relative z-0'>
              <button className='absolute top-7 right-7 sm:top-2 sm:right-2 border rounded-full p-1.5 group bg-white sm:bg-transparent hover:sm:bg-blue-300 hover:sm:border-blue-300 transition-all z-20 active:scale-95'>
                <FiBookmark className='w-5 h-5 sm:w-4 sm:h-4 text-slate-500 group-hover:sm:text-white' />
              </button>

              <div className='sm:flex'>
                <Image
                  src={companyImg}
                  alt='Picture of the company'
                  width={"100%"}
                  height={"100%"}
                  className='w-full object-cover h-36 sm:w-16 sm:h-16 rounded-lg'
                />

                <div className='sm:ml-3'>
                  <Link
                    href={`/ad/${ad._id}`}
                    className='text-slate-700 font-semibold hover:text-blue-500 transition-all sm:text-lg'>
                    {ad.title}
                  </Link>

                  <div className='flex flex-wrap items-center mt-2 gap-x-3.5 gap-y-1.5'>
                    <div className='flex font-medium text-slate-500 text-sm gap-x-1'>
                      <BsBriefcase className='w-[18px] h-[18px] mt-[1px]' />

                      {ad.position}
                    </div>

                    <div className='flex font-medium text-slate-500 text-sm gap-x-1'>
                      <BsGeoAlt className='w-[18px] h-[18px] mt-[1px]' />

                      {ad.location}
                    </div>

                    <div className='flex font-medium text-slate-500 text-sm gap-x-1'>
                      <BsClock className='w-[18px] h-[18px] mt-[1px]' />

                      {ad.employment}
                    </div>

                    <div className='flex font-medium text-slate-500 text-sm gap-x-1'>
                      <BsCashStack className='w-[18px] h-[18px] mt-[1px]' />

                      {formatCurrency(ad.salary, 0)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PopularJobsSection;
