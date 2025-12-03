import React from "react";
import { HiPrinter } from "react-icons/hi";
import { HiDotsHorizontal } from "react-icons/hi";

export default function PrintButtonGroup() {
  return (
    <div className="flex self-end items-center gap-2">
      <button className="bg-white border border-[#E5E1D3] rounded-lg shadow-sm flex items-center gap-2 px-5.5 h-[42px] text-gray-800 font-medium hover:bg-gray-50 transition-colors">
        <HiPrinter className="w-5 h-5" />
        <span>Print</span>
      </button>

      <button className="bg-white border border-[#E5E1D3] rounded-lg shadow-sm px-3 h-[42px] hover:bg-gray-50 transition-colors">
        <HiDotsHorizontal className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
