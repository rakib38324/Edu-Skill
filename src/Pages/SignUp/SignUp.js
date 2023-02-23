import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Contexts/AuthProvider';
import signUp from "../../Images/signUp.jpg";
import SmallLoading from '../../Loading/SmallLoading';

const SignUp = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit,formState: { errors }, } = useForm();

      const {createUser,signUpWitGoogle,loading, setLoading } = useContext(AuthContext);


      const onSubmit = (data,error) =>{
         console.log(data)
         setLoading(true)
       
        createUser(data.email, data.password)
        .then(result =>{
          const user = result.user;
         
          setLoading(false)
          navigate(from, {replace: true})
          toast.success("Sign Up Successfully");
          console.log(user)
        })
        
        .then(error => console.log("Error: ", error))
      };


      const handleSignUpWithGoogle = () =>{
        signUpWitGoogle()
        .then(result=>{
          setLoading(false)
          navigate(from, { replace: true });
          toast.success("Sign Up Successfully");
          console.log(result.user)
        })
        .catch(error => {
          setLoading(false)
          console.log(error)
      })
      }

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
              <span className="text-red-600  mt-2">
                Please fill up Name field
              </span>
            )}

            <div className="form-control w-full ">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">Email</span>
              </label>
              <input
                {...register("email", { required: "Email Address is required" })}
                type="email"
                placeholder="ray@gmail.com"
                className="input input-bordered-2 input-accent border-green-600 w-full "
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}

            <div className="form-control w-full mt-1">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">
                  Phone
                </span>
              </label>
              <input
                {...register("phone", { required: "Phone number is required",
                  minLength:{ value:11, message:"Phone number minimum 11 characters or longer"}}
                  )}
                type="number"
                placeholder="+8801XXXXXXXXX"
                className="input input-bordered-2 input-accent border-green-600 w-full  "
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.phone?.message}</p>
            )}

            <div className="form-control w-full mt-1">
              <label className="label">
                <span className=" text-xl text-green-700 font-bold">
                  Password
                </span>
              </label>
              <input
              type="password"
              placeholder="Enter a strong password"
                className="input input-bordered-2 input-accent border-green-600 w-full  "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              
            />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}

            


              

            <div className="flex justify-center">

              <button className="p-3 border-2 border-green-300 rounded-lg bg-green-400 hover:bg-green-600 hover:text-white cursor-pointer text-lg font-semibold w-full mt-10 ">{loading ? <SmallLoading></SmallLoading> : "SIGN UP"}</button>

              
            </div>

            <Link to='/login' className="font-semibold">Already with Edu-Skill? <span className="text-blue-500 link">Please Login</span></Link>
            <div className="divider">OR</div>

            <div className="flex justify-center">
        
              <input onClick={handleSignUpWithGoogle} className="p-3 mb-10 border-2 border-green-300 rounded-lg bg-green-400 hover:bg-green-600 hover:text-white cursor-pointer text-lg font-semibold w-full " type="submit"  value="CONTINUE WITH GOOGLE"/>
            </div>
           
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;