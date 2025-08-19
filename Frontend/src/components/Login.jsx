import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="">
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}>
                ✕
              </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email:</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 mx-3 my-2 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* password */}
            <div className="mt-3 space-y-2">
              <span>Password:</span> 
              <br />
              <input
                type="password"
                placeholder="Enter Your Email"
                className="w-80 mx-3 my-2 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
                />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            {/* button */}
            <div className="flex justify-between mt-3 ">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Sign up
                </Link>
              </p>{" "}
            </div>
                  </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
