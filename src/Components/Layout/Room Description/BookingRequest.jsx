function BookingRequest() {
  return (
    // {/* Booking Request */}
    <div className="w-full max3:w-[50%] max7:w-[100%] flex flex-col gap-[15px] py-[15px] px-[20px] rounded-[5px] border-[1px] border-[#A7A7A7]">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-[18px] max9:text-[16px] leading-[18px] text-f2">
          Booking Request
        </h3>
        <div className="flex items-center gap-[10px]">
          <h2><i className="bi bi-box-arrow-up text-[18px]"></i></h2>
          <h2><i className="bi bi-heart text-[18px]"></i></h2>
        </div>
      </div>
      <form className="flex flex-col gap-[300px] max3:gap-[400px] max9:gap-[300px]">
        <div className="flex max9:flex-col gap-[10px]">
          <label
            htmlFor="date1"
            className="w-[50%] max9:w-full flex flex-col gap-[6px] font-medium text-[14px] leading-[20px] text-[#344054]"
          >
            Check In:
            <input
              type="date"
              id="date1"
              className="w-full text-[16px]  max9:text-[14px] text-[#667085] py-[10px] px-[14px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            />
          </label>
          <label
            htmlFor="date2"
            className="w-[50%] max9:w-full flex flex-col gap-[6px] font-medium text-[14px] leading-[20px] text-[#344054]"
          >
            Check In:
            <input
              type="date"
              id="date2"
              className=" w-full text-[16px] max9:text-[14px] text-[#667085] py-[10px] px-[14px] rounded-[8px] border-[1px] border-[#D0D5DD]"
            />
          </label>
        </div>

        <button className="w-full bg-f4 text-white text-[14px] max3:text-[16px] font-medium leading-[20px] py-[8px] max3:py-[18px] px-[14px] rounded-[8px]">
          Check Booking
        </button>
      </form>
    </div>
  );
}
export default BookingRequest;
