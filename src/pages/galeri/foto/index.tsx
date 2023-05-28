import MainCard from "@/components/cards/MainCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const index = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>galeri foto</h2>
            <h2>DINAS KOMUNIKASI DAN INFORMATIKA KOTA SERANG</h2>
          </>
        }
        className="grid indent-0 grid-cols-3 gap-5 items-start"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((_, index) => (
          <MainCard
            id={index.toString()}
            image="https://dummyimage.com/300x200/0d7dbd/fffff&text=foto+galeri"
            title="Layanan Pemerintahan"
            author="Mark"
            date="12 Januari 2023, 10.10"
            key={index}
          />
        ))}
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
