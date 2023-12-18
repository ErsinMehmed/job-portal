import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBookmark } from "react-icons/fi";
import adAction from "@/actions/adAction";
import Image from "next/image";
import companyImg from "@/public/images/up-logo.webp";

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

  console.log(popularAds);

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
      className="w-full py-10 md:py-16 border-b flex justify-center"
    >
      <div className="w-full md:max-w-screen-2xl">
        <h2 className="font-bold text-2xl sm:text-3xl text-center text-slate-700 mb-1.5">
          Популярни обяви
        </h2>

        <div className="text-slate-500 text-center mb-10">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-5 xl:gap-8 px-5 lg:px-5 xl:px-16"
        >
          {popularAds?.map((ad, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md w-full p-3.5 relative z-0"
            >
              <button className="absolute top-2 right-2 border rounded-full p-1.5 group hover:bg-blue-300 transition-all z-20 active:scale-95">
                <FiBookmark className="w-4 h-4 text-slate-500 group-hover:text-white" />
              </button>

              <div className="flex">
                <Image
                  src={companyImg}
                  alt="Picture of the company"
                  width={"100%"}
                  height={"100%"}
                  className="w-13 h-13"
                />

                <div className="ml-3">
                  <Link
                    href={`/ad/${ad._id}`}
                    className="text-slate-700 font-semibold hover:text-blue-500 transition-all"
                  >
                    {ad.title}
                  </Link>
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
