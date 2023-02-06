import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import signUp from "../../Images/signUp.jpg";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    return (
        <div className="lg:grid grid-cols-2">
      <div className="my-auto">
        <img src={signUp} alt="login" />
      </div>

      <div>
        <p className="text-4xl text-green-500 text-center font-bold mt-20">
          Welcome to Your Goal...
        </p>
        <div className="flex justify-center">
          {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form className="mt-10 w-3/5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Riki Ray"
                className="input input-bordered-2 input-accent border-green-600 w-full "
              />
            </div>
            {errors.name && (
              <span className="text-red-600 font-semibold mt-2">
                Please fill up Name field
              </span>
            )}

            <div className="form-control w-full ">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="ray@gmail.com"
                className="input input-bordered-2 input-accent border-green-600 w-full "
              />
            </div>
            {errors.email && (
              <span className="text-red-600 font-semibold mt-2">
                Please fill up Email field
              </span>
            )}

            <div className="form-control w-full mt-1">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">
                  Phone
                </span>
              </label>
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder="+8801XXXXXXXXX"
                className="input input-bordered-2 input-accent border-green-600 w-full  "
              />
            </div>
            {errors.phone && (
              <span className="text-red-600 font-semibold mt-2">
                Please fill up Phone field
              </span>
            )}

            <div className="form-control w-full mt-1">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">
                  Password
                </span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered-2 input-accent border-green-600 w-full  "
              />
            </div>
            {errors.password && (
              <span className="text-red-600 font-semibold mt-2">
                Please fill up Password field
              </span>
            )}

            <div className="form-control w-full mt-1">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">
                  Confirm Password
                </span>
              </label>
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                placeholder="Enter Your Confirm Password"
                className="input input-bordered-2 input-accent border-green-600 w-full  "
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-600 font-semibold mt-2">
                Please fill up Confirm Password field
              </span>
            )}


              

            <div className="flex justify-center">
              <input className="p-3 border-2 border-green-300 rounded-lg bg-green-200 hover:bg-green-400 hover:text-white cursor-pointer text-lg font-semibold w-full mt-10 " type="submit" value="SIGN UP"/>
            </div>

            <Link to='/login' className="font-semibold">Already with Edu-Skill? <span className="text-blue-500 link">Please Login</span></Link>
            <div className="divider">OR</div>

            <div className="flex justify-center">
        
              <input className="p-3 mb-10 border-2 border-green-300 rounded-lg bg-green-200 hover:bg-green-400 hover:text-white cursor-pointer text-lg font-semibold w-full " type="submit"  value="CONTINUE WITH GOOGLE"/>
            </div>
           
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;