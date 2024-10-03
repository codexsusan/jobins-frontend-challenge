/* eslint-disable react/prop-types */
import yen from "../assets/yen.png";
import upArrow from "../assets/up-arrow.png";
import { formatNumber } from "../lib/number";

const ProfitCard = ({ totalProfit }) => {
  return (
    <div className="rounded-[16px] bg-white h-full w-3/12 py-5 px-6 flex flex-col justify-between">
      <div className="flex gap-x-[22px]">
        <img className="w-[43px] h-[43px]" src={yen} alt="yen" />
        <div>
          <h4 className="text-[#23272E] font-semibold text-[18px] leading-[26px] tracking-[-2%]">
            Total Profit
          </h4>
          <p className="text-[#8B909A] font-medium text-[14px] leading-5 tracking-[-2%]">
            {totalProfit.period}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="font-bold text-[32px] leading-[32px] tracking-[-2%] text-[#23272E]">
          {formatNumber(totalProfit.value)}
        </h1>
        <div className="flex items-center">
          <img
            className="w-[10.13px] h-[10.38px] mr-1"
            src={upArrow}
            alt="up-arrow"
          />
          <p className="mr-2 text-[#1EB564] font-medium text-[14px] leading-[20px] tracking-[-2%]">
            {totalProfit.changePercentage}%
          </p>
          <p className="text-[#8B909A] font-medium text-[14px] leading-[20px] tracking-[-2%]">
            vs last 7 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;
