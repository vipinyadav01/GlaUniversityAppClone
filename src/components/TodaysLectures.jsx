import React from "react";

const lectures = [
  {
    id: "LEC 1001",
    number: 1,
    location: "Lec / Block A / Room - 101",
    faculty: "Dr. John Smith",
    subject: "Introduction to Programming",
    time: "09:00 AM - 10:00 AM",
    status: "Completed",
  },
  {
    id: "LEC 1002",
    number: 2,
    location: "Lec / Block B / Room - 202",
    faculty: "Prof. Jane Doe",
    subject: "Database Management Systems",
    time: "10:15 AM - 11:15 AM",
    status: "Ongoing",
  },
  {
    id: "LAB 2001",
    number: 3,
    location: "Lab / Block C / Room - 303",
    faculty: "Ms. Emily Davis",
    subject: "Web Development Lab",
    time: "11:30 AM - 01:00 PM",
    status: "Upcoming",
  },
  {
    id: "LEC 1003",
    number: 4,
    location: "Lec / Block D / Room - 404",
    faculty: "Dr. Mark Lee",
    subject: "Operating Systems",
    time: "02:00 PM - 03:00 PM",
    status: "Upcoming",
  },
  {
    id: "LAB 2002",
    number: 5,
    location: "Lab / Block E / Room - 505",
    faculty: "Mrs. Sarah Brown",
    subject: "Physics Lab",
    time: "03:15 PM - 05:15 PM",
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
