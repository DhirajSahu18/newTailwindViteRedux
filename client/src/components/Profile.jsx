import React from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

const ProfileOptions = () => {
  const options = {
    student: [
      { name: "View Attendance", path: "/view-attendance" },
      { name: "View Marks", path: "/view-marks" },
    ],
    teacher: [
      { name: "View Attendance", path: "/view-attendance" },
      { name: "View Marks", path: "/view-marks" },
      { name: "Add Attendance", path: "/add-attendance" },
      { name: "Add Marks", path: "/add-marks" },
    ],
    admin: [
      { name: "View Attendance", path: "/view-attendance" },
      { name: "View Marks", path: "/view-marks" },
      { name: "Add Attendance", path: "/add-attendance" },
      { name: "Add Marks", path: "/add-marks" },
      { name: "Add Lectures", path: "/add-lectures" },
      { name: "Add Subjects", path: "/add-subjects" },
      { name: "Create User", path: "/create-user" },
    ],
  };

//   const role = useSelector(selectUser);
  const role = 'admin';

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1a202c] text-white font-sans">
      <div className="bg-[#2d3748] p-8 rounded-lg shadow-lg w-96 mt-10">
        <h2 className="text-3xl font-semibold mb-6 text-center">Profile Options</h2>
        <div className="flex flex-col space-y-4">
          {options[role]?.map((option, index) => (
            <Link
              key={index}
              to={option.path}
              className="bg-[#3182ce] p-3 rounded-md text-center text-white hover:bg-[#2b6cb0] transition"
            >
              {option.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileOptions;
