import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import MainModal from "@/components/modal/MainModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = (props: any) => {
  const [OpenModalFPIP, setOpenModalFPIP] = React.useState<boolean>(false);
  const [OpenModalFPKIP, setOpenModalFPKIP] = React.useState<boolean>(false);

  return (
    <PageLayouts title="Informasi Permohonan">
      <MainModal
        isOpen={OpenModalFPIP}
        onClose={(data) => setOpenModalFPIP(data)}
        header={
          <h2 className="text-start indent-0 capitalize w-full text-2xl font-bold">
            alur Permohonan Informasi Publik
          </h2>
        }
      >
        <Image
          alt="Gambar Alur FPIP"
          src={"/assets/images/alur-permohonan.jpg"}
          width={1000}
          height={1000}
          className="w-full object-cover rounded-xl"
        />
      </MainModal>
      <MainModal
        isOpen={OpenModalFPKIP}
        onClose={(data) => setOpenModalFPKIP(data)}
        header={
          <h2 className="text-start w-full indent-0 text-2xl font-bold capitalize">
            alur permohonan keberatan informasi publik
          </h2>
        }
      >
        <Image
          alt="Gambar Alur FPIP"
          src={"/assets/images/alur-keberatan.jpg"}
          width={1000}
          height={1000}
          className="w-full object-cover rounded-xl"
        />
      </MainModal>
      <ContainerLayout background header={<h2>Informasi Permohonan</h2>}>
        <table className="table-fixed w-full border-collapse border-2 border-blue-400">
          <thead>
            <tr>
              <th className="border w-[75%] text-center border-blue-400">
                Informasi
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
                  Alur Pendaftaran Formulir Permohonan Informasi Publik
                </p>
              </td>
              <td className="grid grid-cols-2 text-sm py-2">
                <div className="flex justify-center">
                  <button
                    onClick={() => setOpenModalFPIP(!OpenModalFPIP)}
                    className="bg-blue-500 hover:bg-blue-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                  >
                    unduh
                  </button>
                </div>
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
                  Alur Pendaftaran Formulir Permohonan Keberatan Informasi
                  Publik
                </p>
              </td>
              <td className="grid grid-cols-2 text-sm py-2">
                <div className="flex justify-center">
                  <button
                    onClick={() => setOpenModalFPKIP(!OpenModalFPKIP)}
                    className="bg-blue-500 hover:bg-blue-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                  >
                    unduh
                  </button>
                </div>
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
                  Formulir Permohonan Informasi Publik
                </p>
              </td>
              <td className="grid grid-cols-2 text-sm py-2">
                <div className="flex justify-center">
                  <Link
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                    href={
                      "https://drive.google.com/file/d/1d8lWJR7NK33iQhVck6ouNiAwyuM3uyKp/view"
                    }
                  >
                    unduh
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Link
                    className="bg-green-500 hover:bg-green-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                    href={"/informasi-publik/permohonan/unggah/pip"}
                  >
                    unggah
                  </Link>
                </div>
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
                  Formulir Permohonan Keberatan Informasi Publik
                </p>
              </td>
              <td className="grid grid-cols-2 text-sm py-2">
                <div className="flex justify-center">
                  <Link
                    target="_blank"
                    className="bg-blue-500 hover:bg-blue-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                    href={
                      "https://drive.google.com/file/d/1vdfahhPIFBBY2us-4fymx9o5qc0Pc1hU/view"
                    }
                  >
                    unduh
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Link
                    className="bg-green-500 hover:bg-green-700 transition-colors text-white px-3 rounded-md uppercase font-bold"
                    href={"/informasi-publik/permohonan/unggah/pkip"}
                  >
                    unggah
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default Index;
