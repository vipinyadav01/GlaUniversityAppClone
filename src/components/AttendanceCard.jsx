import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

function AttendanceCard({ course }) {
  const percentage = (course.attended / course.total) * 100;
  const getColor = (percent) => {
    return percent >= 85 ? "text-green-500" : "text-orange-400";
  };
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage * circumference) / 100
    } ${circumference}`;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{course.code}</h3>
          <h4 className="text-xl font-medium text-emerald-500 mt-1">
            {course.name}
          </h4>
          <p className="text-gray-400 mt-2">{course.professor}</p>
          <div className="mt-3 space-y-1">
            <p className="text-blue-700">
              Credit : <span className="text-gray-700">{course.credits}</span>
            </p>
            <p className="flex items-center">
              <span className="text-blue-700">Type : </span>
              <span className="text-green-700 ml-1">Lecture</span>
            </p>
          </div>
        </div>
        <div className="relative w-28 h-28">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="56"
              cy="56"
              r={radius}
              className="stroke-gray-200"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="56"
              cy="56"
              r={radius}
              className={getColor(percentage)}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              style={{ strokeDasharray, strokeDashoffset: 0 }}
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="text-xl font-bold">{percentage.toFixed(2)}%</span>
          </div>
        </div>
      </div>
      <div className="text-right mt-2">
        <p className="text-blue-700">
          Attend/Held :{" "}
          <span className={getColor(percentage)}>
            {course.attended}/{course.total}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AttendanceCard;
