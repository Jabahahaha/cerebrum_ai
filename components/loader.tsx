import Image from "next/image"

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center bg-[#464646]">
      <div className="w-10 h-10 relative">
        <Image
          alt="Logo"
          src="/logo211.png"
          fill
        />
      </div>
      <p className="text-sm text-white">
        Cerebrum генерирует ответ...
      </p>
    </div>
  );
};
