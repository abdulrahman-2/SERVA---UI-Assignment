import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const FiscalYearSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("This Fiscal Year");

  const years = [
    "This Fiscal Year",
    "2024 - 2025",
    "2023 - 2024",
    "2022 - 2023",
    "2021 - 2022",
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center justify-between w-full gap-3 px-4 py-2 bg-white rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
      >
        <span>{selectedYear}</span>
        <MdOutlineKeyboardArrowDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 z-10 w-56 mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => {
                  setSelectedYear(year);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                  selectedYear === year
                    ? "bg-secondary"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FiscalYearSelect;
