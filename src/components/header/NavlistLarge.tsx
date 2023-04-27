import React from "react";
import Dropdown from "../micros/Dropdown";
import Link from "next/link";
import navHeader from "@/styles/NavHeader.module.css";

const NavlistLarge = (props: any) => {
  return (
    <ul className="md:flex hidden justify-center">
      <li>
        <Link className={navHeader.navList} href={"/"}>
          Beranda
        </Link>
      </li>
      <li>
        <div className={`${navHeader.navList} relative group/profil`}>
          <p className="inline-flex">Profil</p>
          <Dropdown
            className="group-hover/profil:block top-full left-1/2 -translate-x-1/2"
            arrowClass="bottom-full left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px]"
          >
            <ul>
              <Link
                href={"/profil/visi-misi"}
                className={navHeader.dropdownList}
              >
                Visi dan Misi
              </Link>
              <li className={`${navHeader.dropdownList} relative group/tugas`}>
                <p>Tugas dan Fungsi</p>
                <Dropdown
                  className="group-hover/tugas:block left-full z-[100] -top-4"
                  arrowClass="right-full top-5 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px]"
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
                      Bidang Layanan Diseminasi Informasi dan Komunikasi Publik
                    </Link>
                    <Link
                      href={"/profil/tugas-fungsi/sdep"}
                      className={navHeader.dropdownList}
                    >
                      Bidang Statistik, Dokumentasi dan Evaluasi Pemerintahan
                    </Link>
                    <Link
                      href={"/profil/tugas-fungsi/egov"}
                      className={navHeader.dropdownList}
                    >
                      Bidang Layanan E-Goverment
                    </Link>
                  </ul>
                </Dropdown>
              </li>
              <Link href={"/profil/sejarah"} className={navHeader.dropdownList}>
                Sejarah Dinas
              </Link>
              <Link
                href={"/profil/struktur"}
                className={navHeader.dropdownList}
              >
                Struktur Organisasi
              </Link>
              <Link
                href={"/profil/landasan-hukum"}
                className={navHeader.dropdownList}
              >
                Landasan Hukum
              </Link>
              <Link href={"/profil/pegawai"} className={navHeader.dropdownList}>
                Profil Pegawai
              </Link>
              <Link
                href={"/profil/layanan-egov"}
                className={navHeader.dropdownList}
              >
                Bidang layanan E-Goverment
              </Link>
            </ul>
          </Dropdown>
        </div>
      </li>
      <li>
        <div className={`${navHeader.navList} relative group/profil`}>
          <p>Berita Diskominfo</p>
          <Dropdown
            className="group-hover/profil:block top-full left-1/2 -translate-x-1/2"
            arrowClass="bottom-full left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px]"
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
          </Dropdown>
        </div>
      </li>
      <li>
        <div className={`${navHeader.navList} relative group/profil`}>
          <p>Informasi Publik</p>
          <Dropdown
            className="group-hover/profil:block top-full left-1/2 -translate-x-1/2"
            arrowClass="bottom-full left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px]"
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
          </Dropdown>
        </div>
      </li>
      <li>
        <div className={`${navHeader.navList} relative group/profil`}>
          <p>Galeri</p>
          <Dropdown
            className="group-hover/profil:block top-full left-1/2 -translate-x-1/2"
            arrowClass="bottom-full left-1/2 -translate-x-1/2 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px]"
          >
            <ul>
              <Link className={navHeader.dropdownList} href={"/galeri/foto"}>
                Galeri Foto
              </Link>
              <Link className={navHeader.dropdownList} href={"/galeri/video"}>
                Galeri Video
              </Link>
            </ul>
          </Dropdown>
        </div>
      </li>
    </ul>
  );
};

export default NavlistLarge;
