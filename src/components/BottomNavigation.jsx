import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, User, Home, Bell, MessageSquareMore, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuickActionPanel from "./QuickActionPanel";

const navItems = [
  {
    icon: MessageSquareMore,
    label: "QuickAction",
    path: "/quick-action-panel",
  },
  { icon: User, label: "Attendance", path: "/attendance" },
  { icon: Home, label: "Home", path: "/" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: FileText, label: "Result", path: "/results" },
];

const BottomNavigation = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);

  const handleNavigation = (path, label) => {
    if (label === "QuickAction") {
      setIsQuickActionOpen(true);
    } else {
      setActiveTab(label.toLowerCase());
      navigate(path);
    }
  };

  const handleCloseQuickAction = () => {
    setIsQuickActionOpen(false);
  };

  return (
    <>
      <nav className="fixed bottom-0 bg-white border-t border-blue-200 w-full shadow-lg">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center p-2 w-full h-full relative transition-all duration-300 ease-in-out ${
                activeTab === item.label.toLowerCase()
                  ? "text-blue-600 bg-blue-50 rounded-t-xl"
                  : "text-gray-500 hover:text-blue-500 hover:bg-blue-50 hover:rounded-t-xl"
              } bottom-nav-button focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`}
              onClick={() => handleNavigation(item.path, item.label)}
            >
              <div className="relative">
                <item.icon
                  className={`w-7 h-7 mb-1 transition-transform duration-300 ${
                    activeTab === item.label.toLowerCase() ? "scale-110" : ""
                  }`}
                />
                {item.label === "Notifications" && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold shadow-md notification-count"
                  >
                    5
                  </motion.span>
                )}
              </div>
              <span
                className={`text-xs font-medium transition-all duration-300 ${
                  activeTab === item.label.toLowerCase() ? "font-semibold" : ""
                }`}
              >
                {item.label}
              </span>
              {activeTab === item.label.toLowerCase() && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {isQuickActionOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 bottom-0 bg-white shadow-2xl rounded-t-3xl z-50 p-6 max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto relative">
              <div className="flex justify-center items-center mb-6">
                <div className="bg-gray-300 w-16 h-1 rounded-full"></div>
              </div>
              <button
                onClick={handleCloseQuickAction}
                className="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
              <QuickActionPanel />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BottomNavigation;
