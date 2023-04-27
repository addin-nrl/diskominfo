import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavlistLarge from "./NavlistLarge";
import NavlistSmall from "./NavlistSmall";
import navbarBg from "../../../public/assets/images/navbar.png";

const NavHeader = (props: any) => {
  const [isActiveNav, setActiveNav] = React.useState<boolean>(false);

  return (
    <div
      className={` sticky
      } shadow-lg md:-top-[6.5rem] -top-[6rem] object-cover object-top md:py-5 py-3 z-[40] space-y-3`}
      style={{
        backgroundImage: `url(${navbarBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex pl-10 gap-5 max-w-max justify-end items-center bg-white">
        <Image
          src={"/assets/images/logo-serang.png"}
          alt="Logo Kota Serang"
          width={60}
          height={60}
        />
        <Image
          src={"/assets/images/diskominfo-serang.png"}
          alt="Logo Kota Serang"
          width={130}
          height={130}
        />
        <div className="w-0 h-0 border-t-[40px] border-t-transparent border-b-[40px] border-b-transparent border-r-[30px] border-[#1467A2]" />
      </div>
      <NavlistLarge />
      <div className="justify-center flex flex-wrap gap-2 align-middle items-center">
        <div className="flex gap-2 mx-2 w-full justify-center">
          <form className="w-full shrink md:w-[300px] md:mx-auto relative flex justify-center">
            <input
              placeholder="Cari sesuatu"
              id=""
              className="md:focus:w-full w-full duration-300 md:w-[115px] h-11 px-3 focus:pr-8 rounded-lg peer/search focus:shadow-lg text-base font-light outline-none transition-all"
              type="text"
            />
            <button className="absolute right-1 h-[80%] md:p-0 px-2 aspect-square top-1/2 -translate-y-1/2 rounded-md shadow-lg bg-[#1467A2] text-white flex justify-center items-center transition-all duration-150 opacity-100 md:peer-focus/search:opacity-100 md:peer-focus/search:delay-150 md:opacity-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 aspect-square"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <p className="mx-2 font-normal md:hidden block text-base">Cari</p>
            </button>
          </form>
          <div
            onClick={() => setActiveNav((prev: boolean) => !prev)}
            className={`${
              isActiveNav
                ? "top-3 rounded-tl-lg rounded-tr-lg"
                : "top-0 rounded-lg"
            } bg-white text-blue-500 relative z-10 transition-all duration-300 md:hidden h-11 shrink aspect-square flex justify-center items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
        <NavlistSmall navState={isActiveNav} />
      </div>
    </div>
  );
};

export default NavHeader;
