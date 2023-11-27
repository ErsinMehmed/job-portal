"use client";
import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { authStore, commonStore } from "../stores/useStore";
import Layout from "@/components/layouts/Website";
import MainSection from "@/components/home/MainSection";
import { useInView } from "react-intersection-observer";
import { categories } from "./data";

const Home = () => {
  const { loginData, setLoginData, login } = authStore;
  const { userKind, errorFields, errorMessage, successMessage, setIsLoading } =
    commonStore;
  const { data: session } = useSession();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleInputChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Layout>
      <MainSection />

      <div className='w-full py-16 border-b'>
        <div className='max-w-screen-2xl'>
          <h2 className='font-bold text-3xl text-center text-slate-700 mb-10'>
            Популярни категории
          </h2>

          <div className='grid grid-cols-3 gap-8 px-16'>
            {categories.map((category, index) => (
              <Link
                key={index}
                href='/'>
                <div className='border rounded-lg p-3.5'>
                  <div className='flex items-center'>
                    <div className='bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center'>
                      {category.icon}
                    </div>

                    <div className='text-slate-700 font-semibold ml-5 text-lg'>
                      <div>{category.title}</div>

                      <div className='text-gray-500 text-sm mt-1  '>
                        {category.positions}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='bg-blue-100 h-96 mt-5'>
        мехмед
      </motion.div>
    </Layout>
  );
};

export default observer(Home);
