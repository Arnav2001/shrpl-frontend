import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const hotels = [
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72057788.jpg?k=9b305390669e8b7d3ed0c07f34ff3e550de9f1e7e872dcfbafe25c2f86ea4c3c&o=",
    hotelName: "The Grand Palace",
    rating: 4.8,
    numReviews: 1243,
    desc: "Luxury stay with rooftop pool and city view.",
    location: "New Delhi",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154282511.jpg?k=1ad417b40bf8e2d56017775c2562de6e0c393ffe9fd3784dec18985f18bb6989&o=",
    hotelName: "Cityscape Residency",
    rating: 4.3,
    numReviews: 895,
    desc: "Comfortable rooms with easy access to transport.",
    location: "Mumbai",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/336041746.jpg?k=81ca9e45244b4f17cb199c4ac73d2094446ebd17020c5c1425a44a23e860b562&o=",
    hotelName: "Ocean Breeze Resort",
    rating: 4.6,
    numReviews: 1105,
    desc: "Beachfront property with private cottages.",
    location: "Goa",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582569791.jpg?k=afc44b5e0af18853e77df4628b94f3ee34c2812450827d625212d78807062b18&o=",
    hotelName: "Hillside Retreat",
    rating: 4.7,
    numReviews: 738,
    desc: "Quiet escape surrounded by nature and hills.",
    location: "Manali",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Urban Nest Hotel",
    rating: 4.2,
    numReviews: 562,
    desc: "Modern rooms with coworking space and café.",
    location: "Bengaluru",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72057788.jpg?k=9b305390669e8b7d3ed0c07f34ff3e550de9f1e7e872dcfbafe25c2f86ea4c3c&o=",
    hotelName: "The Grand Palace",
    rating: 4.8,
    numReviews: 1243,
    desc: "Luxury stay with rooftop pool and city view.",
    location: "New Delhi",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154282511.jpg?k=1ad417b40bf8e2d56017775c2562de6e0c393ffe9fd3784dec18985f18bb6989&o=",
    hotelName: "Cityscape Residency",
    rating: 4.3,
    numReviews: 895,
    desc: "Comfortable rooms with easy access to transport.",
    location: "Mumbai",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Ocean Breeze Resort",
    rating: 4.6,
    numReviews: 1105,
    desc: "Beachfront property with private cottages.",
    location: "Goa",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582569791.jpg?k=afc44b5e0af18853e77df4628b94f3ee34c2812450827d625212d78807062b18&o=",
    hotelName: "Hillside Retreat",
    rating: 4.7,
    numReviews: 738,
    desc: "Quiet escape surrounded by nature and hills.",
    location: "Manali",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Urban Nest Hotel",
    rating: 4.2,
    numReviews: 562,
    desc: "Modern rooms with coworking space and café.",
    location: "Bengaluru",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/72057788.jpg?k=9b305390669e8b7d3ed0c07f34ff3e550de9f1e7e872dcfbafe25c2f86ea4c3c&o=",
    hotelName: "The Grand Palace",
    rating: 4.8,
    numReviews: 1243,
    desc: "Luxury stay with rooftop pool and city view.",
    location: "New Delhi",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/154282511.jpg?k=1ad417b40bf8e2d56017775c2562de6e0c393ffe9fd3784dec18985f18bb6989&o=",
    hotelName: "Cityscape Residency",
    rating: 4.3,
    numReviews: 895,
    desc: "Comfortable rooms with easy access to transport.",
    location: "Mumbai",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Ocean Breeze Resort",
    rating: 4.6,
    numReviews: 1105,
    desc: "Beachfront property with private cottages.",
    location: "Goa",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582569791.jpg?k=afc44b5e0af18853e77df4628b94f3ee34c2812450827d625212d78807062b18&o=",
    hotelName: "Hillside Retreat",
    rating: 4.7,
    numReviews: 738,
    desc: "Quiet escape surrounded by nature and hills.",
    location: "Manali",
  },
  {
    hotelImage:
      "https://cf.bstatic.com/xdata/images/hotel/square600/454036401.webp?k=4e45bf5f03f56677570475cc55c6023dd16ca985cb2bcadbec846210f2a0405f&o=",
    hotelName: "Urban Nest Hotel",
    rating: 4.2,
    numReviews: 562,
    desc: "Modern rooms with coworking space and café.",
    location: "Bengaluru",
  },
];

const PropertyByTypeList = () => {
   const { propertyByType } = useParams();
  return (
    <div className="w-full  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-12 px-12">
      {hotels.map((val, index) => (
        <div
          key={index}
          className=" w-full border p-6 border-gray-200 rounded-lg "
        >
            <div
              className="h-[300px] w-full rounded-lg overflow-hidden bg-red-500"
              style={{
                backgroundImage: `url(${val.hotelImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="">
              <h2 className="text-2xl font-bold ">{val.hotelName}</h2>
              <p className=" text-gray-600 leading-relaxed whitespace-pre-line">{propertyByType}</p>
              <p>{val.desc}</p>
            </div>
                <div className="flex  items-center gap-2">
                    <p className="text-xs text-nowrap">{val.numReviews} reviews</p>
                    <p className="text-red-700 flex gap-2 justify-center items-center p-2 rounded-lg">
                        <FaStar className="border-white text-l" />
                        {val.rating}</p>
                </div>
            <div className="w-full bg-red-700 cursor-pointer hover:bg-red-800 text-nowrap text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
                <p>Show prices</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyByTypeList;
