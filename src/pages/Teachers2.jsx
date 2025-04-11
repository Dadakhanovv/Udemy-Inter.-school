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
import search from "./search.svg";

const Teachers2 = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    setTeachers(storedTeachers);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedTeachers = teachers.filter(
      (_, index) => index !== indexToDelete
    );
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
  };

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
  const handleTeacherProfileRedirect = () => {
    navigate("/teacherprofile"); // "/login" sahifasiga o'tish
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

        <table onClick={handleTeacherProfileRedirect} className="mt-8 w-[1150px] text-left border-collapse">
          <thead className="bg-[#F2F2F2] text-[#4F4F4F]">
            <tr>
              <th className="py-3 px-4 font-semibold">Name</th>
              <th className="py-3 px-4 font-semibold">Subject</th>
              <th className="py-3 px-4 font-semibold">Class</th>
              <th className="py-3 px-4 font-semibold">Email address</th>
              <th className="py-3 px-4 font-semibold">Gender</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"}
              >
                <td className="py-3 px-4 flex items-center gap-2">
                  <img
                    className="w-[32px] h-[32px] rounded-full"
                    src={`https://ui-avatars.com/api/?name=${teacher.fullName}`}
                    alt="avatar"
                  />
                  {teacher.fullName}
                </td>
                <td className="py-3 px-4">{teacher.subject}</td>
                <td className="py-3 px-4">{teacher.classLevel}</td>
                <td className="py-3 px-4">{teacher.email}</td>
                <td className="py-3 px-4">{teacher.gender}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachers2;
