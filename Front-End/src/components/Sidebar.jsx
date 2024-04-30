import React from "react";
import {
  MdDashboard,
  MdOutlineAddTask,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar } from "../redux/slices/authSlice";
import clsx from "clsx";

const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <FaTasks />,
  },
  {
    label: "Completed",
    link: "completed/completed",
    icon: <MdTaskAlt />,
  },
  {
    label: "In Progress",
    link: "inprogress/inprogress",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "To Do",
    link: "todo/todo",
    icon: <MdOutlinePendingActions />,
  },
  {
    label: "Team",
    link: "team",
    icon: <FaUsers />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <FaTrashAlt />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];
  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 5);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full flex gap-3 px-3 py-2 rounded-full items-center text-slate-100 text-base hover:bg-slate-700",
          path === el.link.split("/")[0] ? "bg-slate-600 text-white" : ""
        )}
      >
        {el.icon}
        <span className="hover:text-purple-600">{el.label}</span>
      </Link>
    );
  };

  return (
    <div className="w-full h-screen flex flex-col gap-6 p-5 bg-slate-800">
      <h1 className="flex gap-3 items-center">
        <p className="p-2 rounded-full bg-[#8018FF]">
          <MdOutlineAddTask className="text-white text-2xl font-black" />
        </p>
        <div>
          <span className="text-2xl font-semibold text-slate-100">Task </span>
          <span className="font-extralight text-slate-100 text-2xl">Pro</span>
        </div>
      </h1>

      <div className="flex-1 flex flex-col gap-y-5 py-5">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>

      <div>
        <button className="w-full flex gap-3 px-3 py-2 items-center text-lg text-slate-100 hover:bg-slate-700 rounded-full">
          <MdSettings />
          <span>Settings</span>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
