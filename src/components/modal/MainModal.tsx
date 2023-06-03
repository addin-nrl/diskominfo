import React from "react";

interface MainModalProps {
  isOpen: boolean;
  onClose: (value: any) => void;
  children?: React.ReactNode;
  className?: string;
  useTimeout?: boolean;
  timeout?: number;
  header?: React.ReactNode;
}

const MainModal = (props: MainModalProps) => {
  const { isOpen, onClose, header, children, className, timeout, useTimeout } =
      props,
    [countdown, setCountdown] = React.useState<number | undefined>(timeout),
    [warning, setWarning] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isOpen && useTimeout) {
      const interval = setInterval(() => {
        if (countdown === 1) {
          return onClose(false);
        }
        setWarning((_) => !_);
        setCountdown((prev: any) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOpen, countdown, onClose, useTimeout]);

  return (
    <div
      className={`${
        isOpen ? "opacity-100 z-[1000]" : "opacity-0 h-0 -z-[1000]"
      } duration-700 fixed top-0 left-0 bg-black/50  transition-opacity overflow-hidden h-screen w-screen`}
    >
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 lg:w-[950px] w-[93%] max-h-[95vh] overflow-y-auto -translate-y-1/2 bg-white shadow-xl rounded-xl p-6 pt-5 space-y-3">
        <div className="sticky top-0 flex justify-end gap-5">
          <div
            className={`${warning ? "bg-red-400" : "bg-red-500"} ${
              useTimeout ? "block" : "hidden"
            } indent-0 px-4 text-white flex justify-center items-center w-fit transition-colors duration-500 rounded-lg`}
          >
            <p>Kampanye ini akan berakhir dalam {countdown} detik</p>
          </div>
          {header}
          <button
            className="bg-red-500 text-white rounded-lg aspect-square h-10 flex justify-center items-center active:scale-95 hover:scale-110 hover:bg-red-600 transition-all duration-300 group/exit"
            onClick={() => onClose(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 aspect-square group-hover/exit:rotate-180 transition-all duration-500"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className={`${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default MainModal;
