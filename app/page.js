"use client";
import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { authStore, commonStore } from "../stores/useStore";
import Layout from "@/components/layouts/Website";
import MainSeciton from "@/components/home/MainSection";
import { useInView } from "react-intersection-observer";

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
      <MainSeciton />

      <div className="w-full py-20 border-b">
        <div className="text-center text-3xl font-semibold text-slate-700 h-[40rem]">
          Популярни категории
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
