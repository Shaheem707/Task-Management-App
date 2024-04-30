import { useState } from "react";
import LoginPage from "../pages/Login";
import SignupPage from "../components/SignupPage";

function UserAuth() {
  const [islogin, setisLogin] = useState(true);
  const updateLogin = (newState) => {
    setisLogin(newState);
  };
  return (
    <div className="flex">
      <div className="w-2/4 h-screen bg-violet-700 flex flex-col gap-4 justify-center items-center ">
        <h1 className="text-6xl font-semibold text-white">
          Task <span className="font-medium">Pro</span>
        </h1>
        <p className="text-lg text-slate-50">Manage your tasks better</p>
      </div>
      <LoginPage isLogin={updateLogin} />
    </div>
  );
}

export default UserAuth;
