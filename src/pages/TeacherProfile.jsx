import React, { useEffect, useState } from "react";
import reminder from "./reminder.svg";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import homeBtn from "./home-1.svg";
import teacherBtn from "./teacher.svg";
import bankBtn from "./bank.svg";
import settingsBtn from "./settings.svg";
import examsBtn from "./exams.svg";
import newBtn from "./Frame 30114.svg";

const TeacherProfile = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleTeachers2Redirect = () => {
    navigate("/teachers2"); // "/login" sahifasiga o'tish
  };

  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const savedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    if (savedTeachers.length > 0) {
      setTeacher(savedTeachers[0]);
    }
  }, []);

  if (!teacher) return <div className="ml-[250px] mt-10">No teacher found</div>;

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
          <button className="text-left flex flex-wrap gap-[16px] text-white text-[14px] font-semibold py-[11px] pl-[16px] pr-[72px]  rounded hover:bg-[#509CDB] transition duration-300 ease-in-out">
            {" "}
            <img src={homeBtn} alt="" /> Dashboard
          </button>
          <button
            onClick={handleTeachers2Redirect}
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

      <div className="ml-[260px] mt-[-600px] flex gap-16 items-start p-10">
        <div className="flex flex-col items-center text-center">
          <img
            src={
              teacher.image?.trim()
                ? teacher.image
                : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            }
            alt="teacher"
            className="rounded-full w-48 h-48 object-cover bg-gray-200"
          />

          <h2 className="mt-4 font-semibold text-xl text-[#333]">
            {teacher.fullName}
          </h2>
          <p className="text-gray-500">{teacher.email}</p>

          <div className="flex gap-4 mt-6">
            <div className="bg-gray-100 p-3 rounded-lg shadow">📩</div>
            <div className="bg-gray-100 p-3 rounded-lg shadow">📞</div>
            <div className="bg-gray-100 p-3 rounded-lg shadow">✉️</div>
          </div>
        </div>

        <div className="max-w-xl">
          <h3 className=" w-[335px] text-lg font-semibold text-gray-800 mb-4">
            About
          </h3>
          <p className="text-gray-600 mb-6">
            {teacher.about || "No information provided"}
          </p>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Subject:</span> {teacher.subject}
            </div>
            <div>
              <span className="font-semibold">Class:</span> {teacher.class}
            </div>
            <div>
              <span className="font-semibold">Age:</span> {teacher.age}
            </div>
            <div>
              <span className="font-semibold">Gender:</span> {teacher.gender}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
