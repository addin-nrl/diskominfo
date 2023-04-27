import { PegawaiInterface } from "@/interfaces/pegawaiInterface";
import Image from "next/image";

const PegawaiCard = (props: PegawaiInterface) => {
  const { nama, jabatan, gambar, nomorDinas } = props;
  return (
    <div className="col-span-1 p-5 backdrop-blur-lg rounded-3xl bg-black/5">
      <Image src={gambar} alt={`gambar-${jabatan}`} width={500} height={300} className="w-full h-[300px] bg-blue-400/50 object-cover rounded-xl" />
      <div className="text-center my-5">
        <h3 className="font-bold text-2xl font-serif mb-5">{jabatan}</h3>
        <p className="font-sans">{nama}</p>
        <p className="font-serif">{nomorDinas}</p>
      </div>
    </div>
  );
};

export default PegawaiCard;
