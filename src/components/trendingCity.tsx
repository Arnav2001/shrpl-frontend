import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TrendingCity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className=" w-full max-w-[1110px] text-black mt-20" ref={ref}>
      {/* Header Section */}
     <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className=" text-center text-3xl sm:text-4xl font-serif font-bold mb-2 text-[#8B2B06]">
          Trending Destinations
        </h1>
        <p className=" text-center text-base sm:text-lg mb-10 font-serif text-[#8B2B06]">
          Most popular choices for travellers from India
        </p>
      

      <div className="w-full">
        <div className=" w-full h-[400px]  grid grid-cols-2 gap-6 items-center">
          
          <div className=" h-full w-full">
          <div
            className="relative w-full  overflow-hidden cursor-pointer rounded-lg h-full "
            style={{
              backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full  absolute h-[20%] inset-0 bg-gradient-to-b from-black/70 to-black/0">
            <h3 className="text-xl font-bold mb-2 absolute top-0 left-0 p-6 text-white">
              {" "}
              New Delhi
            </h3>
            </div>
          </div>
          </div>
          <div className=" h-full w-full">
          <div
            className="relative w-full overflow-hidden cursor-pointer rounded-lg h-full "
            style={{
              backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            
            }}
          >
            <div className=" absolute w-full h-[20%] inset-0  bg-gradient-to-b from-black/70 to-black/0 ">
            <h3 className="text-xl font-bold mb-2 absolute top-0 left-0 p-6 text-white">
              {" "}
              Bengaluru
            </h3>
            </div>
          </div>
          </div>
        </div>
        <div className="w-full h-[400px] pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">
          
          <div className=" h-full ">
          <div
            className="relative w-full overflow-hidden cursor-pointer rounded-lg h-full "
            style={{
              backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full inset-0 absolute h-[20%]  bg-gradient-to-b from-black/70 to-black/0">
            <h3 className="text-xl font-bold mb-2 absolute top-0 left-0 p-6 text-white">
              {" "}
              Mumbai
            </h3>
            </div>
          </div>
          </div>
          <div  className=" h-full w-full">
          <div
            className="relative w-full overflow-hidden cursor-pointer rounded-lg h-full "
            style={{
              backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full  absolute h-[20%] inset-0 bg-gradient-to-b from-black/70 to-black/0">
            <h3 className="text-xl font-bold mb-2 absolute top-0 left-0 p-6 text-white">
              {" "}
              Chennai
            </h3>
            </div>
          </div>
          </div>
          <div className=" h-full w-full">
          <div
            className="relative w-full overflow-hidden cursor-pointer rounded-lg h-full "
            style={{
              backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/600x600/684940.jpg?k=f8eb21b5c72289407585cef7ff7cfc99798ac9238398d7b27c6929ad6c54f78a&o=")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full  absolute h-[20%] inset-0 bg-gradient-to-b from-black/70 to-black/0">
            <h3 className="text-xl font-bold mb-2 absolute top-0 left-0 p-6 text-white">
              {" "}
              Varanasi
            </h3>
            </div>
          </div>
        </div>
        </div>
      </div>
      </motion.header>
    </div>
  );
};

export default TrendingCity;
