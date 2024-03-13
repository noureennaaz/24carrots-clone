import { BsChevronCompactDown } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Carousel from "../components/carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import CarouselSlider from "../components/CarouselSlider";
import Testimonials from "../components/testimonials";
// import Footer from "../components/Footer";

const slides = [
  "https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg",
  "https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg",
  "https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg",
  "https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg",
];

const topics = [
  {
    index: 1,
    topic: "Weddings",
    heading: "EXCEPTIONAL WEDDINGS",
    body: "The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.",
    image:
      "https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg",
  },
  {
    index: 2,
    topic: "Social",
    heading: "INCOMPARABLE SOCIAL EVENTS",
    body: "We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!",
    image:
      "https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg",
  },
  {
    index: 3,
    topic: "Corporate",
    heading: "ONE-OF-A-KIND CORPORATE EVENTS",
    body: "Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.",
    image:
      "https://24carrots.com/wp-content/uploads/2023/10/2.3-Corporate-Joel-Maus.jpg",
  },
  {
    index: 4,
    topic: "Venues",
    heading: "EXCLUSIVE SOCIAL VENUES",
    body: "We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations.",
    image:
      "https://24carrots.com/wp-content/uploads/2023/10/2.4-Venues-Jenny-Quicksall.jpg",
  },
];

export default function HomePage() {
  const [currentTopic, changeTopic] = useState(0);

  return (
    <div className="relative overflow-y-scroll overflow-x-hidden scroll-smooth ">
      <Navbar />
      <section className="relative w-full min-h-[100vh]   ">
        <div className="relative top-0">
          <video
            src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4"
            muted
            loop
            autoPlay
            className="min-w-[1024px] min-h-[100vh]"
          >
            <source type="video/mp4" />
          </video>
          <div className="absolute top-1/2 w-full">
            <div className=" text-center w-full text-white text-6xl font-[cormorant-garamond-light] font-extralight lg:text-[90px] leading-[1]">
              Simply the Finest
            </div>
          </div>

          <div className="absolute w-full bottom-10 scale-150">
            <BsChevronCompactDown className="mx-auto scale-150" color="white"  />
          </div>
        </div>
      </section>
      <section className="flex w-full lg:py-32 py-20 flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col font-semibold lg:px-32 px-7 text-center text-[#1A4122]">
          <p className="tracking-[.3em] text-green-800 lg:pb-7 pb-3">
            WELCOME TO 24 CARROTS
          </p>
          <h2 className="font-[cormorant-garamond-light] font-extralight text-center text-6xl lg:text-[90px] leading-[1]">
            Remarkable <br /> Catering & <br />
            Events
          </h2>
          <div className="w-full">
            <p className="tracking-[.1em] text-center font-light py-7 px-4">
              24 Carrots is the premier catering and events company of choice in
              Southern California. We create remarkable experiences by offering
              the finest quality foods and providing unsurpassed personalized
              service, driven by our passion for life's special occasions.
            </p>
            <button className=" group transition-colors bg-[#C15627] py-1 px-4 rounded-[50px] text-white hover:bg-[#E8672F]">
              GET IN TOUCH{" "}
              <FaArrowRightLong className="inline pb-1 translate-x-2 group-hover:translate-x-2 transition-all ease-in-out" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 rounded-tl-[300px]">
          <Carousel slides={slides} />
        </div>
      </section>
      <section className="relative">
        <img
          src="https://24carrots.com/wp-content/themes/24carrots/img/big-carrot.svg"
          className="absolute -top-80 -z-50 sm:visible"
        />
        <div className="bg-no-repeat flex flex-col lg:flex-row lg:p-16 py-3 lg:mr-2 bg-top-left select-none z-50  px-10">
          <div className="w-[900px] max-lg:w-[80vw]">
            <img
              src={topics[currentTopic].image}
              className="rounded-t-[280px] h-[110vh] z-50 w-[780px] max-lg:w-[80vw] mx-auto object-cover"
            ></img>
          </div>
          <div className="lg:px-10 lg:ml-10 py-20 flex flex-col ">
            <div>
              <h2 className="font-[cormorant-garamond-light] font-extralight lg:text-[90px] text-5xl leading-[1]  text-[#1A4122]">
                Making Every Experience Magical
              </h2>
            </div>
            <div className="flex max-md:flex-wrap">
              <div className="font-[cormorant-garamond-light] lg:py-9 lg:pr-9 lg:text-[1.7rem] text-[18px] flex lg:flex-col gap-1 lg:gap-3 max-md:w-[70px]">
                {topics.map((values, index) => (
                  <div
                    onClick={() => changeTopic(index)}
                    className={
                      index !== currentTopic
                        ? "hover:text-[#C15627]  text-slate-300 transition-all ease-in font-light"
                        : "text-[#1A4122] "
                    }
                  >
                    {values.topic}
                  </div>
                ))}
              </div>
              <div className=" w-[500px] p-9 lg:pl-12">
                <div className="pt-2 text-[#1A4122] font-semibold">
                  <h4 className="tracking-wider">
                    {topics[currentTopic].heading}
                  </h4>
                </div>
                <div className="py-4">
                  <p className=" text-[18px] text-emerald-950 font-[350] h-[20vh]">
                    {topics[currentTopic].body}
                  </p>
                </div>
                <button className=" my-3 group transition-colors bg-[#C15627] py-2 px-4 rounded-[50px] text-white hover:bg-[#E8672F]">
                  LEARN MORE
                  <FaArrowRightLong className="inline pb-1 translate-x-2 group-hover:translate-x-2 transition-all ease-in-out" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:bg-clip-content bg-top bg-no-repeat bg-[url('https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png')] pt-20 lg:bg-contain bg-auto w-[100vw]  ">
        <div className="mt-72 mx-auto lg:h-[300px] lg:w-[600px] bg-white rounded-t-full w-[100vw] h-[250px]">
          <p className="text-center tracking-[.2rem] font-[450px] text-[#32773f] text-lg lg:pt-36 pt-12">
            VENUES
          </p>
        </div>
        <div className="mx-auto max-w-[700px] text-center relative -top-24 bg-white">
          <h2 className="font-[cormorant-garamond-light] font-extralight text-center text-5xl lg:text-[90px] leading-[1] text-[#1A4122]">
            Unforgettable Venues
          </h2>
          <p className="text-[18px] text-emerald-950 font-[350] p-12">
            24 Carrots is the exclusive or preferred caterer at Southern
            California’s most spectacular properties. From intimate understated
            spaces to large and luxurious, we’ll help you find the event venue
            that makes your heart skip a beat.
          </p>
          <button className=" group transition-colors bg-[#C15627] py-2 px-4 rounded-[50px] text-white hover:bg-[#E8672F]">
            EXPLORE VENUES{" "}
            <FaArrowRightLong className="inline pb-1  group-hover:translate-x-2 transition-all ease-in-out scale-125" />
          </button>
        </div>
      </section>
      <section className="relative">
        <CarouselSlider />
        <div className="h-[180vh] bg-gray-400 opacity-40 absolute -z-10 w-full top-96"></div>
        <div className=" text-center lg:py-32 bg-[bottom_5rem]">
          <h2 className="lg:px-80 font-[cormorant-garamond-light] font-extralight text-5xl lg:text-[90px] leading-[1]  text-[#1A4122]">
            Far More Than Just Business
          </h2>
          <p className="tracking-wider lg:px-72 px-6 py-10 text-lg">
            The way you do anything is the way you do everything. We haven’t
            cracked the code on catering; we simply care unreasonably about
            every aspect of what we do. We care about people as much as we care
            about details, and we absolutely refuse to compromise on making your
            day anything but the best. We’ve got your back from the initial idea
            to the final farewell!
          </p>
          <div className="w-full">
            <img
              src="https://i.ytimg.com/vi/7gPP9hsV4a0/maxresdefault.jpg"
              className="mx-auto lg:px-32 p-5"
            />
          </div>
        </div>
        {/* new */}
        <div className=" text-center pb-32 pt-12 bg-[bottom_5rem]">
          <h2 className="lg:px-80 p-10 font-[cormorant-garamond-light] font-extralight lg:text-[90px] text-5xl leading-[1]  text-[#1A4122]">
          Great Food & A Whole Lot More
          </h2>
          <p className="tracking-wider lg:px-72 py-10 px-7 text-lg">
            Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, and an inviting environment. But what really matters most is helping you create memories that will last for a lifetime. Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience.
          </p>
          <button className=" my-3 group transition-colors bg-[#C15627] py-2 px-4 rounded-[50px] text-white hover:bg-[#E8672F]">
                  LEARN MORE
                  <FaArrowRightLong className="inline pb-1 group-hover:translate-x-2 transition-all ease-in-out" />
          </button>
        </div>
      </section>
      <section className="flex mx-auto w-[81vw] max-sm:flex-wrap lg:order-2 order-1 max-sm:gap-3">
        <div className="lg:w-1/3 flex flex-col gap-5 justify-center">
          <div className='relative group'>
            <div className="relative">
              <h2 className="text-[#1A4122] font-[cormorant-garamond-light] text-3xl">Gourmet Catering</h2>
              <img className="absolute w-[260px] -left-6 -top-4 scale-0 group-hover:scale-100" src='https://24carrots.com/wp-content/themes/24carrots/img/animate/circlerd-hover_3.gif'/>
            </div>
            <p className="font-sm font-[250] py-3 w-[300px]">
            Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.
            </p>
            <button className=" my-3 group transition-colors border-1 border-[#C15627] text-[#C15627] py-2 px-4 rounded-[50px] bg-white hover:bg-[#E8672F]">
                  LEARN MORE
                  <FaArrowRightLong className="inline pb-1 group-hover:translate-x-2 transition-all ease-in-out" />
            </button>
          </div>
          <div className='relative group'>
            <div className="relative">
              <h2 className="text-[#1A4122] font-[cormorant-garamond-light] text-3xl">Gourmet Catering</h2>
              <img className="absolute w-[260px] -left-6 -top-4 scale-0 group-hover:scale-100" src='https://24carrots.com/wp-content/themes/24carrots/img/animate/circlerd-hover_3.gif'/>
            </div>
            <p className="font-sm font-[250] py-3 w-[300px]">
            Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.
            </p>
            <button className=" my-3 group transition-colors border-1 border-[#C15627] text-[#C15627] py-2 px-4 rounded-[50px] bg-white hover:bg-[#E8672F]">
                  LEARN MORE
                  <FaArrowRightLong className="inline pb-1 group-hover:translate-x-2 transition-all ease-in-out" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/3  sm:order-1">
          <div >
            <img
              src='https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif'
              className="rounded-t-[280px]  h-[95vh] z-50 w-[400px] mx-auto object-cover"
            ></img>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col gap-5 justify-center order-3 lg:pl-20">
          <div className='relative group'>
            <div className="relative">
              <h2 className="text-[#1A4122] font-[cormorant-garamond-light] text-3xl">Gourmet Catering</h2>
              <img className="absolute w-[260px] -left-6 -top-4 scale-0 group-hover:scale-100" src='https://24carrots.com/wp-content/themes/24carrots/img/animate/circlerd-hover_3.gif'/>
            </div>
            <p className="font-sm font-[250] py-3 w-[300px]">
            Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.
            </p>
            <button className=" my-3 group transition-colors border-1 border-[#C15627] text-[#C15627] py-2 px-4 rounded-[50px] bg-white hover:bg-[#E8672F]">
                  LEARN MORE
                  <FaArrowRightLong className="inline pb-1 group-hover:translate-x-2 transition-all ease-in-out" />
            </button>
          </div>
          <div className='relative group'>
            <div className="relative">
              <h2 className="text-[#1A4122] font-[cormorant-garamond-light] text-3xl">Event Production</h2>
              <img className="absolute w-[260px] -left-6 -top-4 scale-0 group-hover:scale-100" src='https://24carrots.com/wp-content/themes/24carrots/img/animate/circlerd-hover_3.gif'/>
            </div>
            <p className="font-sm font-[250] py-3 w-[300px]">
            If mind-blowing spectacles and immersive guest experiences are what you’re after, the specialists at 24 Carrots can pull it off on an epic scale!
            </p>
            <button className=" my-3 group transition-colors border-1 border-[#C15627] text-[#C15627] py-2 px-4 rounded-[50px] bg-white hover:bg-[#E8672F]">
                  LEARN MORE
                  <FaArrowRightLong className="inline pb-1 group-hover:translate-x-2 transition-all ease-in-out" />
            </button>
          </div>
        </div>
      </section>


      <section className="mt-40 ">
        <Testimonials></Testimonials>
      </section>

      {/* <Footer/> */}
      
    </div>
  );
}
