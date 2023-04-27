import Image from "next/image";
import React from "react";
import To from "../micros/To";

interface BerandaBeritaCardProps {
  image: string;
  title: string;
  url: string;
}

const BerandaBeritaCard = (props: BerandaBeritaCardProps) => {
  const { url, image, title } = props;
  return (
    <div className="text-center w-[300px]">
      <Image
        src={image}
        alt={title}
        height={240}
        width={240}
        className="object-cover rounded-lg w-full aspect-square bg-black/40"
      />
      <h1 className="text-lg font-bold text-black">{title}</h1>
      <To href={`${url ? url : ""}`}>Lihat Selengkapnya</To>
    </div>
  );
};

export default BerandaBeritaCard;
