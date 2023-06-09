import BerandaBeritaCard from "@/components/cards/BerandaBeritaCard";
import PageLayouts from "@/components/layouts/PageLayouts";
import Section from "@/components/layouts/Section";
import ButtonGroup from "@/components/micros/ButtonGroup";
import To from "@/components/micros/To";
import MainModal from "@/components/modal/MainModal";
import { aplikasiCarousel, responsive } from "@/interfaces/indexInteface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import smartcity from "../../public/assets/images/smartcity.png";

const instagramData = [
  {
    id: 1,
    image:
      "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/349497162_249806547654068_2592153820142184763_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NVOMEyiSZQcAX-zzbf1&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AfB3ehs8GE-qxKSvhdtIXAPuZOhtG-1qk_zzhcslJMhiUw&oe=64883459&_nc_sid=39c49a",
    link: "https://www.instagram.com/p/Cs1F1QnLHui/",
  },
  {
    id: 2,
    image:
      "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/348686271_269434868778750_1479292199897278495_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=zbKyllppb2gAX8lkMu_&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AfCFIJCbDh3gDvPudFgwuqnIpNpOGkDRp7yxPZ3jMGagHA&oe=64874E42&_nc_sid=39c49a",
    link: "https://www.instagram.com/p/Css_sn2Lcpv/",
  },
  {
    id: 3,
    image:
      "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/347517178_1336309853624097_4322644287288577541_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=VKBeL44TUroAX_ECdAp&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AfBQPOPKbqwUe2onFY2fmWiyxV5joLe8QB7f91Fr0wJFrA&oe=6488363D&_nc_sid=39c49a",
    link: "https://www.instagram.com/p/CsVGdu_LTSV/",
  },
  {
    id: 4,
    image:
      "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/333324759_220834610435637_5437112448447501339_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=axwPCwBPLxAAX9bDoJ2&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AfDUBNah3Shd1hx1oMIVD8xNKgWdd1MtLYK1_I0djHHpzQ&oe=6487BD57&_nc_sid=39c49a",
    link: "https://www.instagram.com/p/CpnQ0O4ysId/",
  },
  {
    id: 5,
    image:
      "https://instagram.fjog3-1.fna.fbcdn.net/v/t51.2885-15/351443499_272106955352729_9133517679153030155_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fjog3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=M0jmY-tPNIAAX_cNYkw&edm=AGenrX8BAAAA&ccb=7-5&oh=00_AfCuL17Q_uM45eV7xFgzT1IzaPiBmCQpVdWAcYLrJYYedA&oe=6487EA2C&_nc_sid=39c49a",
    link: "https://www.instagram.com/p/CtL85rISswi/",
  },
];

const youtubeData = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=Gx7weHIeHCY",
    image: "https://img.youtube.com/vi/Gx7weHIeHCY/sddefault.jpg",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=6we4iXtNuiY",
    image: "https://img.youtube.com/vi/6we4iXtNuiY/sddefault.jpg",
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=3HTGUunXCyc",
    image: "https://img.youtube.com/vi/3HTGUunXCyc/sddefault.jpg",
  },
  {
    id: 4,
    link: "https://www.youtube.com/watch?v=KpLdiyVD_U4",
    image: "https://img.youtube.com/vi/KpLdiyVD_U4/sddefault.jpg",
  },
  {
    id: 5,
    link: "https://www.youtube.com/watch?v=QwP76quae98",
    image: "https://img.youtube.com/vi/QwP76quae98/sddefault.jpg",
  },
];
export default function Home() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <PageLayouts>
      <MainModal
        useTimeout
        timeout={5}
        isOpen={isOpen}
        onClose={(value) => setIsOpen(value)}
      >
        <Image
          src={smartcity}
          alt="smart-city-modal-image"
          className="w-full object-cover rounded-xl"
        />
      </MainModal>
      <div className="mx-4 space-y-10">
        <Section
          subHeader="Salam hangat dari Kadis Serang"
          header="Sambutan Kadis"
        >
          <div className="my-5 flex gap-6 md:flex-row flex-col">
            <Image
              src={"/assets/images/pak-kadis.png"}
              alt="Foto Kadis"
              width={400}
              height={400}
              className="h-full rounded-lg bg-[#1467A2] float-left"
            />
            <div className="flex gap-4 flex-col indent-0">
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
                Instagram:{" "}
                <Link
                  className="hover:text-blue-400 transition-colors hover:underline"
                  href="https://www.instagram.com/diskominfokotaserang/"
                  target="_blank"
                >
                  @diskominfokotaserang
                </Link>
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
              {instagramData.map(({ id, image, link }, index) => {
                return (
                  <div key={index} className="p-5">
                    <Link
                      href={link}
                      target="_blank"
                      className="flex gap-5 bg-black/40 rounded-xl"
                    >
                      <Image
                        src={image}
                        alt={`Gambar ${index}`}
                        height={400}
                        width={400}
                        className="bg-black/40 rounded-lg grow w-full object-cover"
                      />
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>

          <div className="mt-5 relative">
            <div className="flex justify-between items-center">
              <h2 className="md:text-xl text-base font-light">
                YouTube:
                <Link
                  className="hover:text-blue-400 transition-colors hover:underline"
                  href="https://www.youtube.com/@diskominfokotaserang24/videos"
                  target="_blank"
                >
                  Diskominfo kota Serang
                </Link>
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
              {youtubeData.map(({ id, image, link }, index) => {
                return (
                  <div key={index} className="p-5">
                    <Link
                      href={link}
                      target="_blank"
                      className="flex gap-5 bg-black/40 rounded-xl"
                    >
                      <Image
                        src={image}
                        alt={`Gambar ${index}`}
                        height={250}
                        width={400}
                        className="bg-black/40 rounded-lg grow h-full object-cover"
                      />
                    </Link>
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
