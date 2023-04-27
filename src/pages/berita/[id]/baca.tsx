import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import { useRouter } from "next/router";
import React from "react";

const Baca = (props: any) => {
  const { query } = useRouter(),
    { id, image, title, author, date } = query;
  console.log(query);
  return (
    <PageLayouts title={title?.toString()}>
      <ContainerLayout header={<h2>{title}</h2>}>
        <h2>{id}</h2>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default Baca;
