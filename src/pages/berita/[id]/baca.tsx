import Berita_MiniCard from "@/components/cards/Berita_MiniCard";
import MainCard from "@/components/cards/MainCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import { berita } from "@/interfaces/beritaInterface";
import { readFile } from "fs/promises";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import React from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.query;
  const beritaType = id?.includes("SS") ? "setiap-saat" : "serta-merta";

  const dataPath = path.join(
    process.cwd(),
    `/src/pages/berita/${beritaType}/data-berita.json`
  );
  const res = await readFile(dataPath, "utf-8");
  const data = JSON.parse(res).filter((_: berita) => _.id === id);

  return {
    props: { berita: data[0], res: JSON.parse(res) },
  };
};

const Baca = (props: any) => {
  const { id, image, title, author, date, data_berita } = props.berita,
    gambar: any = image?.toString();
  return (
    <PageLayouts title={title?.toString()}>
      <ContainerLayout className="!p-0" header={<h2>{title}</h2>}>
        <div className="flex md:flex-row flex-col gap-5 justify-center">
          <div className="space-y-5 shrink">
            <Image
              className="w-full h-[300px] rounded-xl object-cover"
              src={gambar}
              alt={`gambar-${image}`}
              width={300}
              height={400}
            />
            <div className="bg-black/5 space-y-2 box-content rounded-xl px-5 py-3 max-w-prose backdrop-blur-sm">
              {data_berita?.map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className="bg-black/5 indent-0 box-content rounded-xl px-5 py-3 max-w-prose backdrop-blur-sm">
              <p>
                Lihat Juga:
                <Link
                  className="font-bold ml-2 text-blue-400 hover:text-blue-500 transition-colors"
                  href={{
                    pathname: `/berita/${props.res[4].id}/baca`,
                    query: {
                      id: props.res[4].id,
                      image: props.res[4].image,
                      title: props.res[4].title,
                      author: props.res[4].author,
                      date: props.res[4].date,
                    },
                  }}
                >
                  {props.res[4].title}
                </Link>
              </p>
            </div>
            <div className="indent-0">
              <Link
                href={"/berita/setiap-saat"}
                className="bg-blue-500 mx-auto block w-max rounded-lg px-3 py-1 text-white font-semibold"
              >
                Baca berita terkait lainnya
              </Link>
            </div>
          </div>
          <div className="md:w-[300px] w-full indent-0 relative">
            <h4 className="absolute bottom-full right-0 font-bold text-gray-600 text-base mb-1">
              {author} - {date}
            </h4>
            <Berita_MiniCard judul="Kategori">
              <ul className="list-inside list-disc">
                <Link href={"/"}>
                  <li>Berita Layanan Publik</li>
                </Link>
                <Link href={"/"}>
                  <li>Berita Pemerintahan</li>
                </Link>
                <Link href={"/"}>
                  <li>Berita Kota Serang</li>
                </Link>
              </ul>
            </Berita_MiniCard>
            <Berita_MiniCard
              className="grid gap-3 grid-cols-1"
              judul="Berita Terkini"
            >
              {props.res.slice(0, 3).map((item: berita, index: number) => (
                <MainCard
                  links={""}
                  key={index}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  author={item.author}
                  date={item.date}
                />
              ))}
            </Berita_MiniCard>
            <Berita_MiniCard className="flex flex-wrap gap-1" judul="Tags">
              {["kota serang", "informatif", "teknologi", "walikota"].map(
                (item, index) => (
                  <Link
                    className="bg-gray-300 rounded-lg px-3 capitalize"
                    href={"/"}
                    key={index}
                  >
                    {item}
                  </Link>
                )
              )}
            </Berita_MiniCard>
          </div>
        </div>
      </ContainerLayout>
    </PageLayouts>
  );
};

export default Baca;
