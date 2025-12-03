const StatsCard = ({ icon: Icon, label, value, color, bgColor }) => {
  return (
    <div
      className={`${bgColor} flex flex-col gap-12 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className={`p-4 rounded-full bg-white backdrop-blur w-fit`}>
        <img src={Icon} alt="icon" className={`${color}`} />
      </div>

        <div>
          <p className="text-[13px]">{label}</p>
          <p className={`text-[28px] ${color}`}>
            {value.toLocaleString()}
          </p>
        </div>
    </div>
  );
};

export default StatsCard;
