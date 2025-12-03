import driver from "@/assets/images/Driver.svg";

const TrackingCard = ({
  chassisNumber = "JTMBFREV4JJ752103",
  plateNumberArabic = "٥١٠٠",
  plateNumberArabicCurrency = "ح ر س",
  plateNumber = "5100",
  plateNumberCurrency = "S R J",
  driverName = "Abdallah Bin Nasser",
  driverPhone = "+966 56 896 6230",
  driverImage = driver,
  authorizedTo = "-",
  hasTrackingDevice = "-",
}) => {
  return (
    <div className="flex justify-start md:justify-between flex-wrap gap-5">
      <CardLayout title="Chassis Number">
        <span>{chassisNumber}</span>
      </CardLayout>

      <CardLayout title="Plate Number">
        <div className="px-1 border-2 border-black rounded-md w-[138px] font-semibold">
          <div className="flex items-center justify-between leading-[19px]">
            <span>{plateNumberArabic}</span>
            <span>{plateNumberArabicCurrency}</span>
          </div>
          <div className="flex items-center justify-between leading-[19px]">
            <span className="font-normal">{plateNumber}</span>
            <span className="font-normal">{plateNumberCurrency}</span>
          </div>
        </div>
      </CardLayout>

      <CardLayout title="Driver Assigned">
        <div className="flex items-center gap-2">
          <img src={driverImage} alt={driverName} className="w-9.5 h-9.5" />
          <div className="flex flex-col">
            <span>{driverName}</span>
            <span className="text-title">{driverPhone}</span>
          </div>
        </div>
      </CardLayout>

      <CardLayout title="Authorized To">
        <span>{authorizedTo}</span>
      </CardLayout>

      <CardLayout title="Tracking Device">
        <span>{hasTrackingDevice}</span>
      </CardLayout>
    </div>
  );
};

export default TrackingCard;

const CardLayout = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      <span className="text-title text-[15px]">{title}</span>
      {children}
    </div>
  );
};
