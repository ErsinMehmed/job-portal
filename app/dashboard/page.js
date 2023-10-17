"use client";

import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { authStore, commonStore } from "../../stores/useStore";
import Layout from "../../components/layouts/Dashboard";

const Dashboard = () => {
  const { loginData, setLoginData, login } = authStore;
  const { errorFields, errorMessage, successMessage } = commonStore;

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div>
      <Layout>
        <Button className="mt-20" onClick={() => signOut()}>
          Излез
        </Button>
      </Layout>
    </div>
  );
};

export default observer(Dashboard);
