import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit, // Destructure handleSubmit from useForm
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here, for example, you can log the form data
    console.log(data);
  };

  return (
    <div className="flex my-20 item-center justify-center  ">
      <div className="">
        <div className=" modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Sign Up!</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 py-1 border rounded outline-none"
                {...register("name", { required: true })}
              /><br/>
              {errors.name && <span className="text-md text-red-500">
                This field is required</span>}
              {/* email ke lia */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-1 border rounded outline-none"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-md text-red-500">
                  This field is required</span>}

              </div>
              {/* password ke lia */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-80 px-3 py-1 border rounded outline-none"
                  {...register("password", { required: true })}
                />
                <br/>
                  {errors.password && <span className="text-md text-red-500">
                    This field is required</span>}
              </div>
              {/* button ke lia */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Sign Up
                </button>

                <p className="text-s ">
                  Have Account
                  <button
                    to="/"
                    className="underline text-blue-500 cursor-pointer text-md"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
