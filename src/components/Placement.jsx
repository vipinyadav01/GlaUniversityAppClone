import React from "react";
import {
  Briefcase,
  Building,
  DollarSign,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    salary: "₹8,00,000 - ₹12,00,000",
    date: "2023-07-15",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Data Insights",
    salary: "₹6,00,000 - ₹9,00,000",
    date: "2023-07-20",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Solutions",
    salary: "₹7,00,000 - ₹10,00,000",
    date: "2023-07-25",
  },
];

export default function Placement() {
  const navigate = useNavigate(); // Initialize navigate

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <button className="mr-2" onClick={handleBack}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Placement Opportunities</h1>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <Building className="mr-2" size={18} />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <DollarSign className="mr-2" size={18} />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="mr-2" size={18} />
                <span>Apply by: {job.date}</span>
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
