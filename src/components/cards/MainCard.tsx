import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MainCardProps {
  id: string;
  image: string;
  title: string;
  author?: string;
  date?: string;
}

const MainCard = ({ image, title, author, date, id }: MainCardProps) => {
  return (
    <Link
      href={{
        pathname: `${id}/baca`,
        query: {
          id: id,
          image: image,
          title: title,
          author: author,
          date: date,
        },
      }}
      className="bg-white/10 rounded-2xl backdrop-blur-md hover:shadow-xl shadow-md transition-shadow duration-500 p-5 col-span-1"
    >
      <Image
        src={image}
        alt={`gambar-${title}`}
        height={300}
        width={450}
        className="object-cover rounded-lg w-full"
      />
      <div className="text-right mt-3">
        <h2 className="text-2xl text-left font-bold mb-3">{title}</h2>
        <h3 className="text-base font-bold text-blue-500">{author}</h3>
        <h3 className="text-base font-light">{date}</h3>
      </div>
    </Link>
  );
};

export default MainCard;
