import Sidebar from "../../Components/Layout/After Search/Sidebar";
import MyGoogleMap from "../../Components/Layout/After Search/MyGoogleMap";
import Card from "../../Components/Layout/After Search/Card";
import FAQSection from "../../Components/Layout/After Search/Faq" 
function AfterSearch() {
  return (
    <div className="w-full flex justify-between px-[50px] max1:px-[40px] max2:px-[30px] max3:px-[20px] max7:px-[10px]">
      <div className="w-[20%]">
        <Sidebar />
      </div>

      <div className="w-[79%] flex flex-col gap-[50px]">
        <MyGoogleMap />
        <Card />
        <FAQSection />
      </div>
    </div>
  );
}

export default AfterSearch;
