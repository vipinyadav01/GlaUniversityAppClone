import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const events = [
  { id: 1, date: "2023-07-10", title: "Mid-term Exams Start", type: "exam" },
  {
    id: 2,
    date: "2023-07-15",
    title: "Project Submission",
    type: "assignment",
  },
  { id: 3, date: "2023-07-20", title: "Guest Lecture", type: "event" },
];

export default function Calendar() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleBack = () => {
    navigate(-1);
  };

  const renderCalendar = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const dateString = date.toISOString().split("T")[0];
      const dayEvents = events.filter((event) => event.date === dateString);
      days.push(
        <div key={day} className="h-12 border border-gray-200 p-1">
          <div className="text-sm">{day}</div>
          {dayEvents.map((event) => (
            <div
              key={event.id}
              className={`text-xs truncate ${
                event.type === "exam"
                  ? "bg-red-200"
                  : event.type === "assignment"
                  ? "bg-yellow-200"
                  : "bg-green-200"
              } rounded px-1`}
            >
              {event.title}
            </div>
          ))}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <ArrowLeft className="mr-2" onClick={handleBack} />
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <button onClick={prevMonth} className="p-2">
              <ChevronLeft />
            </button>
            <h2 className="text-xl font-bold">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <button onClick={nextMonth} className="p-2">
              <ChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      </div>
    </div>
  );
}
