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
      >
        anjas
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
