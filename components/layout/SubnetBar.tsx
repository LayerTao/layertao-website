import Image from "next/image";

export function SubnetBar() {
  const subnets = [0, 1, 2, 3, 4];

  return (
    <div className="w-full w-max flex flex-col md:flex-row items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-4 px-4 shadow-xl gap-8 md:gap-4">
      {/* 1. Subnet Logos Group */}
      <div className="flex items-center justify-around md:justify-start flex-1 w-full gap-8 ml-2">
        {subnets.map((id) => (
          <div
            key={id}
            className="relative size-7 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <Image
              src={`/subnets/subnet-${id}.svg`}
              alt={`Subnet ${id}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* 2. Vertical Separator (Desktop only) */}
      {/* <div className="hidden md:block w-[1px] h-8 bg-white/10 mx-4" /> */}

      {/* 3. Discover Button/Search Area */}
      {/* <button className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all">
        <div className="relative w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity">
          <Image
            src="/icons/search.svg"
            alt="Search"
            fill
            className="object-contain"
          />
        </div>
        <span className="font-display text-xs tracking-[0.05em] text-white/50 group-hover:text-white/80 transition-colors uppercase">
          Discover Subnets
        </span>
      </button> */}
    </div>
  );
}
