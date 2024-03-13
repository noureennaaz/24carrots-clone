import { useState, useEffect } from "react";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
//  useEffect(() => {
//    window.addEventListener("scroll", () => {
//           console.log('change')
//           setScroll(window.scrollY > 200);
//    });
//  }, []);

const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    setScroll(window.scrollY > 200)
    setScrollY(window.scrollY);

  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [scrollY]);
  const classes="lg:py-12 px-16 w-full text-[.9rem] tracking-wider block top-0 transition delay-300 bg-white z-10 ";
  return (
    <div className={scroll ? `${classes} absolute`:`${classes} fixed`}>
      <button className="lg:hidden">asdfghkjljgyifvhjmbvhjgy</button>
      <div className="flex justify-evenly">
          <div className="flex flex-grow justify-evenly">
            <div className="group px-2 py-1 relative hover:text-[#C15627]">ABOUT
              <div className="hidden group-hover:block absolute z-50 min-h-fit top-7 -left-1 w-52 rounded-lg bg-[#f8fafcf6] ">
                <ul className="flex flex-col gap-2 px-3 py-3 text-black">
                  <li className="hover:text-[#C15627]">ABOUT 24 CARROTS</li>
                  <li className="hover:text-[#C15627]">TEAM</li>
                  <li className="hover:text-[#C15627]">AWARDS & PRESS</li>
                  <li className="hover:text-[#C15627]">BLOG</li>
                </ul>
              </div>
            </div>
            <div className="px-2 py-1 hover:text-[#C15627] group relative">SERVICES
              <div className="hidden group-hover:block  absolute z-50 min-h-fit top-7 -left-1 w-52 rounded-lg bg-[#f8fafcf6]">
                <ul className="flex flex-col gap-2 px-3 py-3 text-black">
                  <li className="hover:text-[#C15627]">GOURMET CATERING</li>
                  <li className="hover:text-[#C15627]">BAR SERVICE</li>
                  <li className="hover:text-[#C15627]">STAFFING</li>
                  <li className="hover:text-[#C15627]">PRODUCTION</li>
              
                </ul>
              </div>
              
            </div>
            <div className="px-2 py-1 hover:text-[#C15627] group relative">EVENTS
                <div className="hidden group-hover:block absolute z-50 min-h-fit top-7 -left-1 w-52 rounded-lg bg-[#f8fafcf6]">
                    <ul className="flex flex-col gap-2 px-3 py-3 text-black">
                      <li className="hover:text-[#C15627]">WEDDINGS</li>
                      <li className="hover:text-[#C15627]">COORPORATE</li>
                      <li className="hover:text-[#C15627]">SOCIAL</li>
                      <li className="hover:text-[#C15627]">GALLERY</li>
                    </ul>
                  </div>
            </div>
          </div>
          <div className="w-[500px] min-w-[400px]">
            <img className="mx-auto" src="https://24carrots.com/wp-content/themes/24carrots/img/24carrots.svg"/>
          </div>
          <ul className="flex flex-grow justify-evenly">
            <li className="px-2 py-1 hover:text-[#C15627]">VENUES</li>
            <li className="px-2 py-1 hover:text-[#C15627]">CAREERS</li>
            <li className="px-2"><button className="transition-colors delay-[300ms] bg-[#C15627] py-1 px-4 rounded-[50px] text-white hover:bg-[#E8672F]">GET IN TOUCH</button></li>
          </ul>
      </div>
    </div>
  );
};

export default Navbar;
