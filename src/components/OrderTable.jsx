/* eslint-disable react/prop-types */
import { formatDate } from "../lib/date";

const OrderTable = ({ filteredOrders }) => {
  return (
    <table className="min-w-full rounded-tr-2xl rounded-tl-2xl overflow-hidden border-b-2 border-[#E9E7FD]">
      <thead>
        <tr className="bg-white border-b border-[#E9E7FD] text-xs leading-4 text-[#8B909A] uppercase tracking-wider">
          <th className="px-8 py-4 text-left font-medium text-[13px] leading-[15.28px]">
            ID
          </th>
          <th className="px-6 py-4 text-left font-medium text-[13px] leading-[15.28px]">
            CUSTOMER
          </th>
          <th className="px-6 py-4 text-left font-medium text-[13px] leading-[15.28px]">
            DATE
          </th>
          <th className="px-6 py-4 text-left font-medium text-[13px] leading-[15.28px]">
            TOTAL
          </th>
          <th className="px-6 py-4 text-left font-medium text-[13px] leading-[15.28px]">
            METHOD
          </th>
          <th className="px-6 py-4 text-left font-medium text-[13px] leading-[15.28px]">
            STATUS
          </th>
          <th className="px-6 py-4 text-left font-medium text-[13px] leading-[15.28px]">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-[#E9E7FD]">
        {filteredOrders.map((order, index) => (
          <tr key={index}>
            <td className="px-8 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
              {order.id}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap font-normal text-[15px] leading-[22px] text-[#23272E]">
              {order.customer}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap font-normal text-[15px] leading-[22px] text-[#23272E]">
              {formatDate(order.date)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap font-normal text-[15px] leading-[22px] text-[#23272E]">
              ${order.total.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap font-normal text-[15px] leading-[22px] text-[#23272E]">
              {order.method}
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
              <span className="px-2 inline-flex text-[15px] leading-[14px] font-semibold rounded-full text-[#FFC600]">
                {order.status}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap font-normal text-[15px] leading-[22px] text-[#0F60FF]">
              <a href="#">View Details</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
