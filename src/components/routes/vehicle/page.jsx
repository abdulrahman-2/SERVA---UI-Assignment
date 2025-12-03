import VehicleDetails from "./left-row/VehicleDetails";
import StatsGrid from "./right-row/StatsGrid";
import Income from "./right-row/Income";
import MonthlyUtilizing from "./right-row/MonthlyUtilizing";
import SalesChart from "./right-row/SalesChart";
import VehicleTabs from "./VehicleTabs/VehicleTabs";

const Vehicle = () => {
  return (
    <div>
      <VehicleTabs />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-9">
        {/* Left column */}
        <div className="lg:col-span-4">
          <VehicleDetails />
        </div>

        {/* Right column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <StatsGrid />
          <Income />
          <SalesChart />
          <MonthlyUtilizing />
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
