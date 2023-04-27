import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";

const egov = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>tugas dan fungsi</h2>
            <h2>bidang layanan e-government</h2>
          </>
        }
      >
        <p>
          Bidang Layanan E-Government mempunyai tugas melaksanakan sebagian
          tugas Dinas yang berkenaan dengan fasilitasi dibidang layanan
          e-government, perencanaan dan standarisasi aplikasi, pengembangan dan
          integrasi aplikasi serta pemeliharaan dan implementasi aplikasi.{" "}
        </p>
        <p>
          Untuk melaksanakan tugas sebagaimana dimaksud pada ayat (1) Bidang
          Layanan E-Government mempunyai fungsi :
        </p>
        <ul className="list-decimal ml-5 indent-0 text-start break-normal">
          <li>Penyelenggaraan perancangan dan standarisasi aplikasi;</li>
          <li>Penyelenggaraan pengembangan dan integrasi aplikasi;</li>
          <li>Penyelenggaraan pemeliharaan dan implementasi aplikasi;</li>
          <li>
            Pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas yang
            berkaitan dengan tugasnya.
          </li>
        </ul>
        <p>
          Bidang Layanan E-Government dipimpin oleh seorang Kepala Bidang yang
          berada di bawah dan bertanggung jawab kepada Kepala Dinas.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default egov;
