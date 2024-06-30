import React from "react";
import avatar from "../Assets/avatar.png";
import { menuItems } from "../utils/menuItems";
import { signout } from "../utils/Icons";

const Navigation = ({ active, setActive }) => {
  return (
    <>
      <div className="flex items-center p-4">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">Mike</h2>
          <p className="text-gray-500">Your Money</p>
        </div>
      </div>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center p-2 cursor-pointer ${
              active === item.id ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            {item.icon}
            <span className="ml-2">{item.title}</span>
          </li>
        ))}
      </ul>

      <ul className="mt-2 ">
        <li
          onClick={() => setActive("signout")}
          className="flex items-center p-2 cursor-pointer hover:bg-gray-700"
        >
          {signout} <span className="ml-2">Sign Out</span>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
