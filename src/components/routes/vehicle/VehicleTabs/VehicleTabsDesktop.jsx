const VehicleTabsDesktop = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="bg-secondary my-4 rounded-lg">
      <nav className="flex gap-1.5 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              relative py-[13px] px-4 w-32 cursor-pointer
              whitespace-nowrap transition-all duration-200
              ${
                activeTab === tab.id
                  ? "font-semibold"
                  : "text-[#21272A] hover:text-gray-900"
              }
            `}
          >
            {tab.name}

            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default VehicleTabsDesktop;
