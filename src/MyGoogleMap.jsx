import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "596px",
};

const center = {
  lat: 31.5204,
  lng: 74.3587,
};

const hotelsData = [
  { id: 1, name: "Hotel A", lat: 31.5204, lng: 74.3587 },
  { id: 2, name: "Hotel B", lat: 31.525, lng: 74.35 },
  { id: 3, name: "Hotel C", lat: 31.53, lng: 74.36 },
];
function MyGoogleMap() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(hotelsData);

  function handleClick() {
    const result = hotelsData.filter((hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(searchData);

    setSearchData(result);
  }
  return (
    <div className="relative">
      <LoadScript googleMapsApiKey="AIzaSyBkvFE4T8gykQBU-iNHe7V8llmWs41PzcU">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
        >
          {searchData.map((hotel) => (
            <Marker
              key={hotel.id}
              position={{ lat: hotel.lat, lng: hotel.lng }}
            ></Marker>
          ))}{" "}
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
        <i className="bi bi-search text-f1 absolute left-[10px] top-[50%] translate-y-[-50%]" onClick={handleClick}></i>
      </div>
    </div>
  );
}

export default MyGoogleMap;
