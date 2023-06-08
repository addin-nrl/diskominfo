import MainCard from "@/components/cards/MainCard";
import VideoCard from "@/components/cards/VideoCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const youtubeData = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=Gx7weHIeHCY",
    image: "https://img.youtube.com/vi/Gx7weHIeHCY/sddefault.jpg",
    date: "12 Januari 2023, 10.10",
    title: "Pilkada Kota Serang 2018 - Stop Golput",
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=6we4iXtNuiY",
    image: "https://img.youtube.com/vi/6we4iXtNuiY/sddefault.jpg",
    date: "20 Oktober 2023, 18.07",
    title: "Meadley Greeting Lebaran Diskominfo Kota Serang",
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=3HTGUunXCyc",
    image: "https://img.youtube.com/vi/3HTGUunXCyc/sddefault.jpg",
    date: "17 Februari 2023, 12.45",
    title: "Greeting Lebaran 2018 - Walikota Serang",
  },
  {
    id: 4,
    link: "https://www.youtube.com/watch?v=KpLdiyVD_U4",
    image: "https://img.youtube.com/vi/KpLdiyVD_U4/sddefault.jpg",
    date: "21 September 2023, 18.59",
    title: "Greeting Lebaran 2018 - Wakil Walikota Serang",
  },
  {
    id: 5,
    link: "https://www.youtube.com/watch?v=QwP76quae98",
    image: "https://img.youtube.com/vi/QwP76quae98/sddefault.jpg",
    date: "09 November 2023, 12.31",
    title: "Rabeg Online",
  },
];
const index = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>galeri video</h2>
            <h2>DINAS KOMUNIKASI DAN INFORMATIKA KOTA SERANG</h2>
          </>
        }
        className="grid indent-0 grid-cols-3 gap-5 items-start"
      >
        {youtubeData.map(({ id, title, image, link }, index) => (
          <MainCard
            id={index.toString()}
            image={image}
            title={title}
            author="Super Admin"
            date="12 Januari 2023, 10.10"
            key={index}
            isGallery
            links={link}
          />
        ))}
      </ContainerLayout>
    </PageLayouts>
  );
};

export default index;
