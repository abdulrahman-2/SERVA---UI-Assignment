import { toggleSidebar } from "@/store/slices/toggleMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import LinkItem from "../common/LinkItem";
import { useEffect, useRef } from "react";
import { useClickOutside } from "@/hooks/use-click-outside";
import logo from "@/assets/images/logo.svg";
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";

const ToggleMenu = ({ links }) => {
  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleClickOutside = () => {
    if (isOpen) {
      dispatch(toggleSidebar());
    }
  };

  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  useClickOutside([sidebarRef, menuButtonRef], handleClickOutside);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <div className="lg:hidden">
      <div ref={menuButtonRef}>
        <RiMenu2Fill
          onClick={() => dispatch(toggleSidebar())}
          className="cursor-pointer"
          size={24}
        />
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 z-50 left-0 w-72 bg-white px-4 min-h-screen transition-all duration-300 
          ${
            isOpen
              ? "translate-x-0 opacity-100 visible"
              : "-translate-x-full opacity-0 invisible"
          }
        `}
      >
        {/* Close Button */}
        <div className="py-3 flex justify-between items-center">
          <img
            src={logo}
            alt="logo"
            className="w-20"
          />
          <RiMenu3Fill
            size={24}
            className="cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          />
        </div>

        {/* Sidebar Menu Items */}
        <div className="mt-4 flex flex-col gap-5 relative">
          {links.map((link, i) => (
            <LinkItem key={link.name} link={link} i={i} open={isOpen} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
