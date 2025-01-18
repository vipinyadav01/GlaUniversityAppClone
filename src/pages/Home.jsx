import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import {
  Menu,
  RefreshCw,
  Clock,
  Award,
  HomeIcon,
  User,
  FileText,
  BookOpen,
  LogOut,
} from "lucide-react";
import QuickActionPanel from "../components/QuickActionPanel";
import BottomNavigation from "../components/BottomNavigation";
import { useNavigate } from "react-router-dom";
import TodaysLectures from "../components/TodaysLectures";

const colors = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  blue: "#0dcaf0",
  orange: "#fd7e14",
  gray: "#adb5bd",
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const [lecturesVisible, setLecturesVisible] = useState(false);

  const toggleLectures = () => {
    setLecturesVisible(!lecturesVisible);
  };

  const navigateToResult = () => {
    navigate("/results");
  };

  const navigateToAttendance = () => {
    navigate("/attendance");
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <button
            className="text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            GLA UNIVERSITY
          </h1>
          <button
            className="text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={() => window.location.reload()}
          >
            <RefreshCw className="h-6 w-6" />
          </button>
        </div>
      </header>
      {/* Menu Links */}
      {menuVisible && (
        <div className="fixed top-16 left-0 bg-white shadow-xl p-6 rounded-r-2xl h-full w-72 z-40 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center mb-8">
            <div className="w-28 h-28 rounded-full bg-blue-500 mb-4 overflow-hidden shadow-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              John Doe
            </h2>
            <p className="text-sm text-gray-600 mt-1">john.doe@gla.ac.in</p>
          </div>
          <ul className="space-y-3">
            <MenuItem
              icon={<HomeIcon />}
              text="Home"
              onClick={() => navigate("/")}
            />
            <MenuItem
              icon={<User />}
              text="Profile"
              onClick={() => navigate("/profile")}
            />
            <MenuItem
              icon={<User />}
              text="Attendance"
              onClick={navigateToAttendance}
            />
            <MenuItem
              icon={<FileText />}
              text="Subjective Quiz"
              onClick={() => navigate("/subjective-quiz")}
            />
            <MenuItem
              icon={<Award />}
              text="Result"
              onClick={navigateToResult}
            />
            <MenuItem
              icon={<Clock />}
              text="Timetable"
              onClick={() => navigate("/timetable")}
            />
            <MenuItem
              icon={<BookOpen />}
              text="Library"
              onClick={() => navigate("/library")}
            />
            <MenuItem
              icon={<LogOut />}
              text="Log out"
              onClick={() => {
                // Implement logout logic here
                navigate("/login");
              }}
            />
          </ul>
        </div>
      )}
      <main className="flex-1 container max-w-2xl mx-auto p-6 space-y-8">
        {/* Research Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div>
            <h2 className="text-3xl font-bold text-orange-500 mb-2">
              RESEARCH-DRIVEN EDUCATION
            </h2>
            <p className="text-xl font-semibold text-gray-800">
              IS OUR TRADITION
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">10</p>
              <p className="text-sm text-gray-600 mt-1">Research Centres</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <p className="text-sm text-gray-600 mt-1">Articles Published</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">120</p>
              <p className="text-sm text-gray-600 mt-1">State-of-the-labs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">20+</p>
              <p className="text-sm text-gray-600 mt-1">Patents Granted</p>
            </div>
          </div>
        </motion.div>
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center space-x-6">
            <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white shadow-md">
              JD
            </div>
            <div>
              <p className="font-medium text-lg text-gray-800">
                B.Tech. - IT || VI (AM) || 2215.019..
              </p>
              <p className="text-green-500 font-semibold mt-1">
                Registered On 01.08.2026
              </p>
            </div>
          </div>
        </motion.div>
        {/* Statistics Section */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={navigateToAttendance}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Attendance
              </h2>
              <Clock className="text-blue-500 h-8 w-8" />
            </div>
            <p className="text-4xl font-bold text-blue-600">96.5%</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: Today</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={navigateToResult}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Result</h2>
              <Award className="text-green-500 h-8 w-8" />
            </div>
            <p className="text-4xl font-bold text-green-600">78%</p>
            <p className="text-sm text-gray-500 mt-2">Last semester</p>
          </motion.div>
        </div>
        {/* Today's Lectures */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <button
            className="w-full flex justify-between items-center p-6 text-left bg-gradient-to-r from-blue-600 to-blue-400 text-white"
            onClick={toggleLectures}
          >
            <h2 className="text-xl font-semibold">Today's Lectures</h2>
            {lecturesVisible ? (
              <ChevronUp className="h-6 w-6" />
            ) : (
              <ChevronDown className="h-6 w-6" />
            )}
          </button>
          {lecturesVisible && <TodaysLectures />}
        </div>
        {/* Quick Actions */}
        <QuickActionPanel />
      </main>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

const MenuItem = ({ icon, text, onClick }) => (
  <li
    className="flex items-center py-3 px-4 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
    onClick={onClick}
  >
    <span className="mr-4 text-gray-600">{icon}</span>
    <span className="text-gray-800 font-medium">{text}</span>
  </li>
);

export default Home;
