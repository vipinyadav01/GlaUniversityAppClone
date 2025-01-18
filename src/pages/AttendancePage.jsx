import { ArrowLeft } from "lucide-react";
import AttendanceCard from "../components/AttendanceCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const courseData = [
  {
    code: "BCSC 0011",
    name: "Theory Of Automata & Formal Languages",
    professor: "Neetu Faujdar",
    credits: 4,
    attended: 40,
    total: 48,
  },
  {
    code: "BCSE 0055",
    name: "Software Testing",
    professor: "Akash Yadav",
    credits: 3,
    attended: 28,
    total: 35,
  },
  {
    code: "BCSE 0101",
    name: "Digital Image Processing",
    professor: "Ajay Kumar Mahato",
    credits: 3,
    attended: 33,
    total: 36,
  },
  {
    code: "BCSE 1207",
    name: "Cloud Computing",
    professor: "Sachin Upadhyay",
    credits: 3,
    attended: 31,
    total: 36,
  },
  {
    code: "BCSE 1251",
    name: "Full Stack Using Scripting Technologies",
    professor: "Shiv Kumar Verma",
    credits: 3,
    attended: 35,
    total: 42,
  },
  {
    code: "BCSE 0055",
    name: "Software Testing",
    professor: "Akash Yadav",
    credits: 3,
    attended: 28,
    total: 35,
  },
];

function AttendancePage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#00B8F1] to-[#0099cc] text-white p-4 sticky top-0 z-10 shadow-md"
      >
        <div className="flex items-center max-w-3xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            onClick={handleBack}
          >
            <ArrowLeft size={24} />
          </motion.button>
          <h1 className="text-2xl font-bold ml-4 tracking-wide">Attendance</h1>
        </div>
      </motion.div>

      <div className="max-w-3xl mx-auto p-4 space-y-4">
        {courseData.map((course, index) => (
          <motion.div
            key={`${course.code}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AttendanceCard course={course} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AttendancePage;
