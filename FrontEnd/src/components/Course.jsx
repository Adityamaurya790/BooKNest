import React from "react";
import Cards from "./Cards";
import Courses from "../Courses/courses";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 item-center justify-center text-center  dark:bg-slate-900 dark:text-white">
          <h1 className="text-4xl   md:text-4xl">
            {" "}
            We'r Delighted To Have You
            <span className="text-pink-500"> Here! :)</span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut
            commodi dolores aliquam veritatis nihil nobis est? Quam recusandae
            deserunt quia impedit maiores laborum voluptatum aspernatur vitae
            praesentium. Dicta totam, recusandae ex cum magni non libero
            impedit? Excepturi ex consectetur sint rem in beatae alias assumenda
            itaque quia molestias! Repellat!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
