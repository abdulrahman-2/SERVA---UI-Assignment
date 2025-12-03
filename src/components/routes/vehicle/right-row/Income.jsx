import FiscalYearSelect from "./FiscalYearSelect";
import saudiRiyal from "@/assets/icons/saudi-riyal.svg";

const data = [
  {
    title: "Avg. Monthly Revenue",
    amount: "91,275.00",
  },
  {
    title: "Avg. Monthly Expencses",
    amount: "9,275.00",
  },
];

const Income = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-3 items-start md:items-center justify-between">
        <h2 className="text-[22px]">Income and Expense</h2>
        <FiscalYearSelect />
      </div>

      <hr className="border-[#E3E3E380]" />
      <div className="py-[15px] md:px-3 flex items-center gap-5 md:gap-20">
        {data.map(({ title, amount }) => (
          <div key={title} className="flex flex-col">
            <span className="text-[15px] text-title">{title}</span>
            <div className="flex items-center gap-1.5">
              <img src={saudiRiyal} alt="saudi-riyal" className="w-3.5 h-3.5" />
              <span>{amount}</span>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-[#E3E3E380]" />
    </div>
  );
};

export default Income;
