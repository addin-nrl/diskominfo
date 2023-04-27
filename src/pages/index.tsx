import BerandaBeritaCard from "@/components/cards/BerandaBeritaCard";
import PageLayouts from "@/components/layouts/PageLayouts";
import Section from "@/components/layouts/Section";
import ButtonGroup from "@/components/micros/ButtonGroup";
import To from "@/components/micros/To";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AplikasiCarousel } from "../interfaces/indexInteface";

const aplikasiCarousel: AplikasiCarousel[] = [
  {
    title: "Call 112",
    link: "/",
    image: "/assets/aplikasi/call-112.svg",
  }, 
  {
    title: "Gelati",
    link: "/",
    image: "/assets/aplikasi/gelati.svg",
  },
  {
    title: "Info Sembako",
    link: "/",
    image: "/assets/aplikasi/call-112.svg",
  },
  {
    title: "jdih kora serang",
    link: "/",
    image: "/assets/aplikasi/jdih-kota-serang.svg",
  },
  {
    title: "kependudukan",
    link: "/",
    image: "/assets/aplikasi/kependudukan.svg",
  },
  {
    title: "ppid kota serang",
    link: "/",
    image: "/assets/aplikasi/ppid-kota-serang.svg",
  },
  {
    title: "ragem",
    link: "/",
    image: "/assets/aplikasi/ragem.svg",
  },
  {
    title: "sikondang",
    link: "/",
    image: "/assets/aplikasi/sikondang.svg",
  },
];

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <PageLayouts>
      <div className="mx-4 space-y-10">
        <Section
          subHeader="Salam hangat dari Kadis Serang"
          header="Sambutan Kadis"
        >
          <div className="my-5 flex gap-6 md:flex-row flex-col">
            <Image
              src={"/assets/images/kadis.png"}
              alt="Foto Kadis"
              width={400}
              height={400}
              className="h-full rounded-lg float-left"
            />
            <div className="flex gap-4 flex-col">
              <p>Assalamu{"'"}alaikum Wr. Wb.,</p>
              <p>salam sejahtera, salam kebajikan, homsuatiyastu, namebudaye</p>
              <p>
                Puji syukur kita panjatkan kepada Tuhan Yang Maha Esa, yang
                dengan rahmatNya telah mengantarkan kita kepada era disruptif,
                era dimana semakin pesat perkembangan arus informasi dan
                pemanfaatan teknologi.
              </p>
              <p>
                Diskominfo Kota Serang dalam mendukung visi dan misi Kota Serang
                menjadi kota pintar yang berbasis kepada pemanfaatan teknologi
                serta Penguasaan Teknologi Informasi dengan baik dapat membantu
                kita untuk mewujudkan e-goverment dalam rangka terciptanya Good
                Government dan Good Governance yang sudah menjadi tuntutan
                masyarakat dewasa ini. Yang siap menjamin transparansi,
                efisiensi dan efektivitas melalui Teknologi Informasi dan
                Komunikasi (TIK).
              </p>
              <To href="/sambutan">Lihat Selengkapnya</To>
            </div>
          </div>
        </Section>
        <Section
          header="berita terkini"
          subHeader="Jangan Lewatkan Berita Terkini"
        >
          <div className="py-5 flex md:flex-row flex-col gap-14">
            <Image
              src={""}
              alt="Gambar berita"
              height={500}
              width={400}
              className="bg-black/40 rounded-lg grow h-full object-cover"
            />
            <div className="text-center flex gap-5 flex-col justify-between shrink w-full md:w-[68%]">
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold">
                  Seorang anak bernama Rizky diduga gila dan lepas kendali dalam
                  kerumunan warga
                </h2>
                <p className="text-lg font-normal text-black/70 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam asperiores suscipit iure incidunt? Repudiandae enim
                  fugit, ipsum nostrum ea quae blanditiis expedita corporis
                  similique laborum velit, impedit facilis consequuntur
                  voluptatem. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Totam aspernatur reprehenderit pariatur
                  assumenda quasi quo quisquam dolor exercitationem fugit
                  reiciendis, expedita unde dolorem quod? Ea excepturi a atque
                  ad corrupti. <To href="/anjas2">Lihat Selengkapnya</To>
                </p>
              </div>
              <div className="flex justify-between items-center flex-col md:flex-row md:gap-20 md:bg-transparent bg-blue-100 py-6 rounded-xl gap-5">
                {[1, 1, 1].map((item, index) => {
                  return (
                    <BerandaBeritaCard
                      key={index}
                      image="/"
                      title="Walikota Serang menghadri acara buka bersama di Pendopo Bupati Serang"
                      url="ilham"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        <Section
          header="aplikasi diskominfo"
          subHeader="Temukan aplikasi menarik dan berguna dari kami"
        >
          <div className="relative md:pt-8 md:mt-3">
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={1500}
              keyBoardControl={true}
              transitionDuration={300}
              containerClass="carousel-container"
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside={true}
              className=""
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {aplikasiCarousel.map(({ image, link, title }, index) => {
                return (
                  <div key={index}>
                    <Link href={link} draggable={false} className="p-5 block">
                      <div draggable={false} className="flex rounded-xl">
                        <Image
                          src={image}
                          alt={`Gambar ${index}`}
                          height={250}
                          width={400}
                          className="rounded-lg grow h-full object-cover"
                          draggable={false}
                        />
                      </div>
                      <h4 className="text-center text-xl uppercase text-gray-800 font-bold">
                        {title}
                      </h4>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Section>

        <Section header="sosial media" subHeader="kunjungi sosial media kami">
          <div className="mt-5 relative">
            <div className="flex justify-between items-center">
              <h2 className="md:text-xl text-base font-light">
                Instagram: @diskominfokotaserang
              </h2>
            </div>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={1500}
              keyBoardControl={true}
              transitionDuration={300}
              containerClass="carousel-container"
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside={true}
              className=""
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                return (
                  <div key={index} className="p-5">
                    <div className="flex gap-5 bg-black/40 rounded-xl">
                      <Image
                        src="/"
                        alt={`Gambar ${index}`}
                        height={250}
                        width={400}
                        className="bg-black/40 rounded-lg grow h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="mt-5 relative">
            <div className="flex justify-between items-center">
              <h2 className="md:text-xl text-base font-light">
                YouTube: Diskominfo kota Serang
              </h2>
            </div>
            <Carousel
              swipeable={true}
              draggable={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={1500}
              keyBoardControl={true}
              transitionDuration={300}
              containerClass="carousel-container"
              customButtonGroup={<ButtonGroup />}
              renderButtonGroupOutside={true}
              className=""
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
                return (
                  <div key={index} className="p-5">
                    <div className="flex gap-5 bg-black/40 rounded-xl">
                      <Image
                        src="/"
                        alt={`Gambar ${index}`}
                        height={250}
                        width={400}
                        className="bg-black/40 rounded-lg grow h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </Section>
      </div>
    </PageLayouts>
  );
}
