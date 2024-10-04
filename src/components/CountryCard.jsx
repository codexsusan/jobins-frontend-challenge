/* eslint-disable react/prop-types */
import usa from "../assets/usa.png";
import brazil from "../assets/br.png";
import australia from "../assets/aus.png";
import chevronUp from "../assets/chevron-up.png";
import chevronDown from "../assets/chevron-down.png";
import { cn } from "../lib/utils";
import { formatNumber } from "../lib/number";

const CountryCard = ({ salesByCountry }) => {
  return (
    <div className="rounded-[16px] bg-white min-h-max w-5/12 py-[31px] px-[24px] space-y-[18px]">
      {salesByCountry &&
        salesByCountry.map((detail, index) => (
          <CountryItem key={index} detail={detail} />
        ))}
    </div>
  );
};

export default CountryCard;

const CountryImage = {
  "United States": usa,
  Brazil: brazil,
  Australia: australia,
};

const CountryItem = ({ detail }) => {
  const currentImage = CountryImage[detail.country];
  return (
    <div className="flex gap-x-4 h-[41px] items-center">
      <img
        className="w-[34px] h-[34px] rounded-full"
        src={currentImage}
        alt={detail.country}
      />
      <div className="w-24">
        <h4 className="font-semibold text-[15px] leading-[21px] text-[#4B465C]">
          {formatNumber(detail.value)}
        </h4>
        <p className="font-normal text-[13px] leading-[20px] text-[#8B909A]">
          {detail.country}
        </p>
      </div>
      <div className="flex-grow mr-4">
        <div className="h-2 bg-blue-200 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={{ width: `${detail.changePercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="flex gap-x-1 items-center">
        <img
          className="w-5 h-5"
          src={detail.trend == "up" ? chevronUp : chevronDown}
          alt={detail.trend}
        />
        <p
          className={cn(
            "font-semibold text-[15px] leading-[21px]",
            detail.trend == "up" ? "text-[#28C76F]" : "text-[#EA5455]"
          )}
        >
          {detail.changePercentage}%
        </p>
      </div>
    </div>
  );
};
