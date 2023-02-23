import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import login from "../../Images/login.jpg";
import Loading from "../../Loading/Loading";
import SmallLoading from "../../Loading/SmallLoading";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  const [logInError, setLogInError] = useState();

  const {signIn, signUpWitGoogle,loading, setLoading  } = useContext(AuthContext);

  const { register,handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    console.log(data);

    setLogInError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        setLoading(false);
        navigate(from, { replace: true });
        // console.log("Login successfully",user)
      })
      .catch((error) => {
        console.log("Error: ", error.message);
        setLoading(false);
        setLogInError(error.message);
      });
  };


  const handleLoginWithGoogle = () =>{
    signUpWitGoogle()
    .then(result=>{
      setLoading(false)
      navigate(from, { replace: true });
      toast.success("Login Successfully")
      console.log(result.user)
    })
    .catch(error => {
      setLoading(false)
      console.log(error)
  })
  }



  return (
    <div className="lg:grid grid-cols-2">
      <div className="text-xl text-center">
        <img src={login} alt="login" />
      </div>

      <div>
        <p className="text-4xl text-green-500 text-center font-bold mt-20">
          Please Enter Your Personal Details...
        </p>
        <div className="flex justify-center">
          {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form className="mt-10 w-3/5" onSubmit={handleSubmit(onSubmit)}>
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
            {logInError && (
              <span className="text-red-600 font-semibold mt-2">
                {/* {logInError} */}
                Your Password is wrong
              </span>
            )}
            <br />

            <Link to="/" className="text-blue-500 font-semibold link">
              Forgot Password?
            </Link>

            <div className="flex justify-center">
              <button className="p-3 border-2 border-green-300 rounded-lg bg-green-400 hover:bg-green-600 hover:text-white cursor-pointer text-lg font-semibold w-full mt-10 ">
                {loading ? <SmallLoading></SmallLoading> : "LOGIN"}
              </button>
            </div>

            <Link to="/signup" className="font-semibold">
              New to Edu-Skill?{" "}
              <span className="text-blue-500 link">Create Your Profile</span>
            </Link>
            <div className="divider">OR</div>

            <div className="flex justify-center">
              <input
                onClick={handleLoginWithGoogle}
                className="p-3 mb-10 border-2 border-green-300 rounded-lg bg-green-400 hover:bg-green-600 hover:text-white cursor-pointer text-lg font-semibold w-full "
                type="submit"
                value="CONTINUE WITH GOOGLE"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
