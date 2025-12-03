import { useRef, useState } from "react";
import { VscListFilter } from "react-icons/vsc";
import { useClickOutside } from "@/hooks/use-click-outside";

const VehicleTabsMobile = ({ tabs, activeTab, onChange }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  useClickOutside([containerRef, buttonRef], () => setOpenDropdown(false));

  return (
    <div
      ref={containerRef}
      className="relative bg-secondary my-4 rounded-lg px-3 py-2 sm:w-80"
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpenDropdown((prev) => !prev)}
        className="flex w-full items-center justify-between text-black"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            <VscListFilter className="w-4 h-4" />
          </span>
          <span className="text-base">{currentTab?.name}</span>
        </span>

        <span
          className={`text-xl text-gray-500 transition-transform ${
            openDropdown ? "rotate-90" : ""
          }`}
        >
          ❯
        </span>
      </button>

      {openDropdown && (
        <div className="absolute top-full mt-2 left-0 w-full rounded-lg bg-white shadow-lg overflow-hidden z-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onChange(tab.id);
                setOpenDropdown(false);
              }}
              className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-secondary font-semibold text-black"
                  : "text-gray-600 hover:bg-secondary"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleTabsMobile;
