import saudiRiyal from "@/assets/icons/saudi-riyal.svg";

const StatsCard = ({ icon: Icon, label, value, color, bgColor, money }) => {
  return (
    <div
      className={`${bgColor} flex flex-col gap-4 md:gap-12 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className={`p-4 rounded-full bg-white backdrop-blur w-fit`}>
        <img src={Icon} alt="icon" className={`${color}`} />
      </div>

      <div>
        <p className="text-[13px]">{label}</p>
        <div className="flex items-center gap-1.5">
          {money && <img src={saudiRiyal} alt="saudi riyal" />}
          <p className={`text-[28px] ${color}`}>{value.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
