import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, User, Home, Bell, MenuSquare, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuickActionPanel from "./QuickActionPanel";

const navItems = [
    { icon: MenuSquare, label: "Menu", path: "/quick-action-panel" },
    { icon: Home, label: "Home", path: "/" },
    { icon: Bell, label: "Alerts", path: "/notifications" },
    { icon: User, label: "Profile", path: "/profile" },
];

const BottomNavigation = ({ activeTab, setActiveTab }) => {
    const navigate = useNavigate();
    const [isQuickActionOpen, setIsQuickActionOpen] = useState(false);

    const handleNavigation = (path, label) => {
        if (label === "Menu") {
            setIsQuickActionOpen(true);
        } else {
            setActiveTab(label.toLowerCase());
            navigate(path);
        }
    };

    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-40">
                <div className="flex items-center justify-around h-16 px-2 max-w-lg mx-auto">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleNavigation(item.path, item.label)}
                            className={`flex flex-col items-center justify-center w-full h-full ${activeTab === item.label.toLowerCase()
                                    ? "text-blue-600"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <item.icon className="w-6 h-6 mb-1" />
                            <span className="text-xs font-medium">{item.label}</span>
                            {activeTab === item.label.toLowerCase() && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 w-12 h-1 bg-blue-600 rounded-t-full"
                                    transition={{ type: "spring", duration: 0.3 }}
                                />
                            )}
                            {item.label === "Alerts" && (
                                <span className="absolute top-1 right-7 w-4 h-4 bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center">
                                    3
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            <AnimatePresence>
                {isQuickActionOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsQuickActionOpen(false)}
                            className="fixed inset-0 bg-black z-40"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            className="fixed inset-x-0 bottom-0 bg-white rounded-t-2xl z-50 p-4 max-h-[80vh] overflow-y-auto"
                        >
                            <div className="relative">
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-1 bg-gray-200 rounded-full" />
                                </div>
                                <button
                                    onClick={() => setIsQuickActionOpen(false)}
                                    className="absolute right-0 top-0 p-2"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                                <QuickActionPanel />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default BottomNavigation;
