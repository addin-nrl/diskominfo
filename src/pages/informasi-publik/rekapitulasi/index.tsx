import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import Link from "next/link";
import React from "react";

const index = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout background header={<h2>Informasi Rekapitulasi</h2>}>
        <table className="table-fixed w-full border-collapse border-2 border-blue-400">
          <thead>
            <tr>
              <th className="border w-[75%] text-center border-blue-400">
                Informasi
              </th>
              <th className="border w-[25%] text-center border-blue-400">
                Tahun
              </th>
              <th className="border w-[25%] text-center border-blue-400">
                File
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="p-4">
              <td className="border-r border-blue-400 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 aspect-square inline-block mr-3 text-orange-500"
                >
                  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                </svg>
                <p className="w-fit inline-block">
                  Dokumen Pelaksanaan Anggaran
                </p>
              </td>
              <td className="text-center border-r border-blue-400"></td>
              <td className="flex justify-center text-sm py-2">
                <Link
                  className="bg-blue-500 hover:bg-blue-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                  href={"/"}
                >
                  unduh
                </Link>
              </td>
            </tr>
            <tr className="p-4">
              <td className="border-r border-blue-400 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 aspect-square inline-block mr-3 text-orange-500"
                >
                  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                </svg>
                <p className="w-fit inline-block">
                  Rekapitulasi Permohonan Informasi Publik
                </p>
              </td>
              <td className="text-center border-r border-blue-400"></td>
              <td className="flex justify-center text-sm py-2">
                <Link
                  className="bg-blue-500 hover:bg-blue-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                  href={"/"}
                >
                  unduh
                </Link>
              </td>
            </tr>
            <tr className="p-4">
              <td className="border-r border-blue-400 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 aspect-square inline-block mr-3 text-orange-500"
                >
                  <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                </svg>
                <p className="w-fit inline-block">
                  Rekapitulasi Permohonan Informasi Publik
                </p>
              </td>
              <td className="text-center border-r border-blue-400"></td>
              <td className="flex justify-center text-sm py-2">
                <Link
                  className="bg-blue-500 hover:bg-blue-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                  href={"/"}
                >
                  unduh
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
