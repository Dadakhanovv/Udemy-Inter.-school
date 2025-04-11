import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [token, setToken] = useState("");

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSaveData = () => {
  //   // LocalStorage-ga input ma'lumotini saqlash
  //   localStorage.setItem("userData", inputValue);

  //   // // Token yaratish va saqlash
  //   // const newToken = generateToken();
  //   // setToken(newToken);
  //   // localStorage.setItem("authToken", newToken);
  // };

  // // const generateToken = () => {
  // //   // Oddiy random token yaratish (masalan, 16 ta tasodifiy harf va raqam)
  // //   return Math.random().toString(36).substring(2, 18);
  // // };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

  const navigate = useNavigate();

  // Buttonni bosganda ma'lumotni localStorage'ga saqlash
  const handleSave = () => {
    localStorage.setItem("input1", input1);
    localStorage.setItem("input2", input2);
    localStorage.setItem("input3", input3);
    alert("Ma'lumotlar saqlandi!");
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // "/login" sahifasiga o'tish
  };
  const handleDashboardRedirect = () => {
    navigate("/dashboard"); // "/login" sahifasiga o'tish
  };

  return (
    <div className="bg-stone-50 h-screen">
      <h1 className="text-[36px] font-semibold text-gray-600 text-center pt-[98px]">
        Welcome, Sign up
      </h1>
      <div className="flex justify-center">
        <div className="w-[512px] flex flex-col gap-[14px] items-center text-center h-[494px] bg-white mt-[53px]">
          <p className="text-gray-500 font-medium text-[16px] text-center mt-[72px]">
            It is our great pleasure to have <br /> you on board!
          </p>

          <input
            placeholder="Enter your Email"
            type="text"
            name="email"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="w-[248px] mt-[34px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[14px] text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            placeholder="Create your Login"
            type="text"
            name="login"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="w-[248px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[14px] text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            placeholder="Create your Password"
            type="password"
            name="password"
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
            className="w-[248px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[14px] text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button
            onClick={() => {
              handleSave();
              handleDashboardRedirect();
            }}
            className="text-white bg-[#2D88D4] border-0 py-[9px] px-[95px] focus:outline-none hover:bg-[#2f6c9e] rounded-[4px] font-bold mt-[34px] text-[14px]"
          >
            Sign Up
          </button>
          <button
            onClick={handleLoginRedirect}
            className="text-[#2D88D4] hover:text-[#2f6c9e] font-bold mt-[10px] text-[14px]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
