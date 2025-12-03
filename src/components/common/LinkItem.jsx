import { cn } from "@/utils/cn";
import { Link, useLocation } from "react-router-dom";

const LinkItem = ({ link, i, open }) => {
  const location = useLocation();
  const isActive = location.pathname === link?.link;

  return (
    <Link
      to={link?.link}
      key={i}
      className={cn(
        "relative z-50 group flex items-center text-sm gap-3.5 font-medium p-2 rounded-[8px]",
        link?.margin && "mt-5",
        isActive
          ? "bg-primary text-white"
          : "text-primary hover:bg-primary/10 duration-300"
      )}
    >
      <div className={cn("text-2xl", !open && "m-1")}>{link?.icon}</div>

      <h2
        style={{ transitionDelay: `${i + 3}00ms` }}
        className={cn(
          "text-lg whitespace-pre duration-500",
          !open && "opacity-0 translate-x-28 overflow-hidden"
        )}
      >
        {link?.name}
      </h2>

      <h2
        className={cn(
          "absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit",
          open && "hidden"
        )}
      >
        {link?.name}
      </h2>
    </Link>
  );
};

export default LinkItem;
