import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";

const komunikasi_informatika = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        background
        header={
          <>
            <h2>tugas dan fungsi</h2>
            <h2>bidang komunikasi dan informatika</h2>
          </>
        }
      >
        <p>
          Bidang Komunikasi dan Informatika mempunyai tugas melaksanakan
          sebagian tugas dinas yang berkenaan dengan komunikasi dan informatika,
          infrastruktur teknologi komunikasi dan informasi, layanan teknologi
          komunikasi dan informatika, dan tata kelola, keamanan informasi dan
          persandian.
        </p>
        <p>
          Untuk melaksanakan tugas sebagaimana dimaksud pada ayat (1) Bidang
          Komunikasi dan Informatika mempunyai fungsi :
        </p>
        <ul className="list-decimal ml-5 indent-0 text-start break-normal">
          <li>
            Penyelenggaraan infrastruktur teknologi komunikasi dan Informatika
          </li>
          <li>Penyelenggaraan layanan teknologi komunikasi dan Informatika</li>
          <li>Penyelenggaraan tata kelola, keamanan dan persandian</li>
          <li>
            Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas yang
            berkaitan dengan tugasnya.
          </li>
        </ul>
        <p>
          Bidang Komunikasi dan Informatika dipimpin oleh seorang Kepala Bidang
          yang berada di bawah dan bertanggung jawab kepada Kepala Dinas.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default komunikasi_informatika;
