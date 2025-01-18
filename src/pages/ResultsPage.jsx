import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ResultsPage() {
  const navigate = useNavigate();
  const [openSemester, setOpenSemester] = useState(null);

  const semesters = [
    { id: 1, name: "Semester -I", year: "2022-23" },
    { id: 2, name: "Semester -II", year: "2022-23" },
    { id: 3, name: "Semester -III", year: "2023-24" },
    { id: 4, name: "Semester -IV", year: "2023-24" },
    { id: 5, name: "Semester -V", year: "2024-25" },
  ];

  const demoResults = {
    1: [
      { subject: "Mathematics I", grade: "A" },
      { subject: "Physics", grade: "B+" },
      { subject: "Computer Programming", grade: "A+" },
      { subject: "Engineering Graphics", grade: "B" },
    ],
    2: [
      { subject: "Mathematics II", grade: "A" },
      { subject: "Chemistry", grade: "A-" },
      { subject: "Data Structures", grade: "A+" },
      { subject: "Digital Logic Design", grade: "B+" },
    ],
    3: [
      { subject: "Object-Oriented Programming", grade: "A" },
      { subject: "Computer Organization", grade: "B+" },
      { subject: "Discrete Mathematics", grade: "A-" },
      { subject: "Database Management Systems", grade: "A" },
    ],
    4: [
      { subject: "Operating Systems", grade: "A+" },
      { subject: "Computer Networks", grade: "A" },
      { subject: "Theory of Computation", grade: "B+" },
      { subject: "Software Engineering", grade: "A-" },
    ],
    5: [
      { subject: "Artificial Intelligence", grade: "A" },
      { subject: "Web Technologies", grade: "A+" },
      { subject: "Compiler Design", grade: "B+" },
      { subject: "Machine Learning", grade: "A-" },
    ],
  };

  const handleSemesterToggle = (semesterId) => {
    setOpenSemester(openSemester === semesterId ? null : semesterId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#00B8F1] text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-2">
            <button
              className="p-2 hover:bg-[#0099cc] rounded-full transition-colors"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={24} />
            </button>
          </div>
          <div className="ml-2">
            <h1 className="text-xl">Name : Vipin Yadav</h1>
            <h2 className="text-xl mt-1">Univ. RollNo : 2215001970</h2>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 space-y-4">
        {semesters.map((semester, index) => (
          <div key={semester.id} className="w-full">
            <motion.button
              className="w-full text-center text-white p-6 rounded-xl bg-gradient-to-r from-[#00B8F1] to-[#0066ff] shadow-sm flex justify-between items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              onClick={() => handleSemesterToggle(semester.id)}
            >
              <span className="text-xl">
                {semester.name} ( {semester.year} )
              </span>
              {openSemester === semester.id ? (
                <ChevronUp size={24} />
              ) : (
                <ChevronDown size={24} />
              )}
            </motion.button>

            <AnimatePresence>
              {openSemester === semester.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white shadow-md rounded-lg overflow-hidden mt-2"
                >
                  <table className="w-full">
                    <thead className="bg-[#00B8F1] text-white">
                      <tr>
                        <th className="py-2 px-4 text-left">Subject</th>
                        <th className="py-2 px-4 text-left">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoResults[semester.id].map((result, index) => (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="py-2 px-4">{result.subject}</td>
                          <td className="py-2 px-4">
                            <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                              {result.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
