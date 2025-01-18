import { ArrowLeft } from "lucide-react";
import FacultyCard from "../components/FacultyCard";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const facultyData = [
  {
    name: "John Doe",
    id: "FA001",
    role: "Head Of Department",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    name: "Jane Smith",
    id: "FA002",
    role: "Program Coordinator",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    name: "Emily Johnson",
    id: "FA003",
    role: "Class Advisor",
    email: "emily.johnson@example.com",
    phone: "**********",
    designation: "Class Advisor",
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    name: "Michael Brown",
    id: "FA004",
    role: "Faculty",
    email: "michael.brown@example.com",
    phone: "9876543210",
    subjects: [
      "Advanced Programming Concepts",
      "Data Structures and Algorithms Lab",
    ],
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
  },
  {
    name: "Sarah Wilson",
    id: "FA005",
    role: "Faculty",
    email: "sarah.wilson@example.com",
    phone: "9123456789",
    subjects: ["Software Engineering", "Testing Strategies"],
    image: "https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png",
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
