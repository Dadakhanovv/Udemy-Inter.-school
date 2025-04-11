import React from "react";
import reminder from "./reminder.svg";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import homeBtn from "./home-1.svg";
import teacherBtn from "./teacher.svg";
import bankBtn from "./bank.svg";
import settingsBtn from "./settings.svg";
import examsBtn from "./exams.svg";
import newBtn from "./Frame 30114.svg";
import search from "./search.svg";
import noNot from "./no-notification.png";

import support from "./support.svg";
import vector from "./Vector.svg";

const Teachers = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup"); // "/login" sahifasiga o'tish
  };
  const handleDashboardRedirect = () => {
    navigate("/dashboard"); // "/login" sahifasiga o'tish
  };
  const handleAddTeacherRedirect = () => {
    navigate("/addteacher"); // "/login" sahifasiga o'tish
  };

  return (
    <div>
      <div className="w-[1170px] h-[95px] ml-[351px] py-[15px] px-[23px] pt-[29px]">
        <div className="flex flex-wrap items-center">
          <img
            className="ml-[900px] mt-[] w-[20px] h-[20px]"
            src={reminder}
            alt="reminder"
          />
          <button
            onClick={handleSignupRedirect}
            className=" text-[#424242] border-0 pt-[11px] px-[35px] focus:outline-none hover:text-[#2D88D4] rounded-[8px] font-bold text-[14px] transition duration-300 ease-in-out ml-[920px] mt-[-33px]"
          >
            Log out
          </button>
        </div>
      </div>

      <div className="w-[241px] pb-[61px] bg-[#152259] mt-[-100px]">
        <div className="py-[26px] px-[88px] mb-[34px]">
          <img src={logo} alt="logo" />
          <p className="text-white font-semibold text-[14px] w-[1121px] ml-[-25px] mt-[22px]">
            Udemy Inter. school
          </p>
        </div>
        <hr className="divide-gray-400" />
        <div className="flex flex-col gap-[8px] py-[15px] px-[25px]">
          <button
            onClick={handleDashboardRedirect}
            className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out"
          >
            {" "}
            <img src={homeBtn} alt="" /> Dashboard
          </button>
          <button className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out">
            {" "}
            <img src={homeBtn} alt="" /> Teachers
          </button>
          <button className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out">
            {" "}
            <img src={teacherBtn} alt="" /> Students
          </button>
          <button className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out">
            {" "}
            <img src={bankBtn} alt="" /> Billing
          </button>
          <button className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out">
            {" "}
            <img src={settingsBtn} alt="" /> Settings
          </button>
          <button className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out">
            {" "}
            <img src={examsBtn} alt="" /> Exams
          </button>
        </div>
        <button className="ml-[30px] mt-[114px] w-[231px] text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px] ">
          {" "}
          <img src={bankBtn} alt="" /> Features <img src={newBtn} alt="" />
        </button>
      </div>

      <div className="ml-[241px] px-[38px] mt-[-650px] ">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-[20px] text-[#4F4F4F]">Teachers</h1>
          <button
            onClick={handleAddTeacherRedirect}
            className="text-white mr-[75px] bg-[#2D88D4] border-0 py-[11px] px-[35px] focus:outline-none hover:bg-[#2f6c9e] rounded-[8px] font-bold text-[14px] transition duration-300 ease-in-out"
          >
            Add Teachers
          </button>
        </div>
        <div className="flex flex-wrap w-[1150px] gap-[16px] mt-[30px] py-[16px] px-[16px] bg-[#FCFAFA] rounded ">
          <img src={search} alt="search-btn" />
          <input
            className="bg-[#FCFAFA] w-[500px] focus:outline-none focus:ring-0"
            type="text"
            placeholder="Search for a student by name or email"
          />
        </div>

        <div className="w-[1150px] h-[439px] bg-[#FCFAFA] mt-[30px] text-center">
          <img className=" m-auto pt-[14px] " src={noNot} alt="" />
          <h1 className="font-semibold text-[28px] text-[#4F4F4F] mt-[9px] ">
            No Teachers at this time
          </h1>
          <p className=" text-[14px] font-medium text-[#4F4F4F] mt-[4px] ">
            Teachers will appear here after they enroll in your school.
          </p>
          <button className="drop-shadow-2xl ml-[930px] mt-[-20px] flex flex-wrap gap-[5px] py-[21px] px-[24px] bg-[#152259] text-white rounded-[30px] hover:bg-[#0f1532] transition duration-300 ease-in-out ">
            <img src={support} alt="support" /> Support
            <img className="ml-[39px]" src={vector} alt="vector" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
