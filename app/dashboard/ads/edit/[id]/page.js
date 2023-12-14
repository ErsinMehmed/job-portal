"use client";
import { observer } from "mobx-react-lite";
import Layout from "@/components/layouts/Dashboard";
import ShowEditCreate from "@/components/ad/ShowEditCreate";

const AdEdit = () => {
  return (
    <Layout>
      <ShowEditCreate editable={true} />
    </Layout>
  );
};

export default observer(AdEdit);
