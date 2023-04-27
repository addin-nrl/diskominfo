import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const sub_bagian_umkep = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        background
        header={
          <>
            <h2>tugas dan fungsi</h2>
            <h2>sub bagian umum dan kepegawaian</h2>
          </>
        }
      >
        <p>
          Sub Bagian Umum dan Kepegawaian mempunyai tugas melaksanakan sebagian
          tugas dan fungsi Sekretariat di bidang administrasi umum dan
          administrasi kepegawaian.
        </p>
        <p>
          Untuk melaksanakan tugas sebagaimana dimaksud pada ayat (1) Sub Bagian
          Umum dan Kepegawaian mempunyai fungsi meliputi :
        </p>
        <ul className="list-decimal ml-5 indent-0 text-start break-normal">
          <li>
            Melaksanakan penyusunan program dan rencana kegiatan Sub Bagian Umum
            dan Kepegawaian;
          </li>
          <li>
            Melaksanakan pengelolaan urusan surat-menyurat/tata naskah dinas;
          </li>
          <li>
            Melaksanakan pengelolaan urusan rumah tangga, perpustakaan,
            kearsipan, keprotokolan, dan kehumasan;
          </li>
          <li>
            Melakukan pengoordinasian dan penyusunan bahan rancangan produk
            hukum daerah penunjang seluruh kegiatan pada dinas;
          </li>
          <li>
            Melaksanakan pembinaan dan pengembangan pegawai sesuai dengan
            ketentuan peraturan perundang-undangan;
          </li>
          <li>
            Melaksanakan pelayanan administrasi kepegawaian sesuai dengan
            ketentuan peraturan perundang-undangan;
          </li>
          <li>
            Melaksanakan fasilitasi penilaian prestasi kerja pegawai sesuai
            dengan ketentuan peraturan perundang-undangan;
          </li>
          <li>
            Melaksanakan fasilitasi pemrosesan penetapan angka kredit jabatan
            pelaksana dan jabatan fungsional di lingkungan dinas;
          </li>
          <li>Melaksanakan penyusunan Rencana Kebutuhan Barang;</li>
          <li>
            Melaksanakan pengelolaan barang/perlengkapan/aset sesuai dengan
            ketentuan peraturan perundang-undangan;
          </li>
          <li>
            Melaksanakan pemeliharaan kebersihan serta kerapihan ruangan kantor;
          </li>
          <li>
            Melaksanakan fasilitasi dalam pembangunan dan pengembangan
            e-government;
          </li>
          <li>
            melaksanakan monitoring, evaluasi, dan pelaporan kegiatan Sub Bagian
            Umum dan Kepegawaian;
          </li>
          <li>melaksanakan tugas lain sesuai dengan bidang tugasnya.</li>
        </ul>
        <p>
          Sub Bagian Umum dan Kepegawaian dipimpin oleh seorang Kepala Sub
          Bagian yang berada di bawah dan bertanggung jawab kepada Sekretaris
          Dinas.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default sub_bagian_umkep;
