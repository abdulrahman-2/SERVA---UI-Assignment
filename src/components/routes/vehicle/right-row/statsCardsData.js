import banknote from "@/assets/icons/banknote.svg";
import banknoteUp from "@/assets/icons/banknote-up.svg";
import fileCheck from "@/assets/icons/file-check.svg";
import map from "@/assets/icons/map.svg";

export const statsData = [
  {
    icon: banknote,
    label: "Total Income",
    value: "202,230",
    color: "text-black",
    bgColor: "bg-secondary",
    money: true,
  },
  {
    icon: banknoteUp,
    label: "Total Expense",
    value: "202,230",
    color: "text-black",
    bgColor: "bg-secondary",
    money: true,
  },
  {
    icon: fileCheck,
    label: "Total Contracts",
    value: "2,230",
    color: "text-black",
    bgColor: "bg-secondary",
    money: false,
  },
  {
    icon: map,
    label: "Total Rides",
    value: "2,230",
    color: "text-black",
    bgColor: "bg-secondary",
    money: false,
  },
];
