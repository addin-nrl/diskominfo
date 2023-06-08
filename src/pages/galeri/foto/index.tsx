import MainCard from "@/components/cards/MainCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import PageLayouts from "@/components/layouts/PageLayouts";
import React from "react";

const instagramData = [
  {
    id: 1,
    image: "https://www.instagram.com/p/Cs1F1QnLHui/media/?size=l",
    link: "https://www.instagram.com/p/Cs1F1QnLHui/",
    date: "12 Januari 2023, 10.10",
  },
  {
    id: 2,
    image: "https://www.instagram.com/p/Css_sn2Lcpv/media/?size=l",
    link: "https://www.instagram.com/p/Css_sn2Lcpv/",
    date: "20 Oktober 2023, 18.07",
  },
  {
    id: 3,
    image: "https://www.instagram.com/p/CsVGdu_LTSV/media/?size=l",
    link: "https://www.instagram.com/p/CsVGdu_LTSV/",
    date: "17 Februari 2023, 12.45",
  },
  {
    id: 4,
    image: "https://www.instagram.com/p/CpnQ0O4ysId/media/?size=l",
    link: "https://www.instagram.com/p/CpnQ0O4ysId/",
    date: "21 September 2023, 18.59",
  },
  {
    id: 5,
    image: "https://www.instagram.com/p/CtL85rISswi/media/?size=l",
    link: "https://www.instagram.com/p/CtL85rISswi/",
    date: "09 November 2023, 12.31",
  },
];

const index = (props: any) => {
  return (
    <PageLayouts>
      <ContainerLayout
        header={
          <>
            <h2>galeri foto</h2>
            <h2>DINAS KOMUNIKASI DAN INFORMATIKA KOTA SERANG</h2>
          </>
        }
        className="grid indent-0 grid-cols-3 gap-5 items-start"
      >
        {instagramData.map(({ date, id, image, link }, index) => (
          <MainCard
            id={index.toString()}
            image={image}
            title={""}
            author="Super Admin"
            date={date}
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
