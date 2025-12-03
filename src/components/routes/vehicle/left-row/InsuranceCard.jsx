import ellipse from "@/assets/icons/ellipse.svg";

const insuranceData = {
  company: "Al Rajhi Takaful",
  product: "Insurance Card",
  policyNumber: "9876543456788767",
  expiryDate: "26 Mar. 2027",
};

const InsuranceCard = () => {
  const { company, product, policyNumber, expiryDate } = insuranceData;

  return (
    <div className="bg-secondary rounded-lg p-5">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-sm font-bold text-gray-900">{company}</h3>
          <p className="text-[22px]">{product}</p>
        </div>

        <img src={ellipse} alt="ellipse" className="rounded-full" />
      </div>

      <div className="grid grid-cols-2 gap-8 text-sm">
        <div>
          <p className="text-title text-[15px] font-medium">Policy number</p>
          <p className="tracking-wider">{policyNumber}</p>
        </div>

        <div>
          <p className="text-title text-[15px] font-medium">Expiration date</p>
          <p>{expiryDate}</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
