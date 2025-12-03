const vehicleDetails = [
  { label: "Chassis Number", value: "JTMBFREV4JJ752103" },
  { label: "Plate Number", value: "5100 SRJ" },
  { label: "Brand", value: "Chevrolet" },
  { label: "Model", value: "Tahoe" },
  { label: "Year", value: "2025" },
  { label: "Color", value: "Black" },
];

const VehicleDetailsCard = () => {
  return (
    <div>
      <h2 className="text-[22px] mb-3">Vehicle Details</h2>

      {vehicleDetails.map(({ label, value }) => (
        <div key={label}>
          <div className="grid grid-cols-2 gap-3.5 py-3">
            <span className="text-sm text-title">{label}</span>
            <span className="text-sm text-title text-right">{value}</span>
          </div>
          <hr className="border-[#E3E3E380]" />
        </div>
      ))}
    </div>
  );
};

export default VehicleDetailsCard;
