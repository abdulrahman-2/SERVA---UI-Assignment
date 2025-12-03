"use client";

import { IoIosArrowBack } from "react-icons/io";

const defaultBreadcrumbs = ["Vehicles", "Vehicle Details"];
const defaultTitle = "Chevrolet Tahoe 2025";
const defaultStatus = "Available";

const Breadcrumb = ({
  breadcrumbs = defaultBreadcrumbs,
  title = defaultTitle,
  status = defaultStatus,
  statusColor = "green",
  // onBack,
}) => {
  const statusColors = {
    green: "bg-green-500 text-white",
    yellow: "bg-yellow-500 text-white",
    red: "bg-red-500 text-white",
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex flex-col">
        <nav className="text-sm text-title">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-1">/</span>}
              <span
                className={
                  index === breadcrumbs.length - 1 ? "text-gray-900" : ""
                }
              >
                {crumb}
              </span>
            </span>
          ))}
          <span className="mx-1">/</span>
          <span className="text-gray-900">{title}</span>
        </nav>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <h1 className="text-2xl sm:text-[32px] font-normal text-gray-900 tracking-normal">
            {title}
          </h1>
          <span
            className={`w-[120px] text-center px-4 py-2 rounded-[5px] text-sm font-normal ${statusColors[statusColor]}`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
