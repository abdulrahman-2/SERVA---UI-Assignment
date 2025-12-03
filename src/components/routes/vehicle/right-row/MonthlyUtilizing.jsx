import FiscalYearSelect from "./FiscalYearSelect";

const data = [
  {
    title: "Avg. Monthly Utilizing",
    amount: "80%",
  },
];

const MonthlyUtilizing = () => {
  return (
    <div>
      <div className="mt-7.5 mb-3 flex flex-col sm:flex-row gap-0 sm:gap-3 items-center justify-between">
        <h2 className="text-[22px]">Monthly Utilizing</h2>
        <FiscalYearSelect />
      </div>

      <hr className="border-[#E3E3E380]" />
      <div className="py-[15px] px-3 items-center">
        {data.map(({ title, amount }) => (
          <div key={title} className="flex flex-col">
            <span className="text-[15px] text-title">{title}</span>
            <span>{amount}</span>
          </div>
        ))}
      </div>
      <hr className="border-[#E3E3E380]" />
    </div>
  );
};

export default MonthlyUtilizing;
