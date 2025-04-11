import React, { useState, useEffect } from "react";
import reminder from "./reminder.svg";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import homeBtn from "./home-1.svg";
import teacherBtn from "./teacher.svg";
import bankBtn from "./bank.svg";
import settingsBtn from "./settings.svg";
import examsBtn from "./exams.svg";
import newBtn from "./Frame 30114.svg";

const AddTeacher = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup");
  };
  const handleDashboardRedirect = () => {
    navigate("/dashboard");
  };
  const handleTeachers2Redirect = () => {
    navigate("/teachers2");
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    about: "",
    classLevel: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("teacherData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    existingTeachers.push(formData);
    localStorage.setItem("teachers", JSON.stringify(existingTeachers));
    console.log("Form data:", formData);
    alert("Teacher data saved successfully!");
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
          <h1 className="font-medium text-[20px] text-[#4F4F4F]">
            Add teacher
          </h1>
          <button
            onClick={(e) => {
              handleSubmit(e);
              handleTeachers2Redirect();
            }}
            className="text-white mr-[75px] bg-[#2D88D4] border-0 py-[11px] px-[35px] focus:outline-none hover:bg-[#2f6c9e] rounded-[8px] font-bold text-[14px] transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-6 grid grid-cols-2 gap-8 bg-white "
      >
        <div>
          <label className="text-[#8A8A8A] text-[14px] font-medium">
            Full Name
          </label>
          <input
            placeholder="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-0 "
          />
        </div>

        <div>
          <label className="text-[#8A8A8A] text-[14px] font-medium">
            Class
          </label>
          <input
            placeholder="Class"
            name="classLevel"
            type="text"
            value={formData.class}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-0 "
          />
        </div>

        <div>
          <label className="text-[#8A8A8A] text-[14px] font-medium">
            Email address
          </label>
          <input
            placeholder="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-0 "
          />
        </div>

        <div>
          <label className="text-[#8A8A8A] text-[14px] font-medium">
            Gender
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-0 "
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label className="text-[#8A8A8A] text-[14px] font-medium">
            Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-0 "
          >
            <option value="">Subject</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        </div>

        <div>
          <label className="text-[#8A8A8A] text-[14px] font-medium">Age</label>
          <input
            placeholder="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="w-full border p-2 rounded focus:outline-none focus:ring-0 "
          />
        </div>

        <div>
          <label className="text-[#8A8A8A] text-[14px] font-medium">
            About
          </label>
          <textarea
            placeholder="About"
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="w-[406px] border p-2 rounded h-24 focus:outline-none focus:ring-0 "
          />
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
