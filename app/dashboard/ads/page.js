"use client";

import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { authStore, commonStore } from "@/stores/useStore";
import Layout from "@/components/layouts/Dashboard";

const Ads = () => {
  return (
    <div>
      <Layout>ersin</Layout>
    </div>
  );
};

export default observer(Ads);
