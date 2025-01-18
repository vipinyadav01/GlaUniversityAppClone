import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  BookOpen,
  DollarSign,
  Users,
  GraduationCap,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    icon: GraduationCap,
    label: "Placement",
    color: "text-purple-500",
    path: "/placement",
  },
  {
    icon: Clock,
    label: "Attendance",
    color: "text-blue-500",
    path: "/attendance",
  },
  {
    icon: Calendar,
    label: "Calendar",
    color: "text-green-500",
    path: "/calendar",
  },
  {
    icon: BookOpen,
    label: "Library",
    color: "text-yellow-500",
    path: "/library",
  },
  {
    icon: DollarSign,
    label: "Fee Details",
    color: "text-red-500",
    path: "/Fee-Details",
  },
  {
    icon: Users,
    label: "Hierarchy",
    color: "text-indigo-500",
    path: "/hierarchy",
  },
];

const QuickActionPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 pb-20">
      <h2 className="text-xl font-semibold mb-4">Quick Action</h2>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50 hover:bg-gray-100 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => navigate(action.path)}
          >
            <action.icon className={`w-8 h-8 ${action.color}`} />
            <span className="mt-2 text-sm text-gray-600">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActionPanel;
