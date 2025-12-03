import vehicle from "@/assets/images/vehicle.svg";
import InsuranceCard from "./InsuranceCard";
import RegistrationCard from "./RegistrationCard";
import OwnershipCard from "./OwnershipCard";
import VehicleDetailsCard from "./VehicleDetailsCard";

const VehicleDetails = () => {
  return (
    <div className="flex flex-col gap-5.5">
      <div className="py-4 px-5">
        <img src={vehicle} alt="vehicle" className="w-full object-contain" />
      </div>

      <VehicleDetailsCard />
      <InsuranceCard />
      <RegistrationCard />
      <OwnershipCard />
    </div>
  );
};

export default VehicleDetails;
