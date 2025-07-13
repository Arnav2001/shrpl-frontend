import { motion, useInView } from "framer-motion";
import  { useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const proprtiesType = [
  {
    propertyType: "Hotels",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
    
  },
  {
    propertyType: "Apartments",
    propertyImageUrl:
      "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    
  },
  {
    propertyType: "Resorts",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595551044.jpeg?k=262826efe8e21a0868105c01bf7113ed94de28492ee370f4225f00d1de0c6c44&o=",
    
  },
  {
    propertyType: "Villas",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/620168315.jpeg?k=300d8d8059c8c5426ea81f65a30a7f93af09d377d4d8570bda1bd1f0c8f0767f&o=",
    
  },
  {
    propertyType: "Cabins",
    propertyImageUrl:
      "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595549239.jpeg?k=ad5273675c516cc1efc6cba2039877297b7ad2b5b3f54002c55ea6ebfb8bf949&o=",
    
  },
  {
    propertyType: "Cottage",
    propertyImageUrl:
      "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550000.jpeg?k=71eeb3e0996d7f734e57a6fa426c718749a36df768ca5d2fb1dc65fcd7483c1d&o=",
    
  },
  {
    propertyType: "Glamping",
    propertyImageUrl:
      "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
    
  },
  {
    propertyType: "Guest Houses",
    propertyImageUrl:
      "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550178.jpeg?k=1db9bffadd03a0f2a9f0a06ba6c7751b16465f2dd251738f229d7a57dca799ef&o=",
     },
  {
    propertyType: "Hostels",
    propertyImageUrl:
      "https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550415.jpeg?k=8967853a074040381dfa25a568e6c780e309b529e0c144995c5bbc9644721eca&o=",
    
  },
  {
    propertyType: "B&B",
    propertyImageUrl:
      "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595549020.jpeg?k=f5df2d3dc0000073bef517b0cab9593036f3f1aafa2421df31a6538a8c56b834&o=",
    
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
        
        <h1 className="text-3xl text-center mb-6 sm:text-4xl font-serif font-bold text-[#8B2B06]">
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
            <Link to={`/propertyByType/${val.propertyType}`} key={index}>
              <div
                className="min-w-[200px] rounded-lg h-[200px] bg-gray-300 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${val.propertyImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <h5 className="text-black mt-2">{val.propertyType}</h5>
    
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyByType