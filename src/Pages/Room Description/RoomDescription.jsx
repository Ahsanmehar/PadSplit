import BookingRequest from "../../Components/Layout/Room Description/BookingRequest";
import RoomData from "../../Components/Layout/Room Description/RoomData";
import RoomDescriptionSlider from "../../Components/Layout/Room Description/RoomDescriptionSlider";
import Location from "../../Components/Layout/Room Description/Location";

function RoomDescription() {
  return (
    <div className="flex max3:flex-col justify-between px-[50px] max1:px-[40px] max2:px-[30px] max3:px-[20px] max7:px-[10px] max4:gap-[100px] max6:gap-[150px] max7:gap-[250px] max8:gap-[300px] max9:gap-[400px] max10-[500px] max11:gap-[550px]">
      <div className="w-[71%] max3:w-[100%]">
        <RoomDescriptionSlider />
        <RoomData />
      </div>
      <div className="flex flex-col max3:flex-row max7:flex-col gap-[15px] w-[28%] max3:w-[100%]">
        <BookingRequest />
        <Location />
      </div>
    </div>
  );
}

export default RoomDescription;
