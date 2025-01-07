import React from "react";

const lectures = [
  {
    id: "PQRH 0001",
    number: 1,
    location: "Lec / AB - III / Room - 321",
    faculty: "Shivshankar Joshi",
    subject: "Quant & Reasoning Aptitude",
    time: "08:00 AM - 09:00 AM",
    status: "Completed",
  },
  {
    id: "BCSE 1251",
    number: 2,
    location: "Lec / AB - III / Room - 321",
    faculty: "Shiv Kumar Verma",
    subject: "Full Stack Using Scripting Technologies",
    time: "09:00 AM - 10:00 AM",
    status: "Ongoing",
  },
  {
    id: "CSEE 2001",
    number: 3,
    location: "Lab / CB - II / Room - 110",
    faculty: "Priya Sharma",
    subject: "Data Structures and Algorithms",
    time: "10:15 AM - 11:45 AM",
    status: "Upcoming",
  },
  {
    id: "MATH 1102",
    number: 4,
    location: "Lec / AB - I / Room - 205",
    faculty: "Dr. Rajesh Gupta",
    subject: "Linear Algebra and Calculus",
    time: "12:00 PM - 01:00 PM",
    status: "Upcoming",
  },
  {
    id: "PHYS 2201",
    number: 5,
    location: "Lab / Science Block / Room - 302",
    faculty: "Dr. Anita Desai",
    subject: "Physics Practical",
    time: "02:00 PM - 04:00 PM",
    status: "Upcoming",
  },
];

const TodaysLectures = () => {
  return (
    <div className="divide-y divide-gray-200">
      {lectures.map((lecture) => (
        <div key={lecture.id} className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">
              Lecture : {lecture.number}
            </h3>
            <span className="text-sm font-medium text-gray-600">
              {lecture.id}
            </span>
          </div>
          <p className="text-sm text-green-600 mb-1">{lecture.location}</p>
          <p className="text-sm text-gray-500 mb-1">
            Faculty : {lecture.faculty}
          </p>
          <p className="text-base font-medium text-blue-600 mb-1">
            {lecture.subject}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-600">
              {lecture.time}
            </span>
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                lecture.status === "Completed"
                  ? "bg-gray-100 text-gray-800"
                  : lecture.status === "Ongoing"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {lecture.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodaysLectures;
