"use client";
import { observer } from "mobx-react-lite";
import Layout from "@/components/layouts/Website";
import ShowEditCreate from "@/components/ad/ShowEditCreate";

const AdShow = () => {
  return (
    <Layout>
      <ShowEditCreate />
    </Layout>
  );
};

export default observer(AdShow);
