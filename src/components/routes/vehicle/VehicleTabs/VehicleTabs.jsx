import { useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";
import DesktopTabs from "./VehicleTabsDesktop";
import MobileTabs from "./VehicleTabsMobile";

const tabs = [
  { name: "Overview", id: "overview" },
  { name: "Live", id: "live" },
  { name: "Schedule", id: "schedule" },
  { name: "Rides", id: "rides" },
  { name: "Contracts", id: "contracts" },
  { name: "Transactions", id: "transactions" },
  { name: "Fuel History", id: "fuel" },
  { name: "Update Logs", id: "logs" },
];

const VehicleTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return isDesktop ? (
    <DesktopTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
  ) : (
    <MobileTabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
  );
};

export default VehicleTabs;
