import React from "react";
import logo from "../assets/logo.png";
import indentDecrease from "../assets/indent-decrease.png";

const Sidebar = () => {
  return (
    <section className="h-full flex flex-col bg-white overflow-y-auto">
      <div className="flex items-center py-[20px] pr-[14px] pl-[18px] gap-x-[10px] ">
        <img className="w-[28px] h-[24px] hover:cursor-pointer" src={logo} alt="Logo"/>
        <h2 className="font-bold text-[22px] leading-[24px] text-[#23272E] hover:cursor-pointer">JoBins</h2>
        <img className="w-[24px] h-[24px] ml-auto hover:cursor-pointer" src={indentDecrease} alt="Collapse"/>
      </div>
    </section>
  );
};

export default Sidebar;
