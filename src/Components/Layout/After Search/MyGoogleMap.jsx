import { GoogleMap, LoadScript, OverlayView } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "596px",
  borderRadius: "10px",
  overflow: "hidden",
};

const center = {
  lat: 31.5204,
  lng: 74.3587,
};

const hotelsData = [
  {
    id: 1,
    name: "Hotel A",
    lat: 31.5204,
    lng: 74.3587,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Lahore, Pakistan",
    price: 120,
    size: 40,
    beds: 2,
    baths: 1,
  },
  {
    id: 2,
    name: "Hotel B",
    lat: 31.525,
    lng: 74.35,
    image:
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Karachi, Pakistan",
    price: 150,
    size: 55,
    beds: 3,
    baths: 2,
  },
  {
    id: 3,
    name: "Hotel C",
    lat: 31.53,
    lng: 74.36,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Islamabad, Pakistan",
    price: 200,
    size: 70,
    beds: 4,
    baths: 3,
  },
];

function MyGoogleMap() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const result = hotelsData.filter((hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchData(result);
  }, [search]);

  return (
    <div className="relative rounded-[10px]">
      <LoadScript googleMapsApiKey="AIzaSyBkvFE4T8gykQBU-iNHe7V8llmWs41PzcU">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
        >
          {searchData.map((hotel) => (
            <OverlayView
              key={hotel.id}
              position={{ lat: hotel.lat, lng: hotel.lng }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div className="bg-white shadow-lg rounded-xl overflow-hidden w-56">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-28 object-cover p-1 rounded-xl"
                />
                <div className="p-3">
                  <h3 className="text-base font-semibold">{hotel.title}</h3>
                  <p className="text-xs text-gray-500">{hotel.location}</p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-lg font-bold">${hotel.price}</span>
                    <span className="text-gray-500">{hotel.size}m²</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-xs mt-2">
                    <span>🛏 {hotel.beds} Beds</span>
                    <span>🛁 {hotel.baths} Baths</span>
                  </div>
                </div>
              </div>
            </OverlayView>
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="absolute top-[40px] left-[50%] translate-x-[-50%] w-[95%]">
        <input
          type="text"
          placeholder="Search house, customer, and others"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full relative rounded-[20px] placeholder:text-f1 text-[12px] py-[10px] px-[35px]"
        />
        <i className="bi bi-search text-f1 absolute left-[10px] top-[50%] translate-y-[-50%]"></i>
      </div>
    </div>
  );
}

export default MyGoogleMap;
