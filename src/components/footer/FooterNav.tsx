import React from "react";
import FooterComponent from "../micros/FooterComponent";

const FooterNav = (props: any) => {
  return (
    <>
      <div className="w-full flex gap-y-14 justify-around flex-col items-center md:flex-row text-xl font-semibold text-blue-600 bg-[#F1F0EC] py-10">
        <FooterComponent imageSrc="/" title="Podcast">
          asdad
        </FooterComponent>
        <FooterComponent className="cursor-pointer" title="Peta">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.079349843116!2d106.17217939999999!3d-6.1200215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f58bf07bf689%3A0x21ef78d036754865!2sDiskominfo%20Kota%20Serang!5e0!3m2!1sid!2sid!4v1682585436419!5m2!1sid!2sid"
            allowFullScreen
            className="rounded-lg border shadow-lg "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </FooterComponent>
        <FooterComponent className="cursor-pointer" title="Pengunjung">
          <div className="rounded-lg flex border h-full shadow-lg text-center text-white bg-blue-600 items-center justify-center gap-5 font-semibold text-2xl">
            <div>
              <p>152</p>
              <h4 className="text-xl font-normal">Hari Ini</h4>
            </div>
            <div>
              <p>3741</p>
              <h4 className="text-xl font-normal">Bulan Ini</h4>
            </div>
          </div>
        </FooterComponent>
      </div>
      <div className="bg-sky-700 text-center py-3 text-white md:text-sm text-xs">
        <p>Copyright © Kota Serang CMS 2023. All rights reserved.</p>
      </div>
    </>
  );
};

export default FooterNav;
