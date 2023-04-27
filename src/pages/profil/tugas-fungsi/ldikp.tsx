import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const ldikp = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>Tugas dan fungsi</h2>
            <h2>BIDANG LAYANAN DISEMINASI INFORMASI DAN KOMUNIKASI PUBLIK</h2>
          </>
        }
      >
        <p>
          Bidang Diseminasi Informasi dan Komunikasi Publik mempunyai tugas
          melaksanakan sebagian tugas Dinas yang berkenaan dengan fasilitasi
          dibidang diseminasi informasi dan komunikasi publik, diseminasi
          informasi media elektronik, diseminasi informasi media cetak, dan
          pengembangan dan kemitraan komunikasi publik.
        </p>
        <p>
          Untuk melaksanakan tugas sebagaimana dimaksud pada ayat (1) Bidang
          Diseminasi Informasi dan Komunikasi Publik mempunyai fungsi :
        </p>
        <ul className="list-decimal ml-5 indent-0 text-start break-normal">
          <li>Penyelenggaraan diseminasi informasi media elektronik</li>
          <li>Penyelenggaraan diseminasi informasi media cetak</li>
          <li>Penyelenggaraan pengembangan dan kemitraan komunikasi publik</li>
          <li>
            Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas yang
            berkaitan dengan tugasnya.
          </li>
        </ul>
        <p>
          Bidang Diseminasi Informasi dan Komunikasi Publik dipimpin oleh
          seorang Kepala Bidang yang berada di bawah dan bertanggung jawab
          kepada Kepala Dinas.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default ldikp;
