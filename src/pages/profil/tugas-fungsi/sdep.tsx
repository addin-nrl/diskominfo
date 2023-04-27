import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";

const sdep = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>tugas dan fungsi</h2>
            <h2>bidang statistik, dokumentasi dan evaluasi pemerintahan</h2>
          </>
        }
      >
        <p>
          Bidang Statistik, Dokumentasi dan Evaluasi Informasi mempunyai tugas
          melaksanakan sebagian tugas Dinas yang berkenaan statistik,
          dokumentasi dan pengelolaan data, serta evaluasi informasi.
        </p>
        <p>
          Untuk melaksanakan tugas sebagaimana dimaksud pada ayat (1) Bidang
          Statistik, Dokumentasi dan Evaluasi Informasi mempunyai fungsi :
        </p>
        <ul className="list-decimal ml-5 indent-0 text-start break-normal">
          <li> Penyelenggaraan Statistik; </li>
          <li> Penyelenggaraan dokumentasi dan pengelolaan data; </li>
          <li> Penyelenggaraan evaluasi informasi; </li>
          <li>
            Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas yang
            berkaitan dengan tugasnya.
          </li>
        </ul>
        <p>
          Bidang Statistik, Dokumentasi dan Evaluasi Informasi dipimpin oleh
          seorang Kepala Bidang yang berada di bawah dan bertanggung jawab
          kepada Kepala Dinas.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default sdep;
