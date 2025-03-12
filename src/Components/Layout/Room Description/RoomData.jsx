function RoomData() {
  return (
    <div className="flex flex-col gap-[15px] h-[100vh] mt-[10px] max6:mt-[40px]">
      {/* Room 3 in Casa Monteiro II */}
      <div className="w-full flex flex-col gap-[10px]">
        <div className="flex max6:flex-col  justify-between items-center max6:items-start max6:gap-[15px]">
          <h1 className="text-[30px] max6:text-[28px] max9:text-[25px] leading-[35px] max9:leading-[32px] text-f2 font-semibold">
            Room 3 in Casa Monteiro II
          </h1>
          <h1 className="text-[30px] max6:text-[28px] max9:[25px] leading-[35px] max9:leading-[32px] text-f2 font-semibold">
            $450
            <span className="font-normal text-[20px] leading-[24px] text-f3">
              /Bills included
            </span>
          </h1>
        </div>

        <h3 className="flex gap-[6px] text-[14px] leading-[24px] text-f3 font-normal">
          <i className="bi bi-geo-alt-fill"></i>
          R. Damasceno Monteiro, 1170 Lisboa
        </h3>

        <div className="flex items-center gap-[15px] max6:overflow-y-auto">
          <div className="font-medium text-[12px] whitespace-nowrap leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
            4 bedrooms
          </div>
          <div className="font-medium text-[12px] whitespace-nowrap leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
            150 m2
          </div>
          <div className="font-medium text-[12px] whitespace-nowrap leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
            Private Bathroom
          </div>
          <div className="font-medium text-[12px] whitespace-nowrap leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
            Furnished
          </div>
          <div className="font-medium text-[12px] whitespace-nowrap leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
            Cleaning Included
          </div>
          <div className="font-medium text-[12px] whitespace-nowrap leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
            Balcony
          </div>
          <div className="font-medium text-[12px] whitespace-nowrap leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
            Bed Linen/Towels
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-[15px] py-[15px] px-[20px] border-[1px] border-[#A7A7A7] rounded-[10px] py-[15px] px-[20px]">
        <h3 className="font-medium text-[18px] max9:text-[16px] leading-[18px] text-f2">
          Description
        </h3>
        <p className="font-medium text-[14px] leading-[24px] text-f2">
          Lorem ipsum dolor sit amet consectetur. Sit dui fermentum vitae in dui
          gravida lectus molestie. Dui a netus interdum enim. Vitae id ornare
          amet curabitur cursus arcu ante sed. Orci ipsum libero sed in eget
          vitae. Nulla fringilla integer viverra aenean massa. Metus consequat
          purus enim tortor malesuada morbi. Eget mattis risus mauris egestas.
          Aenean quis amet habitant tortor facilisis viverra erat viverra velit.
          Velit mattis magna cursus purus vitae mauris senectus maed,
        </p>
        <div className="flex gap-[4px] w-fit font-medium text-[14px] max9:text-[12px] leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
          Show more
          <i class="bi bi-arrow-down-short"></i>
        </div>
      </div>

      {/* Facilities */}
      <div className="flex flex-col gap-[15px] py-[15px] px-[20px] border-[1px] border-[#A7A7A7] rounded-[10px] py-[15px] px-[20px]">
        <h3 className="font-medium text-[18px] max9:text-[16px] leading-[18px] text-f2">
          Facilities
        </h3>
        <div className="flex items-center gap-[15px] max5:justify-between max5:gap-[0px] max6:overflow-y-auto">
          <div className="flex gap-[4px] whitespace-nowrap font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi bi-house"></i>
            Shared Living Room
          </div>
          <div className="flex gap-[4px] whitespace-nowrap font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi bi-tree"></i>
            Balcony
          </div>
          <div className="flex gap-[4px] whitespace-nowrap font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi bi-wifi"></i>
            WiFi
          </div>
          <div className="flex gap-[4px] whitespace-nowrap font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi-thermometer-high	"></i>
            Heating
          </div>
          <div className="flex gap-[4px] whitespace-nowrap font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi-droplet"></i>
            Washing Machine
          </div>
          <div className="flex gap-[4px] whitespace-nowrap font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi-wind"></i>
            Air Conditioner
          </div>
          <div className="flex gap-[4px] whitespace-nowrap font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi-car-front"></i>
            Parking
          </div>
        </div>
        <div className="flex gap-[4px] w-fit font-medium text-[14px] max9:text-[12px] leading-[18px] text-f4 bg-f5 rounded-[16px] py-[2px] px-[8px]">
          Show more
          <i class="bi bi-arrow-down-short"></i>
        </div>
      </div>

      {/* Availability */}
      <div className="flex flex-col gap-[15px] py-[15px] px-[20px] border-[1px] border-[#A7A7A7] rounded-[10px] py-[15px] px-[20px]">
        <h3 className="font-semibold text-[18px] max9:text-[16px] leading-[18px] text-f2">
          Availability
        </h3>
        <div className="flex justify-between max4:flex-col max4:gap-[40px]">
          <div className="w-[25%] max4:w-[100%]">
            <h3 className="font-normal text-[14px] leading-[24px] text-f3 whitespace-nowrap">
              Available from:
              <span className="font-semibold text-[14px] leading-[24px]">
                26.February 2077
              </span>
            </h3>
            <h3 className="font-normal text-[14px] leading-[24px] text-f3">
              Minimum stay:
              <span className="font-semibold text-[14px] leading-[24px]">
                3 Months
              </span>
            </h3>
            <h3 className="font-normal text-[14px] leading-[24px] text-f3">
              Maximum stay:
              <span className="font-semibold text-[14px] leading-[24px]">
                Not detriment
              </span>
            </h3>
            <h3 className="font-normal text-[14px] leading-[24px] text-f3">
              Calendar Updated:
              <span className="font-semibold text-[14px] leading-[24px]">
                1 week ago
              </span>
            </h3>
          </div>
          <div className="w-[75%] max4:w-[100%] flex gap-[5px] justify-end items-center max7:overflow-y-auto">
            <div className="w-fit h-fit p-[9px] bg-[#F0E6E5] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#A11F16] text-center">
                Jan
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#A11F16] text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F0E6E5] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#A11F16] text-center">
                Feb
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#A11F16] text-center">
                700$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F9FAFB] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                Mar
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                400$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F9FAFB] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                Apr
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F9FAFB] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                May
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F9FAFB] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                Jun
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#6C6B6B] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-white text-center">
                Jul
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-white text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#6C6B6B] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-white text-center">
                Aug
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-white text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#6C6B6B] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-white text-center">
                Sep
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-white text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F9FAFB] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                Oct
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F9FAFB] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                Nov
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                500$
              </h3>
            </div>
            <div className="w-fit h-fit p-[9px] bg-[#F9FAFB] rounded-[3px]">
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                Dec
              </h3>
              <h3 className="font-normal text-[12px] leading-[20px] text-[#484848] text-center">
                500$
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Landlord rules */}
      <div className="flex flex-col gap-[15px] py-[15px] px-[20px] border-[1px] border-[#A7A7A7] rounded-[10px] py-[15px] px-[20px]">
        <h3 className="font-semibold text-[18px] max9:text-[16px] leading-[18px] text-f2">
          Landlord rules
        </h3>
        <div className="flex items-center gap-[15px] max7:flex-col max7:items-start">
          <div className="flex gap-[4px] font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi-ban"></i>
            No smoking allowed
          </div>
          <div className="flex gap-[4px] font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi-x-circle"></i>
            Pets are not allowed
          </div>
          <div className="flex gap-[4px] font-medium text-[12px] leading-[18px] text-f4 bg-[#EBEBEB] rounded-[16px] py-[2px] px-[8px]">
            <i className="bi-person-check"></i>
            Overnight guests are allowed
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomData;
