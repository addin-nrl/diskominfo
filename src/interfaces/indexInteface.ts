export interface Carousel {
  link: string;
  image: string;
}

export interface AplikasiCarousel extends Carousel {
  title: string;
}

export const aplikasiCarousel: AplikasiCarousel[] = [
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
    image: "/assets/aplikasi/info-sembako.svg",
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

export const responsive = {
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
