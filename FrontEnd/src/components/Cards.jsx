import React from "react";
import FreeBook from "./FreeBook";
function Cards({ item }) {
  return (
    <>
      <div className="mt-5 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl m-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">₹ {item.price}</div>
              <div className="cursor-pointer p-3 badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
