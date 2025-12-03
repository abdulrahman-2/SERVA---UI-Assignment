import {
  AudioIcon,
  CarIcon,
  UsersIcon,
  BoltIcon,
  WaypointsIcon,
  ContactIcon,
  ArrowIcon,
  DashboardIcon,
} from "@/components/icons";

const iconMap = {
  audio: AudioIcon,
  car: CarIcon,
  users: UsersIcon,
  bolt: BoltIcon,
  waypoints: WaypointsIcon,
  contact: ContactIcon,
  arrow: ArrowIcon,
  dashboard: DashboardIcon,
  logout: ArrowIcon,
};

const Icon = ({ name, className = "w-6 h-6" }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default Icon;
