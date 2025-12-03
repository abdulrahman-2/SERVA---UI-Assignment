import { useEffect, useState } from "react";
import LinkItem from "../common/LinkItem";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/utils/cn";
import { RiMenuFold4Line } from "react-icons/ri";
import Separator from "../common/separator";

const Sidebar = ({ links }) => {
  const [open, setOpen] = useState(true);

  const isSmallScreen = useMediaQuery("(max-width: 1024px)");
  const isLargeScreen = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    if (isSmallScreen) {
      setOpen(false);
    } else if (isLargeScreen) {
      setOpen(false);
    }
  }, [isSmallScreen, isLargeScreen]);

  return (
    <div
      className={cn(
        "relative z-50 hidden lg:block min-h-screen border-r border-border shadow-lg shadow-gray-200/20 bg-bg-dashboard text-gray-100",
        open ? "w-72 px-4" : "w-16 px-2",
        "duration-300"
      )}
    >
      <div className="sticky inset-0">
        <div className="py-3 flex justify-between items-center">
          <RiMenuFold4Line
            size={26}
            className={cn(
              "cursor-pointer text-black",
              open ? "ml-auto" : "mx-auto"
            )}
            onClick={() => setOpen(!open)}
          />
        </div>

        <Separator />

        <div className="mt-4 flex flex-col gap-1 relative">
          {links.map((link, index) => (
            <LinkItem key={link.name} link={link} i={index} open={open} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
