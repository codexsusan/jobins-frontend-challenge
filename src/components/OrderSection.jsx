import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import OrderTable from "./OrderTable";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const tabs = ["All Orders", "Completed", "Canceled"];
const OrderSection = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:3001/recentOrders?_page=${currentPage}&_limit=${itemsPerPage}`;
        let ordersMetadataUrl = `http://localhost:3001/ordersMetadata`;

        if (activeTab !== "All Orders") {
          url += `&status=${activeTab}`;
        }
        if (statusFilter !== "All") {
          url += `&status=${statusFilter}`;
        }

        const response = await fetch(url);
        const metadataResponse = await fetch(ordersMetadataUrl);
        if (!response.ok || !metadataResponse.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const metadata = await metadataResponse.json();
        setOrders(data);
        setTotalItems(metadata.total);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [activeTab, statusFilter, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <div className="pl-8 h-[54px] bg-white rounded-bl-[16px] rounded-br-[16px] ">
        <nav className="-mb-px flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={cn(
                "py-4 px-6 text-[15px] font-normal leading-[22px]",
                activeTab === tab
                  ? "border-b-2 border-[#0F60FF] text-[#0F60FF]"
                  : "text-[#8B909A] hover:text-gray-500 hover:border-gray-300"
              )}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="pt-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-x-[14px]">
            <div className="relative">
              <select
                className="appearance-none bg-white shadow-[0_4px_16px_0px_rgba(0,0,0,0.1)] rounded-md py-2.5 pl-4 pr-10 font-medium text-[15px] leading-[17.63px] tracking-[0.43px] text-[#8B909A] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="All">Status: All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Canceled">Canceled</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-[#8B909A]">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="relative shadow-[0_4px_16px_0px_rgba(0,0,0,0.1)]">
              <input
                type="text"
                placeholder="Search..."
                className="appearance-none bg-white rounded-md py-2 pr-10 pl-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-normal placeholder:text-[15px] leading-[21px] placeholder:text-[#8B909A]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.87495 1.5C6.85839 1.50009 5.85659 1.74327 4.95314 2.20927C4.04968 2.67527 3.27077 3.35056 2.68137 4.17882C2.09198 5.00707 1.7092 5.96426 1.56498 6.97053C1.42075 7.97681 1.51926 9.00298 1.85228 9.96344C2.1853 10.9239 2.74318 11.7908 3.47937 12.4918C4.21557 13.1928 5.10872 13.7076 6.08433 13.9932C7.05994 14.2788 8.0897 14.327 9.08771 14.1337C10.0857 13.9404 11.023 13.5112 11.8214 12.882L14.5604 15.621C14.7019 15.7576 14.8913 15.8332 15.088 15.8315C15.2846 15.8298 15.4728 15.7509 15.6118 15.6119C15.7509 15.4728 15.8297 15.2847 15.8315 15.0881C15.8332 14.8914 15.7576 14.702 15.6209 14.5605L12.8819 11.8215C13.6229 10.8815 14.0843 9.7518 14.2133 8.56179C14.3422 7.37179 14.1335 6.16952 13.6111 5.09257C13.0887 4.01562 12.2736 3.10752 11.2592 2.47217C10.2447 1.83683 9.07192 1.49992 7.87495 1.5ZM2.99995 7.875C2.99995 6.58207 3.51356 5.34209 4.4278 4.42785C5.34204 3.51361 6.58202 3 7.87495 3C9.16788 3 10.4079 3.51361 11.3221 4.42785C12.2363 5.34209 12.7499 6.58207 12.7499 7.875C12.7499 9.16793 12.2363 10.4079 11.3221 11.3221C10.4079 12.2364 9.16788 12.75 7.87495 12.75C6.58202 12.75 5.34204 12.2364 4.4278 11.3221C3.51356 10.4079 2.99995 9.16793 2.99995 7.875Z"
                    fill="#8B909A"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative text-[#8B909A]">
            <select className="appearance-none shadow-[0_4px_16px_0px_rgba(0,0,0,0.1)] bg-white rounded-md py-3 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-medium text-[15px] leading-[17.63px] tracking-[0.43px]">
              <option className="">Filter by date range</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-0.5">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#8B909A"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <OrderTable filteredOrders={filteredOrders} />
        <div className="flex items-center justify-between p-4 bg-white rounded-bl-2xl rounded-br-2xl">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Showing</span>
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="appearance-none bg-white border border-gray-300 rounded-md py-1 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            <span>of {totalItems}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1 rounded-md text-gray-600 disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-md text-sm",
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1 rounded-md text-gray-600 disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
