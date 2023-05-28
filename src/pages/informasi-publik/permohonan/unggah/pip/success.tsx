import PageLayouts from "@/components/layouts/PageLayouts";
import Image from "next/image";
import React from "react";

const success = (props: any) => {
  return (
    <PageLayouts title="UFPIP">
      <div className="text-center uppercase text-3xl font-bold text-blue-400">
        <h1>
          KAMI SEDANG MEMPROSES FORMULIR PERMOHONAN INFORMASI PUBLIK ANDA
        </h1>
        <h1>SILAKAN TUNGGU BALASAN EMAIL ATAU WHATSAPP DARI KAMI</h1>
        <Image
          src={"/assets/images/ufpip.png"}
          alt="gambar-sukses"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </PageLayouts>
  );
};

export default success;
