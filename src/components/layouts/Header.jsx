import { IoNotificationsOutline } from "react-icons/io5";
import logo from "@/assets/images/logo.svg";
import UserDropdown from "../common/User";
import Separator from "../common/separator";
import ToggleMenu from "./ToggleMenu";
import { menu } from "@/constant";

const Header = () => {
  return (
    <header className="z-10 flex h-[60px] items-center justify-between bg-white dark:bg-black px-4 transition-colors border-b border-border">
      <div className="flex items-center gap-4">
        <ToggleMenu links={menu} />
        <img src={logo} alt="logo" className="w-20 sm:w-auto" />
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        <button className="relative btn-ghost size-10 flex items-center justify-center">
          <IoNotificationsOutline size={20} />

          <span className="absolute top-2 right-3 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-black"></span>
        </button>

        <Separator vertical />

        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
