import MainCard from "@/components/cards/MainCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const index = (props: any) => {
  return (
    <PageLayouts title="Berita Serta Merta">
      <ContainerLayout
        header={<h2>berita serta merta</h2>}
        className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 !p-0 !m-4"
      >
        {[1, 1, 1, 1, 1, 1].map((_, index) => (
          <MainCard
            key={index}
            id="asd8as8x79cv9x7c9v"
            image="https://dummyimage.com/300x400/0d7dbd/fffff&text=gambar+berita"
            title="Contoh berita serta merta"
            author="admin"
            date="12 Januari 2023, 10.10"
          />
        ))}
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
