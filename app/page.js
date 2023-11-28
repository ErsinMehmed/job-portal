"use client";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { authStore, commonStore } from "../stores/useStore";
import Layout from "@/components/layouts/Website";
import MainSection from "@/components/home/MainSection";
import CategorySection from "@/components/home/CategorySection";

const Home = () => {
  const { loginData, setLoginData, login } = authStore;
  const { userKind, errorFields, errorMessage, successMessage, setIsLoading } =
    commonStore;

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  const handleInputChange = (name, value) => {
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <Layout>
      <MainSection />

      <CategorySection />
    </Layout>
  );
};

export default observer(Home);
