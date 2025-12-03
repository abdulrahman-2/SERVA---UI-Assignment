"use client";

import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import userAvatar from "@/assets/images/user.svg";

const UserDropdown = ({
  user = {
    name: "Khaled M.",
    description: "DSRent Car Rental",
    avatar: userAvatar,
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg hover pl-2 md:px-3 py-2 cursor-pointer"
      >
        {user?.avatar && (
          <div className="w-8 md:w-11 h-8 md:h-11 rounded-full bg-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={user?.avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="hidden md:flex flex-col items-start text-left">
          <span className="font-semibold text-gray-900">{user?.name}</span>
          <span className="text-sm text-gray-600">{user?.description}</span>
        </div>

        <MdOutlineKeyboardArrowDown
          className="hidden md:block w-4 h-4 text-gray-600 ml-2 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="bg-opacity-30 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                {user?.avatar && (
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={user?.avatar}
                      alt="avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">Khaled M.</p>
                  <p className="text-sm text-gray-600">DSRent Car Rental</p>
                </div>
              </div>
            </div>

            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
              <hr className="my-2 border-gray-200" />
              <a
                href="#"
                className="block px-4 py-2.5 text-red-600 hover:bg-red-50"
              >
                Sign out
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserDropdown;
