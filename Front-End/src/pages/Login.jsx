import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import axios from "axios";

function Login() {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <>
      <div className="flex">
        <div className="w-2/4 h-screen bg-violet-700 flex flex-col gap-4 justify-center items-center ">
          <h1 className="text-6xl font-semibold text-white">
            Task <span className="font-medium">Pro</span>
          </h1>
          <p className="text-lg text-slate-50">Manage your tasks better</p>
        </div>

        <div className="bg-slate-800 w-2/4 h-screen flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-16 text-slate-300">Login</h1>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col w-72 gap-3"
          >
            <Textbox
              placeholder="Email address"
              type="email"
              name="email"
              className="w-full rounded-md"
              register={register("email", {
                required: "Email address is required!",
              })}
              error={errors.email ? errors.email.message : ""}
            />
            <Textbox
              placeholder="Password"
              type="password"
              name="password"
              className="w-full rounded-md"
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password.message : ""}
            />
            <div className="flex justify-between items-center">
              <p className="text-slate-300">
                Don&#39;t have an account?
                <span className="hover:cursor-pointer underline">Signup</span>
                &nbsp;here
              </p>

              <Button
                type="submit"
                label="Login"
                className="text-slate-300 border-2 border-slate-500 hover:bg-slate-900 hover:text-slate-200"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
