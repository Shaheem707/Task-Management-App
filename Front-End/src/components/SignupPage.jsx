import { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="bg-slate-800 w-2/4 h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-16 text-slate-300">Signup</h1>
        <form className="flex flex-col w-72">
          <input
            className="bg-slate-700 mb-4 p-2 focus:outline-none text-slate-300"
            type="text"
            placeholder="Name.."
          />
          <input
            className="bg-slate-700 mb-4 p-2 focus:outline-none text-slate-300"
            type="email"
            placeholder="Email.."
          />
          <input
            className="bg-slate-700 mb-4 p-2 focus:outline-none text-slate-300"
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
          <input
            className="bg-slate-700 p-2 focus:outline-none text-slate-300"
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
          />
          <div className="flex justify-between items-center mt-8">
            <p className="text-slate-300">
              Already have an account?
              <span className="hover:cursor-pointer underline">Login</span>
              &nbsp;here
            </p>
            <button
              type="submit"
              className="text-slate-300 border-2 border-slate-500 hover:bg-slate-900 hover:text-slate-200 p-2 rounded-md "
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
