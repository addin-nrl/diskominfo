import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const diskominfo = (props: any) => {
  return (
    <PageLayouts title="Tugas & Fungsi">
      <ContainerLayout
        background
        header={
          <>
            <h2>Tugas dan fungsi</h2>
            <h2>Dinas komunikasi dan informatika kota serang</h2>
          </>
        }
      >
        <p>
          Dinas Komunikasi dan Informatika mempunyai tugas pokok melaksanakan
          urusan pemerintah di bidang komunikasi, informatika, persandian dan
          statistik berdasarkan asas otonomi dan pembangunan sesuai dengan visi
          misi dan program Walikota sebagaimana dijabarkan dalam Rencana
          Pembangunan Jangka Daerah untuk melaksanakan tugas dan pokok Dinas
          Komunikasi dan Informatika Mempunyai fungsi :
        </p>
        <ul className="list-decimal ml-5 indent-0 text-start break-normal">
          <li>
            Perumusan kebijakan teknis pelaksanaan urusan di bidang komunikasi
            dan informatika.
          </li>
          <li>
            Perumusan kebijakan teknis pelaksanaan urusan di bidang persandian.
          </li>
          <li>
            Perumusan kebijakan teknis pelaksanaan urusan di bidang statistik.
          </li>
          <li>
            Perumusan kebijakan teknis tentang pengembangan dan layanan
            e-Government.
          </li>
          <li>
            Pemberian dukungan atas penyelenggaraan urusan pemerintahan daerah
            dibidang komunikasi dan informatika.
          </li>
          <li>
            Pemberian dukungan atas penyelenggaraan urusan pemerintahan daerah
            dibidang persandian.
          </li>
          <li>
            Pemberian dukungan atas penyelenggaraan urusan pemerintahan daerah
            dibidang statistik.
          </li>
          <li>
            Pembinaan dan pelaksanaan tugas di bidang komunikasi dan
            informatika.
          </li>
          <li>
            Pembinaan dan pelaksanaan tugas di bidang di bidang persandian.
          </li>
          <li>Pembinaan dan pelaksanaan tugas di bidang statistik.</li>
          <li>
            Pelaksanaan fungsi selaku Pejabat Pengelola Informasi dan
            Dokumentasi (PPID).
          </li>
          <li>Pelaksanaan ketatausahaan Dinas.</li>
          <li>Pengelola UPT.</li>
          <li>
            Pelaksanaan tugas lain yang diberikan Walikota sesuai dengan lingkup
            tugas dan fungsinya.
          </li>
        </ul>
        <p>
          Dinas Komunikasi dan Informatika dipimpin oleh seorang Kepala Dinas
          yang berkedudukan di bawah dan bertanggung jawab kepada Walikota
          melalui Sekretaris Daerah.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default diskominfo;
