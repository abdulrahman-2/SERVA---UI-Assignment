import React from "react";
import PrintButtonGroup from "../common/PrintButtonGroup";
import Breadcrumb from "../common/Breadcrumb";
import TrackingCard from "../common/TrackingCard";
import { IoIosArrowBack } from "react-icons/io";

const PageHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-3">
          <button
            className="shrink-0 w-13 h-13 rounded-full border border-[#CAC8C280] hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Go back"
          >
            <IoIosArrowBack className="w-6 h-6 text-gray-600" />
          </button>
          <Breadcrumb />
        </div>

        <PrintButtonGroup />
      </div>

      <div className="pl-0 md:pl-[60px]">
        <TrackingCard />
      </div>
    </div>
  );
};



export default PageHeader;
