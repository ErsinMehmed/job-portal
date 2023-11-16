"use client";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Button, Checkbox } from "@nextui-org/react";
import { authStore, commonStore } from "../stores/useStore";
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
    <>
      Home page
      <button onClick={() => signOut()}>изход</button>
    </>
  );
};

export default observer(Home);
