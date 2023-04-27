import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";

const sekretariat = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>tugas dan fungsi</h2>
            <h2>sekretariat</h2>
          </>
        }
      >
        <p>
          Sekretariat mempunyai tugas membantu Kepala Dinas dalam
          pengkoordinasian pelaksanaan kebijakan penyelenggaraan tugas dan
          fungsi Dinas serta menyelenggarakan kegiatan dibidang administrasi
          umum, keuangan, kepegawaian, program, evaluasi dan pelaporan.
        </p>
        <p>
          Untuk melaksanakan tugas sebagaimana dimaksud pada ayat (1)
          Sekretariat mempunyai fungsi :
        </p>
        <ul className="list-decimal ml-5 indent-0 text-start break-normal">
          <li>
            Menyelenggarakan penyusunan rencana kerja, kinerja, dan anggaran
            tahunan Sekretariat;
          </li>
          <li>
            Menyelenggarakan kegiatan dibidang administrasi umum, keuangan,
            kepegawaian, dan program, evaluasi dan pelaporan dalam melayani
            kepala dinas dalam urusan kedinasan;
          </li>
          <li>
            Menyelenggarakan pembinaan dibidang administrasi umum, keuangan,
            kepegawaian, dan program, evaluasi dan pelaporan dalam melayani
            kepala dinas dalam urusan kedinasan;
          </li>
          <li>
            Menyelenggarakan pengawasan dibidang administrasi umum, keuangan,
            kepegawaian, dan program, evaluasi dan pelaporan dalam melayani
            kepala dinas dalam urusan kedinasan;
          </li>
          <li>melaksanakan tugas lainnya sesuai dengan bidang tugasnya.</li>
          <li>Pelaporan.</li>
        </ul>
        <p>
          Sekretariat dipimpin oleh seorang Sekretaris yang berada di bawah dan
          bertanggung jawab kepada Kepala Dinas.
        </p>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default sekretariat;
