import file from "@/assets/icons/file.svg";

const registrationData = [
  { label: "Registration Number", value: "9876543209876543", icon: false },
  { label: "Expriy Date", value: "26 Mar. 2026", icon: false },
  { label: "File", value: "98766dydg.jpg", icon: true },
];

const RegistrationCard = () => {
  return (
    <div>
      <h2 className="text-[22px] mb-3">Registration / Istimarah</h2>
      {registrationData.map(({ label, value, icon }) => (
        <div key={label}>
          <div className="grid grid-cols-2 gap-3.5 py-3">
            <span className="text-sm text-title">{label}</span>
            {icon ? (
              <div className="flex items-center justify-end gap-2">
                <div className="flex flex-col text-right">
                  <span>{value}</span>
                  <span className="underline">view</span>
                </div>
                <div className="flex items-center justify-center p-[7px] bg-[#F4F4F4] rounded">
                  <img src={file} alt="file icon" className="w-6 h-6" />
                </div>
              </div>
            ) : (
              <span className="text-sm text-title text-right">{value}</span>
            )}
          </div>
          <hr className="border-[#E3E3E380]" />
        </div>
      ))}
    </div>
  );
};

export default RegistrationCard;
