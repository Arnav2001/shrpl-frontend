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
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "2,781",
  },
  {
    cityName: "Mumbai",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "1,856",
  },
  {
    cityName: "Chennai",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "1,268",
  },
  {
    cityName: "Varnasi",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "2,032",
  },
  {
    cityName: "Hyderabad",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "1,474",
  },
  {
    cityName: "Gurgaon",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "1,488",
  },
  {
    cityName: "Puducherry",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "896",
  },
  {
    cityName: "Jaipur",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
    numProperties: "1,721",
  },
  {
    cityName: "Pune",
    cityImageUrl:
      "https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
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
