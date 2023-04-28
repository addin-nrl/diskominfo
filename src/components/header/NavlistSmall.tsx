import Link from "next/link";
import React, { useEffect } from "react";
import navHeader from "@/styles/NavHeader.module.css";

interface NavlistSmallProps {
  navState: boolean;
  setNavState: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavlistSmall = ({ navState, setNavState }: NavlistSmallProps) => {
  const [activeNav, setActiveNav] = React.useState<string>("");

  useEffect(() => {
    if (navState) {
      setActiveNav("");
    }
  }, [navState]);

  return (
    <div
      className={`${navState ? "block" : "hidden"} w-full opacity-100 grow h-fit bottom-1 bg-transparent absolute z-50 transition-all`}
    >
      <div
        className={`transition-none  absolute w-full bg-[#1467A2] pb-3`}
      >
        <ul
          className={`rounded-tl-lg rounded-bl-lg rounded-br-lg md:hidden p-1 justify-center flex flex-col mx-2 bg-white text-black`}
        >
          <li>
            <Link href={"/"} className={navHeader.navList}>
              Beranda
            </Link>
          </li>
          <li onClick={(_) => setActiveNav("profil")}>
            <div className={`${navHeader.navList}`}>
              <p>Profil</p>
              <div
                className={`${
                  activeNav.includes("profil") ? "inline-block" : "hidden"
                }`}
              >
                <ul>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/profil/visi-misi"}
                  >
                    Visi dan Misi
                  </Link>
                  <li
                    onClick={(_) => {
                      _.stopPropagation();
                      setActiveNav("profil/tugas dan fungsi");
                    }}
                    className={navHeader.dropdownList}
                  >
                    <p>Tugas dan Fungsi</p>
                    <div
                      className={`${
                        activeNav.includes("tugas dan fungsi")
                          ? "inline-block"
                          : "hidden"
                      }`}
                    >
                      <ul>
                        <Link
                          href={"/profil/tugas-fungsi/diskominfo"}
                          className={navHeader.dropdownList}
                        >
                          Diskominfo Kota Serang
                        </Link>
                        <Link
                          href={"/profil/tugas-fungsi/sekretariat"}
                          className={navHeader.dropdownList}
                        >
                          Sekretariat
                        </Link>
                        <Link
                          href={"/profil/tugas-fungsi/sub-bagian-umkep"}
                          className={navHeader.dropdownList}
                        >
                          Sub Bagian Umum dan Kepegawaian
                        </Link>
                        <Link
                          href={"/profil/tugas-fungsi/komunikasi-informatika"}
                          className={navHeader.dropdownList}
                        >
                          Bidang Komunikasi dan Informatika
                        </Link>
                        <Link
                          href={"/profil/tugas-fungsi/ldikp"}
                          className={navHeader.dropdownList}
                        >
                          Bidang Layanan Diseminasi Informasi dan Komunikasi
                          Publik
                        </Link>
                        <Link
                          href={"/profil/tugas-fungsi/sdep"}
                          className={navHeader.dropdownList}
                        >
                          Bidang Statistik, Dokumentasi dan Evaluasi
                          Pemerintahan
                        </Link>
                        <Link
                          href={"/profil/tugas-fungsi/egov"}
                          className={navHeader.dropdownList}
                        >
                          Bidang Layanan E-Goverment
                        </Link>
                      </ul>
                    </div>
                  </li>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/profil/sejarah"}
                  >
                    Sejarah Dinas
                  </Link>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/profil/struktur"}
                  >
                    Struktur Organisasi
                  </Link>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/profil/landasan-hukum"}
                  >
                    Landasan Hukum
                  </Link>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/profil/pegawai"}
                  >
                    Profil Pegawai
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li onClick={() => setActiveNav("berita")}>
            <div className={`${navHeader.navList}`}>
              <p>Berita Diskominfo</p>
              <div
                className={`${
                  activeNav.includes("berita") ? "inline-block" : "hidden"
                }`}
              >
                <ul>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/berita/setiap-saat"}
                  >
                    Berita Setiap Saat
                  </Link>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/berita/serta-merta"}
                  >
                    Berita Serta Merta
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li onClick={() => setActiveNav("informasi publik")}>
            <div className={`${navHeader.navList}`}>
              <p>Informasi Publik</p>
              <div
                className={`${
                  activeNav.includes("informasi publik")
                    ? "inline-block"
                    : "hidden"
                }`}
              >
                <ul>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/informasi-publik/permohonan"}
                  >
                    Permohonan Informasi
                  </Link>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/informasi-publik/rekapitulasi"}
                  >
                    Rekapitulasi Permohonan
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li onClick={() => setActiveNav("galeri")}>
            <div className={`${navHeader.navList}`}>
              <p>Galeri</p>
              <div
                className={`${
                  activeNav.includes("galeri") ? "inline-block" : "hidden"
                }`}
              >
                <ul>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/galeri/foto"}
                  >
                    Galeri Foto
                  </Link>
                  <Link
                    className={navHeader.dropdownList}
                    href={"/galeri/video"}
                  >
                    Galeri Video
                  </Link>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavlistSmall;
