import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const index = (props: any) => {
  return (
    <PageLayouts title="Profil Sejarah">
      <ContainerLayout
        background
        header={
          <>
            <h2>sejarah dinas</h2>
            <h2>dinas komunikasi dan informatika kota serang</h2>
          </>
        }
      >
        <p>
          Dinas Komunikasi dan Informatika Kota Serang adalah salah perangkat
          daerah di Kota Serang sebagai unsur pembantu Walikota dan Wakil
          Walikota Serang dalam menjalankan pemerintahan di bidang Komunikasi
          dan Informatika.
        </p>
        <p>
          Dasar hukum berdirinya Dinas Komunikasi dan Informatika Kota Serang
          yaitu berdasarkan Peraturan Daerah (Perda) Kota Serang Nomor 9 Tahun
          2020 Tentang Peraturan Daerah Nomor 7 Tahun 2016 tentang Pembentukan
          dan Susunan Perangkat Daerah Kota Serang, diperkuat oleh Peraturan
          Walikota (perwal) Kota Serang Nomor 16 tahun 2021 tentang Kedudukan
          Susunan Organisasi, Tugas dan Fungsi serta Tata Kerja Dinas Komunikasi
          dan Informatika Kota Serang.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
