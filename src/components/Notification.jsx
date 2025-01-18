import React from "react";
import { Bell, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const notifications = [
  {
    id: 1,
    title: "New Assignment",
    content: "You have a new assignment for Data Structures.",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Exam Schedule",
    content: "Mid-term exams start from next week.",
    time: "1 day ago",
  },
  {
    id: 3,
    title: "Holiday Notice",
    content: "The university will be closed on Monday for a national holiday.",
    time: "2 days ago",
  },
  {
    id: 4,
    title: "Library Book Due",
    content: 'Your library book "Algorithms" is due tomorrow.',
    time: "3 days ago",
  },
];

export default function Notification() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <ArrowLeft className="mr-2" onClick={handleBack} />
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-start">
                <Bell className="text-blue-500 mr-3 mt-1" />
                <div>
                  <h2 className="text-lg font-semibold">
                    {notification.title}
                  </h2>
                  <p className="text-gray-600">{notification.content}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
