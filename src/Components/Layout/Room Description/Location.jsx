import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "195px",
};

const center = {
  lat: 31.5204,
  lng: 74.3587,
};
function Location() {
  return (
    <div className="w-full max3:w-[50%] max7:w-[100%] flex flex-col gap-[15px]">
      <div className="flex flex-col gap-[15px] py-[15px] px-[20px] rounded-[5px] border-[1px] border-[#A7A7A7]">
        <h3 className="font-semibold text-[18px] max9:text-[16px] leading-[18px] text-f2">
          Location
        </h3>
        <h3 className="flex gap-[6px] text-[14px] leading-[24px] text-f3 font-normal">
          <i className="bi bi-geo-alt-fill"></i>
          R. Damasceno Monteiro, 1170 Lisboa
        </h3>
        <LoadScript googleMapsApiKey="AIzaSyBkvFE4T8gykQBU-iNHe7V8llmWs41PzcU">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>

        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[14px] leading-[20px] text-[#344054] font-medium">
            Calculate route by public transport to:
          </h3>
          <form className="flex  max9:flex-col gap-[15px]">
            <input
              type="text"
              placeholder="Work/University"
              className="w-full text-[16px] leading-[24px] text-[#667085] font-normal placeholder-text-[#667085] border-[1px] border-[#D0D5DD] rounded-[8px] py-[10px] px-[14px]"
            />
            <button className="py-[10px] px-[18px] bg-f4 rounded-[8px] text-[16px] leading-[24px] font-medium text-white">
              Calculate
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-[15px] py-[15px] px-[20px] rounded-[5px] border-[1px] border-[#A7A7A7]">
        <div className="py-[4px] px-[10px] bg-[#F8F9FC] rounded-[16px]">
          <h4 className="flex gap-[6px] text-[14px] leading-[20px] font-medium text-[#363F72]">
            <i className="bi bi-check-circle-fill"></i>
            Professional Team
          </h4>
        </div>
        <div className="py-[4px] px-[10px] bg-[#F8F9FC] rounded-[16px]">
          <h4 className="flex gap-[6px] text-[14px] leading-[20px] font-medium text-[#363F72]">
            <i className="bi bi-check-circle-fill"></i>
            Book a Call
          </h4>
        </div>
        <div className="py-[4px] px-[10px] bg-[#F8F9FC] rounded-[16px]">
          <h4 className="flex gap-[6px] text-[14px] leading-[20px] font-medium text-[#363F72]">
            <i className="bi bi-check-circle-fill"></i>
            Verified Room
          </h4>
        </div>
        <div className="py-[4px] px-[10px] bg-[#F8F9FC] rounded-[16px]">
          <h4 className="flex gap-[6px] text-[14px] leading-[20px] font-medium text-[#363F72]">
            <i className="bi bi-check-circle-fill"></i>
            Fast and Secure Booking
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Location;
