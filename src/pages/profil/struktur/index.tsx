import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import Image from "next/image";
import struktur from "../../../../public/assets/images/struktur-organisasi.png";

const index = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>struktur organisasi</h2>
            <h2>dinas komunikasi dan informatika kota serang</h2>
          </>
        }
        className="!m-0 !mb-5 !p-2"
      >
        <Image
          src={struktur}
          alt="struktur-organisasi"
          className="w-full object-cover bg-blend-overlay shadow-lg rounded-2xl"
        />
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
