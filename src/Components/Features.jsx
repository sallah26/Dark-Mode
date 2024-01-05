import React from "react";
import { FiShieldOff } from "react-icons/fi";
import { FiSlack } from "react-icons/fi";
import { FiGift } from "react-icons/fi";

const Features = () => {
  return (
    <div className="py-10 text-center dark:bg-slate-700 dark:text-slate-200">
      <p className=" text-6xl font-extrabold">Look at Our Features...</p>
      <div className="grid grid-cols-3 gap-9 w-full min-vh-100 p-4 md:px-40 md:py-10 ">
        <div className="border-2 p-2 gap-3 rounded-md border-black flex flex-col items-center justify-center hover:bg-slate-900 hover:text-slate-200 dark:border-slate-400">
          <FiShieldOff size={55} />
          <p className="text-xl font-bold">Exclusive services</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa rem
          reiciendis dicta incidunt neque rerum veritatis nisi velit accusantium
          eius, vitae odio eligendi ullam! Provident quo perspiciatis vero
          quidem! Nam?
          <button className="w-full rounded-2xl hover:bg-slate-100 text-lg text-white h-10 bg-blue-500 hover:text-slate-900">
            Sign up
          </button>
        </div>
        <div className="border-2 p-2 gap-3  rounded-md border-black hover:text-slate-200 flex flex-col items-center justify-center hover:bg-slate-900 hover:text-slate-200  dark:border-slate-400">
          <FiSlack size={55} />
          <p className="text-xl font-bold">Advanced proof</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa rem
          reiciendis dicta incidunt neque rerum veritatis nisi velit accusantium
          eius, vitae odio eligendi ullam! Provident quo perspiciatis vero
          quidem! Nam?
          <button className="w-full rounded-2xl hover:bg-slate-100 hover:text-slate-900 text-lg text-white h-10 bg-blue-500">
            Sign up
          </button>
        </div>
        <div className="border-2 p-2 gap-3  rounded-md border-black flex flex-col items-center justify-center hover:bg-slate-900 hover:text-slate-200  dark:border-slate-400">
          <FiGift size={55} />
          <p className="text-xl font-bold">Detailed process</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa rem
          reiciendis dicta incidunt neque rerum veritatis nisi velit accusantium
          eius, vitae odio eligendi ullam! Provident quo perspiciatis vero
          quidem! Nam?
          <button className="w-full rounded-2xl hover:bg-slate-100 hover:text-slate-900 text-lg text-white h-10 bg-blue-500">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
