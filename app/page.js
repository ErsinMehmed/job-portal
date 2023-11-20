"use client";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import homeBannerImg from "../public/images/home-banner-img.webp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button, Checkbox } from "@nextui-org/react";
import { authStore, commonStore } from "../stores/useStore";
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
      Home page
      <button onClick={() => signOut()}>изход</button>
      <Image
        src={homeBannerImg}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </Layout>
  );
};

export default observer(Home);
