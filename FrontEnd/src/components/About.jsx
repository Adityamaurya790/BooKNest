import React from "react";
import Navbar from "./Navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-20 justify-center ml-50 ">
        <div className="dark:bg-slate-900 dark:text-white h-full">
          <h1 className="text-2xl font-bold mt-20 dark:text-white">About Us</h1>
          <p className="text-gray-700 p-10 ">
            We are a team of passionate developers who love building web
            applications using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
