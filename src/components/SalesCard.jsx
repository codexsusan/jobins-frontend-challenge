import businessAndFinance from "../assets/business-and-finance.png";
import upArrow from "../assets/up-arrow.png";

const SalesCard = () => {
  return (
    <div className="rounded-[16px] bg-white h-full w-4/12 flex items-center">
      <div className="w-2/5 flex justify-center ">
        <img
          className="w-[73px] h-[73px]"
          src={businessAndFinance}
          alt="business and finanace"
        />
      </div>

      <div className="w-3/5 py-5 flex flex-col gap-y-[30px] border-l-2 pl-[33px]">
        <div>
          <h4>Total Sales & Costs</h4>
          <p>Last 7 days</p>
        </div>
        <div>
          <h1>$350K</h1>
          <div className="flex items-center">
            <img
              className="w-[10.13px] h-[10.38px] mr-1"
              src={upArrow}
              alt="up-arrow"
            />
            <p className="mr-2">8.56K</p>
            <p>vs last 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
