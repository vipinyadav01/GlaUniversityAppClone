import { ArrowLeft } from "lucide-react";
import AttendanceCard from "../components/AttendanceCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const courseData = [
  {
    code: "MATH 101",
    name: "Calculus I",
    professor: "Dr. Alice Johnson",
    credits: 4,
    attended: 30,
    total: 40,
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    code: "PHYS 202",
    name: "Physics II",
    professor: "Prof. Bob Smith",
    credits: 3,
    attended: 25,
    total: 35,
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    code: "CHEM 303",
    name: "Organic Chemistry",
    professor: "Dr. Carol Davis",
    credits: 4,
    attended: 40,
    total: 45,
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    code: "COMP 404",
    name: "Data Structures",
    professor: "Prof. Daniel Brown",
    credits: 3,
    attended: 35,
    total: 42,
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    code: "HIST 505",
    name: "World History",
    professor: "Dr. Elizabeth Miller",
    credits: 3,
    attended: 28,
    total: 30,
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
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
