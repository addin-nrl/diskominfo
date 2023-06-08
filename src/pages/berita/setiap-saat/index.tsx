import MainCard from "@/components/cards/MainCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import { berita } from "@/interfaces/beritaInterface";
import { readFile } from "fs/promises";
import path from "path";
import React from "react";

export const getServerSideProps = async () => {
  const dataPath = path.join(
    process.cwd(),
    "/src/pages/berita/setiap-saat/data-berita.json"
  );
  const res = await readFile(dataPath, "utf-8");
  const data = JSON.parse(res);

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }: any) => {
  return (
    <PageLayouts title="Berita Setiap Saat">
      <ContainerLayout
        header={<h2>berita setiap saat</h2>}
        className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 !p-0 !m-4"
      >
        {data.map((data: berita, index: number) => (
          <MainCard
            key={index}
            id={data.id}
            image={data.image}
            title={data.title}
            author={data.author}
            links={""}
            date={data.date}
          />
        ))}
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
