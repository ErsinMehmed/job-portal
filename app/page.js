"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useInView } from "react-intersection-observer";
import { BsCoin, BsMegaphone, BsTruck, BsCodeSlash } from "react-icons/bs";
import { PiCarProfile } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { authStore, commonStore } from "../stores/useStore";
import Layout from "@/components/layouts/Website";
import MainSection from "@/components/home/MainSection";
import adAction from "@/actions/adAction";

const Home = () => {
  const { loginData, setLoginData, login } = authStore;
  const { userKind, errorFields, errorMessage, successMessage, setIsLoading } =
    commonStore;
  const [adCategories, setAdCategories] = useState([]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const categoriesIconClasses = "w-9 h-9 text-blue-500";
  const categories = [
    {
      title: adCategories[0]?.name,
      positions: `(${adCategories[0]?.count} отворени позиции)`,
      icon: <BsCoin className={categoriesIconClasses} />,
    },
    {
      title: adCategories[1]?.name,
      positions: `(${adCategories[1]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
    {
      title: adCategories[2]?.name,
      positions: `(${adCategories[2]?.count} отворени позиции)`,
      icon: <BsCodeSlash className={categoriesIconClasses} />,
    },
    {
      title: adCategories[3]?.name,
      positions: `(${adCategories[3]?.count} отворени позиции)`,
      icon: <BsTruck className={categoriesIconClasses} />,
    },
    {
      title: adCategories[4]?.name,
      positions: `(${adCategories[4]?.count} отворени позиции)`,
      icon: <PiCarProfile className={categoriesIconClasses} />,
    },
    {
      title: adCategories[5]?.name,
      positions: `(${adCategories[5]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
    {
      title: adCategories[6]?.name,
      positions: `(${adCategories[6]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
    {
      title: adCategories[7]?.name,
      positions: `(${adCategories[7]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
    {
      title: adCategories[8]?.name,
      positions: `(${adCategories[8]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
    {
      title: adCategories[9]?.name,
      positions: `(${adCategories[9]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
    {
      title: adCategories[10]?.name,
      positions: `(${adCategories[10]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
    {
      title: adCategories[11]?.name,
      positions: `(${adCategories[11]?.count} отворени позиции)`,
      icon: <BsMegaphone className={categoriesIconClasses} />,
    },
  ];

  useEffect(() => {
    const popularCategories = [
      "Счетоводство и Финанси",
      "Маркетинг, Реклама, ПР",
      "Информационни технологии",
      "Логистика, Спедиция",
      "Шофьори, Куриери",
      "Човешки ресурси (HR)",
      "Здравеопазване и Фармация",
      "Недвижими имоти",
      "Търговия и Продажби",
      "Сигурност и Охрана",
      "Телекоми",
      "Мениджмънт",
    ];

    adAction
      .getAdCategories(popularCategories)
      .then((response) => {
        setAdCategories(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [setIsLoading]);
  console.log(adCategories);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleInputChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Layout>
      <MainSection />

      <div className="w-full py-10 md:py-16 border-b flex justify-center">
        <div className="w-full md:w-auto md:max-w-screen-2xl">
          <h2 className="font-bold text-3xl text-center text-slate-700 mb-10">
            Популярни категории
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-5 xl:gap-8 px-5 lg:px-5 xl:px-16">
            {categories.map((category, index) => (
              <Link key={index} href="/">
                <div className="border rounded-lg p-3.5">
                  <div className="flex items-center">
                    <div className="bg-gray-100 w-20 h-20 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>

                    <div className="text-slate-700 font-semibold ml-5 text-lg">
                      <div>{category.title}</div>

                      <div className="text-gray-500 text-sm mt-1  ">
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
        className="bg-blue-100 h-96 mt-5"
      >
        мехмед
      </motion.div>
    </Layout>
  );
};

export default observer(Home);
