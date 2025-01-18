import React, { useState } from "react";
import { ArrowLeft, LogOut, User, BookOpen, Phone, Building } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  const studentInfo = {
    name: "Vipin Yadav",
    rollNumber: "2215001970",
    semester: "V",
    registrationDate: "28.07.2024",
    session: "2022-2023",
    personalDetails: {
      dateOfBirth: "15.05.2000",
      gender: "Male",
      bloodGroup: "O+",
      nationality: "Indian"
    },
    academicDetails: {
      course: "B.Tech. Computer Science",
      batch: "2022-2026",
      cgpa: "8.5",
      currentSemester: "5th"
    },
    communicationDetails: {
      email: "vipin.yadav_cs22@gla.ac.in",
      phone: "+91 98765 43210",
      address: "123 University Road, Mathura, Uttar Pradesh - 281406"
    },
    educationalDetails: {
      highSchool: "XYZ School",
      highSchoolYear: "2018",
      highSchoolPercentage: "92%",
      intermediateSchool: "ABC College",
      intermediateYear: "2020",
      intermediatePercentage: "88%"
    }
  };

  const handleCardClick = (cardTitle) => {
    setActiveCard(activeCard === cardTitle ? null : cardTitle);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#00B4FF] text-white p-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-semibold text-center flex-1">Profile</h1>
      </header>

      <div className="p-4 max-w-md mx-auto space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-full bg-pink-100 overflow-hidden">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="space-y-1">
                <p className="text-lg">
                  <span className="text-gray-600">Name : </span>
                  <span className="font-semibold">{studentInfo.name}</span>
                </p>
                <p>
                  <span className="text-gray-600">Roll No : </span>
                  <span className="font-semibold">{studentInfo.rollNumber}</span>
                </p>
                <p>
                  <span className="text-gray-600">Sem : </span>
                  <span className="font-semibold">{studentInfo.semester}</span>
                  <span className="text-green-500 ml-2">
                    Registered On {studentInfo.registrationDate}
                  </span>
                </p>
                <p>
                  <span className="text-gray-600">Session : </span>
                  <span className="font-semibold">{studentInfo.session}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="space-y-4">
          <MenuCard
            icon={<User className="h-8 w-8 text-purple-600" />}
            title="Personal Details"
            onClick={() => handleCardClick("Personal Details")}
            isActive={activeCard === "Personal Details"}
            info={studentInfo.personalDetails}
          />
          <MenuCard
            icon={<BookOpen className="h-8 w-8 text-blue-500" />}
            title="Academic Details"
            onClick={() => handleCardClick("Academic Details")}
            isActive={activeCard === "Academic Details"}
            info={studentInfo.academicDetails}
          />
          <MenuCard
            icon={<Phone className="h-8 w-8 text-green-500" />}
            title="Communicational Details"
            onClick={() => handleCardClick("Communicational Details")}
            isActive={activeCard === "Communicational Details"}
            info={studentInfo.communicationDetails}
          />
          <MenuCard
            icon={<Building className="h-8 w-8 text-purple-600" />}
            title="Educational Details"
            onClick={() => handleCardClick("Educational Details")}
            isActive={activeCard === "Educational Details"}
            info={studentInfo.educationalDetails}
          />
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate("/logout")}
          className="w-full bg-[#00B4FF] text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#0096FF] transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-lg">Log Out</span>
        </button>
      </div>
    </div>
  );
}

function MenuCard({ icon, title, onClick, isActive, info }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div
        className="p-6 cursor-pointer flex items-center gap-3"
        onClick={onClick}
      >
        {icon}
        <h3 className="font-medium text-gray-800">{title}</h3>
      </div>
      {isActive && (
        <div className="px-6 pb-6 pt-2 space-y-2">
          {Object.entries(info).map(([key, value]) => (
            <p key={key} className="text-sm">
              <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
              <span className="font-medium">{value}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

