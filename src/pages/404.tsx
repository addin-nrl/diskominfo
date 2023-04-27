import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NotFound = (props: any) => {
  const router = useRouter();
  const [countdown, setCountdown] = useState<Number>(5);
  const [path, setPath] = useState<string>("");
  const [warning, setWarning] = useState<boolean>(false);

  useEffect(() => {
    setPath(router.asPath);
    const interval = setInterval(() => {
      if (countdown === 1) {
        return router.back();
      }
      setWarning((_) => !_);
      setCountdown((prev: any) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [router, countdown]);

  return (
    <div className="w-screen h-screen bg-white flex items-center gap-10 justify-center flex-col">
      <h1 className="text-4xl font-sans font-semibold text-blue-500 px-5">
        Eh ehh...
      </h1>
      <Image
        src={"/assets/images/not-found.svg"}
        alt="Not Found"
        height={400}
        width={400}
      />
      <div className="text-base text-center font-light px-5">
        <p>
          Waduh waduh, Sepertinya halaman
          <span className="bg-red-500 text-white px-3 py-1 rounded-lg font-semibold mx-1">
            {path}
          </span>
          yang kamu tuju <b>gaada</b> deh, mohon maaf yaa.
        </p>
        <p>
          <b
            className={`${
              warning ? "text-red-600" : "text-black"
            } transition-all duration-500`}
          >
            {countdown.toString()} detik lagi
          </b>{" "}
          kamu akan diarahkan ke halaman sebelumnya, atau kamu juga bisa pergi
          ke{" "}
          <Link
            className="bg-blue-500 px-3 py-1 rounded-lg text-white hover:bg-blue-400 hover:shadow-lg transition-all"
            href={"/"}
          >
            Beranda
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
