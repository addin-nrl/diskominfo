import PegawaiCard from "@/components/cards/PegawaiCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import { PegawaiInterface, pegawai } from "@/interfaces/pegawaiInterface";
import React from "react";

const Index = (props: any) => {
  const [dataPegawai, setDataPegawai] = React.useState<PegawaiInterface[]>([]),
    [counter, setCounter] = React.useState<number>(1),
    [dataPegawaiMaxPage, setDataPegawaiMaxPage] = React.useState<number>(3);

  React.useEffect(() => {
    console.log("counter", counter);
    for (let i = 1; i <= pegawai.length; i++) {
      if (i <= counter * 9) {
        console.log(i, pegawai.length);
        setDataPegawai(pegawai.slice(0, i));
      } else {
        break;
      }
    }
  }, [counter]);

  return (
    <PageLayouts title="Profil Pegawai">
      <ContainerLayout
        header={
          <>
            <h2>profil pegawai</h2>
            <h2>dinas komunikasi dan informatika kota serang</h2>
          </>
        }
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 !p-0 !m-4"
      >
        {dataPegawai &&
          dataPegawai.map(
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
      <button
        disabled={counter === dataPegawaiMaxPage}
        onClick={() =>
          setCounter((prev) => (prev <= dataPegawaiMaxPage ? prev + 1 : prev))
        }
        className="bg-sky-600 disabled:bg-sky-600/50 disabled:text-white/60 disabled:hover:shadow-none disabled:hover:scale-100 uppercase px-3 py-1 rounded-lg text-white text-lg font-semibold mx-auto block hover:bg-sky-700 transition-all duration-300 hover:scale-110 active:scale-95 mb-10 hover:shadow-xl shadow-sky-900"
      >
        selengkapnya
      </button>
    </PageLayouts>
  );
};

export default Index;
