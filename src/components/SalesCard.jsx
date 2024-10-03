/* eslint-disable react/prop-types */
import businessAndFinance from "../assets/business-and-finance.png";
import upArrow from "../assets/up-arrow.png";
import { formatNumber } from "../lib/number";

const SalesCard = ({ totalSalesAndCosts }) => {

  return (
    <div className="rounded-[16px] bg-white h-full w-4/12 flex items-center py-5 overflow-y-hidden">
      <div className="w-2/5 flex justify-center">
        <img
          className="w-[73px] h-[73px]"
          src={businessAndFinance}
          alt="business and finanace"
        />
      </div>
      <div className="border h-full border-[#DBDADE]" />

      <div className="w-3/5 py-5 flex flex-col gap-y-[30px]  px-6">
        <div className="space-y-1">
          <h4 className="text-lg font-semibold leading-[26px] tracking-[-2%] text-[#23272E]">
            Total Sales & Costs
          </h4>
          <p className="text-[#8B909A] font-medium text-[14px] leading-[20px]">
            {totalSalesAndCosts.period}
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-[32px] leading-[32px] tracking-[-2%] text-[#23272E]">
            ${formatNumber(totalSalesAndCosts.value)}
          </h1>
          <div className="flex items-center">
            <img
              className="w-[10.13px] h-[10.38px] mr-1"
              src={upArrow}
              alt="up-arrow"
            />
            <p className="mr-2 text-[#1EB564] font-medium text-[14px] leading-[20px] tracking-[-2%]">
              {formatNumber(totalSalesAndCosts.change)}
            </p>
            <p className="text-[#8B909A] font-medium text-[14px] leading-[20px] tracking-[-2%]">
              vs last 7 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
