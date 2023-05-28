import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import { useRouter } from "next/router";
import React from "react";

const Index = (props: any) => {
  const router = useRouter();
  return (
    <PageLayouts title="UFPIP">
      <ContainerLayout
        background
        header={
          <>
            <h2>UNGGAH FILE PERMOHONAN INFORMASI PUBLIK</h2>
            <h2>dinas komunikasi dan informatika kota serang</h2>
          </>
        }
        className="grid indent-0 grid-cols-7 gap-x-3 md:gap-y-3 gap-y-2 items-start"
      >
        <label
          htmlFor="instansi"
          className="md:col-span-2 !m-0 col-span-7 text-xl"
        >
          Instansi <span className="text-red-500">*</span>
        </label>
        <input
          id="instansi"
          type="text"
          className="bg-sky-500/25 md:col-span-5 col-span-7 w-full rounded-xl px-3 p-2 !m-0"
        />

        <label
          htmlFor="nama-lengkap"
          className="md:col-span-2 !m-0 col-span-7 text-xl"
        >
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          id="nama-lengkap"
          type="text"
          className="bg-sky-500/25 md:col-span-5 col-span-7 w-full rounded-xl px-3 p-2 !m-0"
        />

        <label
          htmlFor="alamat"
          className="md:col-span-2 !m-0 col-span-7 text-xl"
        >
          Alamat <span className="text-red-500">*</span>
        </label>
        <textarea
          id="alamat"
          className="bg-sky-500/25 min-h-[150px] md:col-span-5 col-span-7 w-full rounded-xl px-3 p-2 !m-0"
        />

        <label
          htmlFor="email"
          className="md:col-span-2 !m-0 col-span-7 text-xl"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="text"
          className="bg-sky-500/25 md:col-span-5 col-span-7 w-full rounded-xl px-3 p-2 !m-0"
        />

        <label
          htmlFor="whatsapp"
          className="md:col-span-2 !m-0 col-span-7 text-xl"
        >
          No. Whatsapp <span className="text-red-500">*</span>
        </label>
        <input
          id="whatsapp"
          type="text"
          className="bg-sky-500/25 md:col-span-5 col-span-7 w-full rounded-xl px-3 p-2 !m-0"
        />

        <label htmlFor="file" className="md:col-span-2 !m-0 col-span-7 text-xl">
          Upload File <span className="text-red-500">*</span>
        </label>
        <input
          id="file"
          type="file"
          className="bg-sky-500/25 md:col-span-5 col-span-7 w-full rounded-xl px-3 p-2 !m-0"
        />
        <div className="flex gap-3 col-span-7 justify-end">
          <button
            onClick={() => router.push("/informasi-publik/permohonan/unggah/pip/success")}
            className="px-3 py-1 rounded-lg bg-green-500 uppercase font-semibold text-white hover:bg-green-600 transition-all hover:shadow-xl shadow-green-500"
          >
            submit
          </button>
          <button className="px-3 py-1 rounded-lg bg-red-500 uppercase font-semibold text-white hover:bg-red-600 transition-all hover:shadow-xl shadow-red-500">
            cancel
          </button>
        </div>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default Index;
