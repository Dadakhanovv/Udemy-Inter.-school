import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const navigate = useNavigate();

  // Buttonni bosganda ma'lumotni localStorage'ga saqlash
  const handleSave = () => {
    localStorage.setItem("input1", input1);
    localStorage.setItem("input2", input2);
    alert("Ma'lumotlar saqlandi!");
  };

  const handleLoginRedirect = () => {
    navigate("/signup"); // "/login" sahifasiga o'tish
  };

  const handleDashboardRedirect = () => {
    navigate("/dashboard"); // "/login" sahifasiga o'tish
  };

  return (
    <div className="bg-stone-50 h-screen">
      <h1 className="text-[36px] font-semibold text-gray-600 text-center pt-[98px]">
        Welcome, Log into you account
      </h1>
      <div className="flex justify-center">
        <div className="w-[512px] flex flex-col gap-[14px] items-center text-center h-[382px] bg-white mt-[53px]">
          <p className="text-gray-500 font-medium text-[16px] text-center mt-[72px]">
            It is our great pleasure to have <br /> you on board!
          </p>

          <input
            placeholder="Enter your Login"
            type="text"
            name="login"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="w-[248px] mt-[14px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[14px] text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            placeholder="Enter your Password"
            type="password"
            name="password"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="w-[248px] bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-[14px] text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button
             onClick={() => {
              handleSave();
              handleDashboardRedirect();
            }}
            className="text-white bg-[#2D88D4] border-0 py-[9px] px-[95px] focus:outline-none hover:bg-[#2f6c9e] rounded-[4px] font-bold text-[14px]"
          >
            Login
          </button>
          <button
            onClick={handleLoginRedirect}
            className="text-[#2D88D4] hover:text-[#2f6c9e] font-bold mt-[10px] text-[14px]"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
