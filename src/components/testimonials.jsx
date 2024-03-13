import { useState, useEffect , useRef} from "react";
import { FaArrowRight } from "react-icons/fa";
export default function Testimonials() {
  const [currentTestimonial, setTestimonial] = useState(0);
  const [scrollX, setScrollX] = useState({
    side: ""
  });
  const ref = useRef();
 
  const handleScroll = (data) => {
    setScrollX(prev => ({ ...prev, side: data.side }));
  }
  useEffect(() => {
    if (scrollX.side === "right") {
      ref.current.scrollLeft += 500;
    } else {
      ref.current.scrollLeft -= 200;
    }
  }, [scrollX]);

  const _data = [
    {
      index: 0,
      name: "Robin",
      about: "Executive Assistant, CoreLogic",
      review:
        "The staff was professional, top-notch, professional and hardworking, and just pleasure to work with",
      image:
        "https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg",
    },
    {
      index: 1,
      name: "Jene & John",
      about: "The Colony House",
      review:
        "The food you served was amazing, just loved it! The gusts were too happy",
      image:
        "https://24carrots.com/wp-content/uploads/2023/10/4.1-Kay-McCoy.jpg",
    },
    {
      index: 2,
      name: "Paul & Kelly",
      about: "Franciscan Gardens",
      review:
        "From the planning, exucution to cleanup everything was amazing. We had an amazing experience working with the team",
      image:
        "https://24carrots.com/wp-content/uploads/2023/10/4.3-Desert-Born-Studios.jpg",
    },
    {
      index: 3,
      name: "Kimberly",
      about: "Creston",
      review: "24 Carrots made out extended event a big success",
      image:
        "https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg",
    },
  ];
  return (
    <div className="bg-[#1A4122] text-white w-screen relative min-h-fit h-[200vh]">
      <div className="relative h-[120px]  -top-[55px]  w-full">
        <img
          src="https://24carrots.com/wp-content/themes/24carrots/img/24cemblem.svg"
          className="mx-auto w-[120px] h-[120px]"
        />
      </div>
      <div>
        <img
          className="absolute z-0 contrast-200"
          src="https://24carrots.com/wp-content/themes/24carrots/img/happy_clients_carrot.svg"
        ></img>
        <div>
          <h3 className=" text-center p-10 font-[cormorant-garamond-light] font-extralight lg:text-[70px] text-5xl leading-[1]">
            Our Happy Clients
          </h3>
          <p className="tracking-[.1em] text-center font-light text-[16px] leading-7 mx-auto w-[800px]">
            Our Happy Clients Food may be our love language, but words of
            affirmation always make us ecstatic! Read what our happy clients
            have to say about how we made their day great.
          </p>
        </div>
        <div className=" flex justify-center items-center w-screen relative overflow-x-scroll my-20">
          <div ref={ref}  className="flex overflow-x-scroll h-[600px] active:snap-normal w-[1100px] cursor-grab active:cursor-grabbing selection:translate-x-[1600px]">
            {_data.map((info) => (
              <div className="min-w-[1600px] overflow-hidden h-[500px]  font-[cormorant-garamond-light] flex  select-none">
                <div className="w-[500px] h-[500px] z-50">
                  <img src={info.image} className="object-cover w-full h-full select-none" />
                </div>
                <div className="w-[500px] flex flex-col gap-5 justify-center p-16">
                  <p className="  text-2xl leading-[1.5]"> “{info.review}”</p>
                  <div>
                    <p className="tracking-widest text-xl leading-[1.5]">
                      {info.name.toUpperCase()}
                    </p>
                    <p className="tracking-widest text-gray-200 text-sm">
                      {info.about}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
            <div className="bottom-32 right-1/3 flex gap-3 absolute cursor-pointer z-50 ">
                    <div onClick={() => setTestimonial(0)} className={`h-[2px] w-7  bg-slate-100 rounded-lg " +  ${currentTestimonial===0?'bg-[#ffffffff]':'bg-[#ffffff8c]'}`}></div>
                    <div onClick={() => setTestimonial(1)} className={`h-[2px] w-7  bg-slate-100 rounded-lg " +  ${currentTestimonial===1?'bg-[#ffffffef]':'bg-[#ffffff8c]'}`}></div>
                    <div onClick={() => setTestimonial(2)} className={`h-[2px] w-7  bg-slate-100 rounded-lg " +  ${currentTestimonial===2?'bg-[#ffffffef]':'bg-[#ffffff8c]'}`}></div>
                    <div onClick={() => setTestimonial(3)} className={`h-[2px] w-7  bg-slate-100 rounded-lg " +  ${currentTestimonial===3?'bg-[#ffffffef]':'bg-[#ffffff8c]'}`}></div>
            </div>
            <div onClick={(event)=>{
            console.log(event)
            handleScroll({ side: "right" })}} className="flex items-center gap-5 z-50 font-[500] text-base tracking-wider bottom-32 absolute cursor-pointer right-10">
                <p>NEXT TESTIMONIALS</p>
                <div className="border-2 border-white rounded-full w-8 flex justify-center items-center box-border h-8"><FaArrowRight/></div>
            </div>

            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
