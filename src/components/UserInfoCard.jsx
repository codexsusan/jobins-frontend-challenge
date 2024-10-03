import avatar from "../assets/avatar.png";
import { useEffect, useState } from "react";
import { formatDate } from "../lib/date";

const UserInfoCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/user");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white rounded-tl-[16px] rounded-tr-[16px] pt-6 h-[167px]">
      <div className="flex divide-x-2 divide-[#DBDADE] h-full">
        <div className="w-1/3 flex h-full items-center px-10 gap-x-4">
          <img className="w-[71.49px] h-[72px]" src={avatar} alt="avatar" />
          <div>
            <h4 className="text-[#23272E] font-semibold text-[18px] leading-[22px]">
              {data.name}
            </h4>
            <p className="font-normal text-[15px] leading-[22px] text-[#8B909A]">
              {data.email}
            </p>
          </div>
        </div>
        <div className="w-1/3 px-6 space-y-4">
          <h4 className="text-[#8B909A] font-medium text-[13px] leading-[15.28px]">
            PERSONAL INFORMATION
          </h4>
          <div className="flex gap-x-4">
            <div className="space-y-4 font-normal text-[13px] leading-[15.28px] text-[#23272E]">
              <p>Contact Number</p>
              <p>Date of Birth</p>
              <p>Member Since</p>
            </div>
            <div className="space-y-4 font-semibold text-[13px] leading-[15.28px] text-[#23272E]">
              <p>{data.contactNumber}</p>
              <p>{formatDate(data.dateOfBirth)}</p>
              <p>{formatDate(data.memberSince)}</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 px-6 space-y-4">
          <h4 className="text-[#8B909A] font-medium text-[13px] leading-[15.28px]">
            SHIPPING ADDRESS
          </h4>
          <p className="font-normal text-[13px] leading-[15.28px] text-[#23272E]">
            {data.shippingAddress}
          </p>
          <div className="pt-4 flex">
            <div className="w-1/3 space-y-2">
              <h1 className="text-[#23272E] font-bold text-[24px] leading-[22px]">
                {data.orders.total}
              </h1>
              <p className="font-medium text-[13px] leading-[18px] tracking-[-2%] text-[#8B909A]">
                Total Order
              </p>
            </div>
            <div className="w-1/3 space-y-2">
              <h1 className="text-[#23272E] font-bold text-[24px] leading-[22px]">
                {data.orders.completed}
              </h1>
              <p className="font-medium text-[13px] leading-[18px] tracking-[-2%] text-[#8B909A]">
                Completed
              </p>
            </div>
            <div className="w-1/3 space-y-2">
              <h1 className="text-[#23272E] font-bold text-[24px] leading-[22px]">
                {data.orders.canceled}
              </h1>
              <p className="font-medium text-[13px] leading-[18px] tracking-[-2%] text-[#8B909A]">
                Canceled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
