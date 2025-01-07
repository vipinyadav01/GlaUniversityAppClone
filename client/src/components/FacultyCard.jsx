import React from "react";
import { Mail, Phone } from "lucide-react";

function FacultyCard({ faculty }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={faculty.image || "/placeholder.svg"}
            alt={faculty.name}
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900">{faculty.name}</h2>
          <p className="text-emerald-500 font-medium">{faculty.id}</p>
          <p className="text-teal-500">{faculty.role}</p>

          {faculty.email && (
            <div className="flex items-center gap-2 text-gray-500 mt-2">
              <Mail size={16} />
              <a
                href={`mailto:${faculty.email}`}
                className="text-gray-500 hover:text-gray-700"
              >
                {faculty.email}
              </a>
            </div>
          )}

          {faculty.phone && (
            <div className="flex items-center gap-2 text-gray-500 mt-1">
              <Phone size={16} />
              <a
                href={`tel:${faculty.phone}`}
                className="text-blue-500 hover:text-blue-700 underline"
              >
                {faculty.phone}
              </a>
            </div>
          )}
        </div>
      </div>

      {faculty.subjects && (
        <div className="mt-4">
          {faculty.subjects.map((subject, index) => (
            <p key={index} className="text-emerald-600 font-medium">
              {subject}
            </p>
          ))}
        </div>
      )}

      {faculty.designation && (
        <div className="mt-4">
          <span className="text-emerald-600 font-medium">
            {faculty.designation}
          </span>
        </div>
      )}
    </div>
  );
}

export default FacultyCard;
