import { motion, useInView } from "framer-motion";
import  { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const cities = [
  {
    cityName: "New Delhi", 
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "3,969",
  },
  {
    cityName: "Bengaluru",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=",
    numProperties: "2,781",
  },
  {
    cityName: "Mumbai",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=",
    numProperties: "1,856",
  },
  {
    cityName: "Chennai",
    cityImageUrl:
      "https://r-xx.bstatic.com/xdata/images/city/170x136/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=",
    numProperties: "1,268",
  },
  {
    cityName: "Varnasi",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=",
    numProperties: "2,032",
  },
  {
    cityName: "Hyderabad",
    cityImageUrl:
      "https://r-xx.bstatic.com/xdata/images/city/170x136/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=",
    numProperties: "1,474",
  },
  {
    cityName: "Gurgaon",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684622.jpg?k=f9eacb40b8f7c8560afc74cdcfe2e7028e5117a36a0d8d3356f735ea3ac20f4f&o=",
    numProperties: "1,488",
  },
  {
    cityName: "Puducherry",
    cityImageUrl:
      "https://r-xx.bstatic.com/xdata/images/city/170x136/684769.jpg?k=146b18e42b9eb74078f2e80e07e573e8dbac879208b86bae451f99882f566a99&o=",
    numProperties: "896",
  },
  {
    cityName: "Jaipur",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=",
    numProperties: "1,721",
  },
  {
    cityName: "Pune",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684822.jpg?k=8e3dfdbe7474b16f993bead046bb1d3d329cdd68c6aee6ec72c8e935ba426a9f&o=",
    numProperties: "1,034",
  },
];

const AllCities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scroll = (direction: string) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className=" w-full max-w-[1110px] text-black mt-20" ref={ref}>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className=" text-center text-3xl sm:text-4xl font-serif font-bold mb-2 text-[#8B2B06]">
          Explore India
        </h1>
        <p className=" text-center text-base sm:text-lg mb-10 font-serif text-[#8B2B06]">
          These popular destinations have a lot to offer
        </p>
      </motion.header>

      <div className="w-full relative ">
        <button
          onClick={() => scroll("left")}
          className="px-4 absolute top-[40%] -translate-x-4 flex items-center justify-center left-0 z-10 py-2 bg-white text-black shadow-md w-[30px] h-[30px] rounded-full"
        >
          <IoIosArrowBack className="absolute" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="px-4 absolute flex translate-x-4 items-center justify-center top-[40%] right-0 py-2 rounded-[50%] w-[30px] h-[30px] bg-white text-black shadow-md"
        >
          <IoIosArrowForward className="absolute" />
        </button>

        <div
          ref={scrollRef}
          className="flex w-full no-scrollbar overflow-x-auto scrollbar-hide space-x-4 scroll-smooth"
        >
          {cities.map((val, index) => (
            <Link to={`/cityHotels/${val.cityName}`} key={index}>
              <div
                className="min-w-[200px] rounded-lg h-[150px] bg-gray-300 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${val.cityImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <h5 className="text-black mt-2">{val.cityName}</h5>
              <p className="text-gray-500">{val.numProperties} properties</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCities;
