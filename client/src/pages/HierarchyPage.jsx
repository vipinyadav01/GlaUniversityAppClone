import { ArrowLeft } from "lucide-react";
import FacultyCard from "../components/FacultyCard";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const facultyData = [
  {
    name: "SANDEEP KUMAR RATHORE",
    id: "GLA107230",
    role: "Head Of Department",
    image: "/placeholder.svg",
  },
  {
    name: "SUBHASH CHAND AGRAWAL",
    id: "GLA107227",
    role: "Program Co-Ordinator",
    image: "/placeholder.svg",
  },
  {
    name: "NEETU FAUJDAR",
    id: "GLA120901",
    role: "Class Advisor",
    email: "neetu.faujdar@gla.ac.in",
    phone: "**********",
    designation: "Class Advisor",
    image: "/placeholder.svg",
  },
  {
    name: "SHIV KUMAR VERMA",
    id: "GLA110103",
    role: "Faculty",
    email: "jztshiva@gmail.com",
    phone: "9319136945",
    subjects: [
      "Full Stack Using Scripting Technologies",
      "Full Stack Using Scripting Technologies Lab",
    ],
    image: "/placeholder.svg",
  },
  {
    name: "AKASH YADAV",
    id: "GLA114107",
    role: "Faculty",
    email: "akash.yadav@gla.ac.in",
    phone: "9760507857",
    subjects: ["Software Testing"],
    image: "/placeholder.svg",
  },
];

function HierarchyPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#00B8F1] text-white p-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center">
            <button
              className="p-2 hover:bg-[#0099cc] rounded-full transition-colors"
              onClick={handleBack}
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-semibold ml-4">Academic Hierarchy</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4">
        {facultyData.map((faculty, index) => (
          <FacultyCard key={index} faculty={faculty} />
        ))}
      </div>
    </div>
  );
}

export default HierarchyPage;
