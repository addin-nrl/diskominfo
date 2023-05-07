interface CardProps {
  judul: string;
  children: React.ReactNode;
  className?: string;
}
const Berita_MiniCard = (props: CardProps) => {
  const { judul, children, className } = props;
  return (
    <div className="p-5 bg-black/5 mb-5 rounded-xl backdrop-blur-md">
      <div className="bg-gray-300 relative text-blue-500 font-bold text-center w-9/12 mx-auto">
        <h1>{judul}</h1>
        <div className="aspect-square absolute w-0 h-0 border-b-[20px] border-b-transparent border-r-[20px] border-gray-300 top-0 right-full" />
        <div className="aspect-square absolute w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-gray-300 bottom-0 right-full" />
        <div className="aspect-square absolute w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-gray-300 bottom-0 left-full" />
        <div className="aspect-square absolute w-0 h-0 border-b-[20px] border-b-transparent border-l-[20px] border-gray-300 top-0 left-full" />
      </div>
      <div className={`${className} mt-5`}>{children}</div>
    </div>
  );
};

export default Berita_MiniCard;
