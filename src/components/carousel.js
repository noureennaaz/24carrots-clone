import { useState, useEffect } from "react";

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}) {
  const [curr, setCurr] = useState(0);

  const seek = (i) =>
    setCurr(i);
  

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(seek, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative rounded-tl-[200px] lg:rounded-tl-[300px] lg:m-0 ml-6 mt-6">
      <div
        className="flex transition-transform ease-out duration-500 h-[400px] lg:h-[530px]"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img) => (
          <img src={img} alt="" className="aspect-video object-cover w-full"/>
        ))}
      </div>

      <div className="relative right-0 left-0 p-7 cursor-pointer">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div onClick={()=>seek(i)}
              className={`
              transition-all w-[30px] h-[2px] my-3 rounded-lg
              ${curr === i ? "bg-[#C15627]" : "bg-[#1A4122]"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}