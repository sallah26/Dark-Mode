import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-100 min-h-fit bg-slate-200 p-4 md:p-14 md:pb-20 dark:bg-slate-900 dark:text-slate-100">
      <Navbar />
      <div className="grid lg:grid-col-2 mt-3 md:m-7 md:mt-10"></div>
      <p className="text-7xl font-bold text-center md:mx-5">
        Embark melodic and also web dev tools from us own!
      </p>
      <p className="text-center md:px-44 md:mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        explicabo cum expedita reiciendis ad. Consequuntur deserunt id earum
        laboriosam qui velit repellendus sequi!
      </p>
    </div>
  );
};

export default Home;
