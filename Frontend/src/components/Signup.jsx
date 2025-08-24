import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name : data.name,
      email : data.email,
      password : data.password
    }
    await axios.post("http://localhost:8000/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup successful');
        navigate(from, {replace:true})
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    })
    .catch((err) =>{
      if(err.response){
        console.log(err)
        toast.error('Error: ' + err.response.data.message);
      }
    })
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className="border-1 shadow-gray-900 shadow-2xl p-5 rounded-md ">
          <div className="flex justify-between">
            <h3 className="font-bold text-lg">Signup</h3>
            <Link
              to="/"
              className="btn-circle font-bold btn-sm btn btn-ghost"
            >
              ✕
            </Link>
          </div>

          {/* ✅ Wrap inputs and button inside form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="mt-4 space-y-2">
              <span>Name:</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-80 mx-3 my-2 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />  
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

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
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* password */}
            <div className="mt-3 space-y-2">
              <span>Password:</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 mx-3 my-2 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* button */}
            <div className="flex justify-between mt-3 ">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
              <p>
                Have account?{" "}
                <Link
                  to="/"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
