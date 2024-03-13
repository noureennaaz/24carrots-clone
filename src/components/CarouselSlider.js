import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
export default function CarouselSlider({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const venues=[
    {
      index:1,
      title:"The Richland",
      theme:"ORANGE",
      image:"https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg"
    },
    {
      index:2,
      title:"Oak Creek Golf Club",
      theme:"IRVINE",
      image:"https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg"
    },
    {
      index:3,
      title:"Rancho Las Lomas",
      theme:"SILVERADO",
      image:"https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg"
    },
    {
      index:4,
      title:"Franciscan Garden",
      theme:"SAN JUAN CAPISTRANO",
      image:"https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png"
    },
    {
      index:5,
      title:"The Colony House",
      theme:"ANAHEIM",
      image:"https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg"
    },
    {
      index:6,
      title:"Ole Hanson Beach Club",
      theme:"SAN CLEMENTE",
      image:"https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-3.jpg"
    },
    {
      index:7,
      title:"AV Irvine",
      theme:"IRVINE",
      image:"https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN.jpg"
    }
  ]
  const [curr, setCurr] = useState(0);
  const [rangeval, setRangeval] = useState(1)
  const seek = (i =0 ) => setCurr(i);
  

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(seek, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative ">
      <div
        className="flex lg:min-w-[300vw] min-w-[3300px] max-w-fit overflow-x-scroll transition-transform ease-out duration-500  gap-5 lg:h-[530px]"
        style={{ transform: `translateX(-${curr*100}px)` }}
      >
      <div className="lg:px-12"></div>
        {venues.map((venue) => (
         <div className=" lg:w-[500px] w-[80vw] aspect-square lg:h-[500px] group transition-all relative">
            <img src={venue.image} alt="" className="aspect-square absolute top-0 lg:rounded-none rounded-3xl object-cover lg:w-[500px]  brightness-50 lg:brightness-100"/>
            <div className="aspect-square duration-300 rounded-3xl lg:rounded-none object-cover lg:w-[500px] max-sm:min-w-[80vw] relative lg:hidden transition ease-in-out lg:group-hover:block  lg:bg-[#aa5d14c7]">
            <div className="h-fit w-[200px] mx-auto top-1/2 relative -translate-y-9">
              <button className="group border py-2 px-4 rounded-[50px] text-white lg:block hidden">
                EXPLORE VENUES  <FaArrowRightLong className="inline pb-1  group-hover:translate-x-2 transition-all ease-in-out scale-125" />
              </button>
            </div>
            <div className="absolute bottom-0 p-7  text-white">
              <div className="font-[cormorant-garamond-light] text-3xl ">{venue.title}</div>
              <div className="h-[1px] lg:w-72 bg-white lg:my-3 w-40 "></div>
              <div >{venue.theme}</div>
            </div>
          </div>
         </div>
        ))}
      </div>

      <div className="relative right-0 left-0 p-7 cursor-pointer">
        <div className="flex items-center justify-center gap-2">
        <input type="range" min="0" max="28" value={rangeval}  class="slider" onChange={(event) =>{ setRangeval(event.target.value); seek(event.target.value)}}/>
          {/* {venues.map((venue) => (
            <div onClick={()=>seek(venue.index)}
              className={`
              transition-all w-[30px] h-[2px] my-3 rounded-lg
              ${curr === venue.index ? "bg-[#C15627]" : "bg-[#1A4122]"}
            `}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

