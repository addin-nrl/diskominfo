import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const index = (props: any) => {
  return (
    <PageLayouts title="Sambutan Kadis">
      <ContainerLayout
        header={
          <>
            <h2>Sambutan kepala dinas</h2>
            <h2>dinas informasi dan informatika kota serang</h2>
          </>
        }
      >
        <p>
          Assalamu{"'"}alaikum Wr. Wb., salam sejahtera, salam kebajikan,
          homsuatiyastu, namebudaye.
        </p>

        <p>
          Puji syukur kita panjatkan kepada Tuhan Yang Maha Esa, yang dengan
          rahmatNya telah mengantarkan kita kepada era disruptif, era dimana
          semakin pesat perkembangan arus informasi dan pemanfaatan teknologi.
        </p>

        <p>
          Diskominfo Kota Serang dalam mendukung visi dan misi Kota Serang
          menjadi kota pintar yang berbasis kepada pemanfaatan teknologi serta
          Penguasaan Teknologi Informasi dengan baik dapat membantu kita untuk
          mewujudkan e-goverment dalam rangka terciptanya Good Government dan
          Good Governance yang sudah menjadi tuntutan masyarakat dewasa ini.
          Yang siap menjamin transparansi, efisiensi dan efektivitas melalui
          Teknologi Informasi dan Komunikasi (TIK).
        </p>

        <p>
          Panduan-panduan pengembangan Teknologi Informatika di dalam bidang
          Kepemerintahan sudah di rumuskan oleh Pemerintah Pusat melalui
          Instruksi Presiden Republik Indonesia Nomor 6 Tahun 2001 tentang
          Pengembangan dan Pendayagunaan Telematika di Indonesia, Instruksi
          Presiden Republik Indonesia Nomor 3 Tahun 2003 Tentang Kebijakan dan
          strategi nasional pengembangan E-Government serta Peraturan Presiden
          Nomor 95 Tahun 2018 Tentang Sistem Pemerintahan Berbasis Elektronik.
          Berdasarkan panduan dari Pemerintah Pusat tersebut, Pemerintah Kota
          Serang melalui Peraturan Walikota Serang tentang Pengembangan
          E-Government di Lingkungan Pemerintah Kota Serang lebih mempertegas
          lagi perlunya pengembangan Teknologi Informasi di lingkungan
          Pemerintah Kota Serang.
        </p>

        <p>
          Kini Dinas Komunikasi dan Informatika siap menjawab tantangan zaman
          dengan keberadaan portal Pemerintah Kota Serang merupakan wujud dari
          keinginan Pemerintah Kota Serang untuk memberikan informasi yang lebih
          lengkap dan bermanfaat bagi masyarakat Kota Serang khususnya, dan
          umumnya masyarakat Indonesia maupun masyarakat Mancanegara.
        </p>
        <p>
          Semoga informasi di website ini dapat bermanfaat bagi semua pihak,
          baik perangkat daerah dilingkungan pemerintah Kota Serang, maupun
          pihak lain yang membutuhkan informasi tentang Diskominfo.
        </p>
        <p>Tertanda</p>
        <p>Kepala Dinas Komunikasi dan Informatika Kota Serang</p>
        <p>ARIF RAHMAN HAKIM, S.Sos., M.Si</p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
