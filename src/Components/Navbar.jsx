import React from "react";
import logo from "../logo.svg";
import Switcher from "./Switcher";
import { FiCoffee } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="m-2 md:m-10 flex justify-between items-center  dark:text-slate-100">
      <div>
        <FiCoffee size={54} />
        {/* <img src={logo} width={170} alt="logo" className="w-20" /> */}
      </div>
      <div className="hidden lg:flex">
        <ul className="gap-5 text-xl flex">
          <li className="hover:-translate-y-1 hover:text-slate-600">Home</li>
          <li className="hover:-translate-y-1 hover:text-slate-600">Users</li>
          <li className="hover:-translate-y-1 hover:text-slate-600">Admins</li>
          <li className="hover:-translate-y-1 hover:text-slate-600">
            Bordered
          </li>
          <li className="hover:-translate-y-1 hover:text-slate-600">About</li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Switcher />
        <button className="w-32 rounded-full text-lg text-white h-10 bg-blue-500">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
