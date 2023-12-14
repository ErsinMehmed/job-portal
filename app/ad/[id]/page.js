"use client";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { authStore, commonStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Website";
import ShowEditCreate from "@/components/ad/ShowEditCreate";

const AdShow = () => {
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
      <ShowEditCreate />
    </Layout>
  );
};

export default observer(AdShow);
