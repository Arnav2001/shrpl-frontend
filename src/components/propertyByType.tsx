import { motion, useInView } from "framer-motion";
import  { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const proprtiesType = [
  {
    propertyType: "Hotels",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Apartments",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Resorts",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Villas",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Cabins",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Cottage",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Glamping",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Guest Houses",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
     },
  {
    propertyType: "Glamping",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Glamping",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
];

const PropertyByType = () => {
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
    <div className="w-full max-w-[1110px] text-black mt-20 " ref={ref}>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        
        <h1 className="text-3xl text-center mb-6 sm:text-4xl font-serif font-bold mb-2 text-[#8B2B06]">
          Browse by property type
        </h1>
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
          {proprtiesType.map((val, index) => (
            <div key={index}>
              <div
                className="min-w-[200px] rounded-lg h-[200px] bg-gray-300 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${val.propertyImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <h5 className="text-black mt-2">{val.propertyType}</h5>
    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyByType