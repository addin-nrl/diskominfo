import PegawaiCard from "@/components/cards/PegawaiCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import { PegawaiInterface, pegawai } from "@/interfaces/pegawaiInterface";
import React from "react";

const index = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>profil pegawai</h2>
            <h2>dinas komunikasi dan informatika kota serang</h2>
          </>
        }
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 !p-0 !m-4"
      >
        {pegawai.map(
          (
            { gambar, jabatan, nama, nomorDinas }: PegawaiInterface,
            index: number
          ) => (
            <PegawaiCard
              key={index}
              gambar={gambar}
              nama={nama}
              jabatan={jabatan}
              nomorDinas={nomorDinas}
            />
          )
        )}
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
