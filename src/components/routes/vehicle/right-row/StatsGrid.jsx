import StatsCard from "./StatsCard";
import { statsData } from "./statsCardsData";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {statsData.map((stat, index) => (
        <StatsCard
          key={index}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
          color={stat.color}
          bgColor={stat.bgColor}
          money={stat.money}
        />
      ))}
    </div>
  );
};

export default StatsGrid;
