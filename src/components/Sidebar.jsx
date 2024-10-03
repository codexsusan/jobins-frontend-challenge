/* eslint-disable react/prop-types */
import { useState } from "react";
import logo from "../assets/logo.png";
import indentDecrease from "../assets/indent-decrease.png";
import indentIncrease from "../assets/indent-increase.png";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const DashboardIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4167 7.98416L12.5281 4.18183C11.6456 3.49522 10.4095 3.49522 9.52696 4.18183L4.63746 7.98416C4.042 8.44723 3.69386 9.15941 3.69421 9.91374V16.5137C3.69421 17.5263 4.51503 18.3471 5.52755 18.3471H16.5275C17.5401 18.3471 18.3609 17.5263 18.3609 16.5137V9.91374C18.3609 9.15933 18.0125 8.44708 17.4167 7.98416"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6666 13.7499C12.6408 14.9718 9.35731 14.9718 7.33331 13.7499"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const OrderManagementIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="5.50033"
        cy="17.4154"
        rx="1.83333"
        ry="1.83333"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="5.50033"
        cy="17.4154"
        rx="1.83333"
        ry="1.83333"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="15.5833"
        cy="17.4154"
        rx="1.83333"
        ry="1.83333"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="15.5833"
        cy="17.4154"
        rx="1.83333"
        ry="1.83333"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5837 15.5833H5.50033V2.75H3.66699"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5837 15.5833H5.50033V2.75H3.66699"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 4.58203L18.3333 5.4987L17.4167 11.9154H5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 4.58203L18.3333 5.4987L17.4167 11.9154H5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const BrandIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0001 16.2716L5.34243 19.2462L6.42318 12.9459L1.83984 8.48452L8.16484 7.56785L10.9937 1.83594L13.8225 7.56785L20.1475 8.48452L15.5642 12.9459L16.6449 19.2462L11.0001 16.2716Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0001 16.2716L5.34243 19.2462L6.42318 12.9459L1.83984 8.48452L8.16484 7.56785L10.9937 1.83594L13.8225 7.56785L20.1475 8.48452L15.5642 12.9459L16.6449 19.2462L11.0001 16.2716Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const AddProductsIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="11"
        cy="11"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 11.0013H13.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 11.0013H13.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0003 8.25V13.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0003 8.25V13.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ProductListIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0003 2.75L18.3337 6.875V15.125L11.0003 19.25L3.66699 15.125V6.875L11.0003 2.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0003 2.75L18.3337 6.875V15.125L11.0003 19.25L3.66699 15.125V6.875L11.0003 2.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L18.3333 6.875"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11L18.3333 6.875"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0003 11V19.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0003 11V19.25"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0003 11L3.66699 6.875"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0003 11L3.66699 6.875"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", Icon: DashboardIcon, href: "/" },
    {
      name: "Order Management",
      Icon: OrderManagementIcon,
      href: "/order-management",
    },
    { name: "Brand", Icon: BrandIcon, href: "/brand" },
  ];

  const productItems = [
    { name: "Add Products", Icon: AddProductsIcon, href: "/add-product" },
    { name: "Product List", Icon: ProductListIcon, href: "/product-list" },
  ];

  return (
    <div className="relative h-full">
      <div
        className={`flex items-center py-[20px] ${
          isExpanded ? "pr-[14px] pl-[18px]" : "justify-center"
        } gap-x-[10px]`}
      >
        <img
          className="w-[28px] h-[24px] hover:cursor-pointer"
          src={logo}
          alt="Logo"
        />
        {isExpanded && (
          <h2 className="font-bold text-[22px] leading-[24px] text-[#23272E] hover:cursor-pointer">
            JoBins
          </h2>
        )}
        {isExpanded && (
          <img
            className="w-[24px] h-[24px] ml-auto hover:cursor-pointer"
            src={indentDecrease}
            alt="Collapse"
            onClick={toggleSidebar}
          />
        )}
      </div>
      <div className="flex flex-col flex-grow">
        <div
          className={`px-[18px] py-[15px] ${
            !isExpanded && "flex flex-col items-center"
          }`}
        >
          {isExpanded && (
            <span className="text-[11px] leading-[14px] font-normal text-[#8B909A]">
              MAIN MENU
            </span>
          )}
          <nav
            className={`mt-2 space-y-1 ${
              !isExpanded && "flex flex-col items-center"
            }`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-2 py-2 text-[15px] leading-[22px] rounded-md",
                  activeItem === item.name
                    ? "bg-[#F3F4F8] text-[#23272E] font-semibold"
                    : "text-[#8B909A] hover:bg-gray-50 hover:text-[#23272E] font-normal",
                  !isExpanded && "justify-center w-12 h-12"
                )}
                onClick={() => setActiveItem(item.name)}
              >
                <item.Icon
                  className={cn(
                    "h-[22px] w-[22px]",
                    activeItem === item.name
                      ? "text-[#23272E]"
                      : "text-[#8B909A] group-hover:text-[#23272E]",
                    isExpanded && "mr-2"
                  )}
                />
                {isExpanded && <p>{item.name}</p>}
              </Link>
            ))}
          </nav>
        </div>
        <div
          className={`px-[18px] py-[15px] ${
            !isExpanded && "flex flex-col items-center"
          }`}
        >
          {isExpanded && (
            <span className="text-[11px] leading-[14px] font-normal text-[#8B909A]">
              PRODUCTS
            </span>
          )}
          <nav
            className={`mt-2 space-y-1 ${
              !isExpanded && "flex flex-col items-center"
            }`}
          >
            {productItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-2 py-2 text-[15px] leading-[22px] rounded-md",
                  activeItem === item.name
                    ? "bg-[#F3F4F8] text-[#23272E] font-semibold"
                    : "text-[#8B909A] hover:bg-gray-50 hover:text-[#23272E] font-normal",
                  !isExpanded && "justify-center w-12 h-12"
                )}
                onClick={() => setActiveItem(item.name)}
              >
                <item.Icon
                  className={cn(
                    "h-5 w-5",
                    activeItem === item.name
                      ? "text-[#23272E]"
                      : "text-[#8B909A] group-hover:text-[#23272E]",
                    isExpanded && "mr-2"
                  )}
                />
                {isExpanded && item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      {!isExpanded && (
        <button
          onClick={toggleSidebar}
          className="absolute -right-4 top-4 bg-white border border-gray-200 rounded-full p-1 shadow-md"
          aria-label="Expand sidebar"
        >
          <img className="w-6 h-6" src={indentIncrease} alt="Expand" />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
