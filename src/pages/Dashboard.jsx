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
import admin from "./admin.svg";
import classes from "./classes.svg";
import students from "./students.svg";
import support from "./support.svg"
import vector from "./Vector.svg"

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup"); // "/login" sahifasiga o'tish
  };
  const handleTeachersRedirect = () => {
    navigate("/teachers"); // "/login" sahifasiga o'tish
  };

  return (
    <div>
      <div className="bg-[#FCFAFA] w-[1270px] h-[95px] ml-[241px] py-[15px] px-[23px] pt-[29px]">
        <p className="text-[16px] font-medium text-[#424242] ml-[147px] ">
          Learn how to launch faster <br />
          <span className="text-[16px] font-normal text-[#424242]">
            watch our webinar for tips from our experts and get a limited time
            offer.
          </span>
        </p>

        <div className="flex flex-wrap items-center">
          <img
            className="ml-[900px] mt-[-40px] w-[20px] h-[20px]"
            src={reminder}
            alt="reminder"
          />
          <button
            onClick={handleSignupRedirect}
            className="text-white bg-[#2D88D4] border-0 py-[11px] px-[35px] focus:outline-none hover:bg-[#2f6c9e] rounded-[8px] font-bold text-[14px] transition duration-300 ease-in-out ml-[950px] mt-[-40px]"
          >
            Log out
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-center font-semibold text-[36px] text-[#4F4F4F] mt-[53px] ">
          Welcome to your dashboard, Udemy school
        </h1>
        <h3 className="text-center font-semibold text-[24px] text-[#4F4F4F] ml-[-250px] mt-[13px] ">
          Uyo/school/@teachable.com
        </h3>
        <div className="ml-[460px] mt-[68px] ">
          <h1 className="flex flex-wrap gap-[20px] text-[24px] font-medium text-[#4F4F4F] mb-[10px] ">
            <img src={admin} alt="admin" />
            Add other admins
          </h1>
          <p className="text-[14px] text-[#4F4F4F] text-[font-normal] ml-[55px] ">
            Create rich course content and coaching products for your students.{" "}
            <br />
            When you give them a pricing plan, they’ll appear on your site!
          </p>
        </div>
        <div className="ml-[460px] mt-[51px] ">
          <h1 className="flex flex-wrap gap-[20px] text-[24px] font-medium text-[#4F4F4F] mb-[10px] ">
            <img src={classes} alt="admin" />
            Add classes
          </h1>
          <p className="text-[14px] text-[#4F4F4F] text-[font-normal] ml-[55px] ">
            Create rich course content and coaching products for your students.{" "}
            <br />
            When you give them a pricing plan, they’ll appear on your site!
          </p>
        </div>
        <div className="ml-[460px] mt-[37px] ">
          <h1 className="flex flex-wrap gap-[20px] text-[24px] font-medium text-[#4F4F4F] mb-[10px] ">
            <img src={students} alt="admin" />
            Add students
          </h1>
          <p className="text-[14px] text-[#4F4F4F] text-[font-normal] ml-[55px] ">
            Create rich course content and coaching products for your students.{" "}
            <br />
            When you give them a pricing plan, they’ll appear on your site!
          </p>
        </div>
      </div>

      <div className="w-[241px] pb-[61px] bg-[#152259] mt-[-671px]">
        <div className="py-[26px] px-[88px] mb-[34px]">
          <img src={logo} alt="logo" />
          <p className="text-white font-semibold text-[14px] w-[1121px] ml-[-25px] mt-[22px]">
            Udemy Inter. school
          </p>
        </div>
        <hr className="divide-gray-400" />
        <div className="flex flex-col gap-[8px] py-[15px] px-[25px]">
          <button className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out">
            {" "}
            <img src={homeBtn} alt="" /> Dashboard
          </button>
          <button
            onClick={handleTeachersRedirect}
            className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out"
          >
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
      <button className=" ml-[1170px] mt-[-186px] flex flex-wrap gap-[5px] py-[21px] px-[24px] bg-[#152259] text-white rounded-[30px] hover:bg-[#0f1532] transition duration-300 ease-in-out "> <img src={support} alt="support" /> Support <img className="ml-[39px]" src={vector} alt="vector" /> </button>
    </div>
  );
};

export default Dashboard;
