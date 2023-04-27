import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const index = (props: any) => {
  return (
    <PageLayouts title="Visi & Misi">
      <ContainerLayout
        header={
          <>
            <h2>visi dan misi</h2>
            <h2>Dinas komunikasi dan informatika kota serang</h2>
          </>
        }
        className="space-y-4 !m-0 !p-0 text-center text-xl"
      >
        <div className="bg-gray-400/10 space-y-5 backdrop-blur-md rounded-2xl m-3 p-5">
          <h2 className="font-bold uppercase">Visi</h2>
          <p>”Terwujudnya Kota Peradaban yang Berdaya dan Berbudaya”</p>
        </div>
        <div className="bg-gray-400/10 space-y-5 backdrop-blur-md rounded-2xl m-3 p-5">
          <h2 className="font-bold uppercase">Misi</h2>
          <ul className="list-decimal list-inside">
            <li>Menguatkan Peradaban Berbasis Nilai-Nilai Kemanusiaan.</li>
            <li>
              Meningkatkan Sarana Prasarana Daerah yang Berwawasan Lingkungan.
            </li>
            <li>
              Meningkatkan Perekonomian Daerah dan Pemberdayaan Masyarakat yang
              Berdaya Saing.
            </li>
            <li>Meningkatkan Tata Kelola Pemerintahan yang Baik.</li>
          </ul>
        </div>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
