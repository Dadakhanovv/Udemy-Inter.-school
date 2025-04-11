import React from "react";
import LogIn from "./pages/Login";

import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import AddTeacher from "./pages/AddTeacher";
import Teachers2 from "./pages/Teachers2";
import TeacherProfile from "./pages/TeacherProfile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/addteacher" element={<AddTeacher />} />
        <Route path="/teachers2" element={<Teachers2 />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
      </Routes>
    </div>
  );
};

export default App;
