import React, { useState } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Timetable = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState("January 18, 2025");

    const lectures = [
        {
            lecture: 1,
            courseCode: "MATH 101",
            location: "Lec / Building A / Room 101",
            faculty: "Dr. Alice Johnson",
            subject: "Calculus I",
            time: "08:00 AM - 09:00 AM",
            status: "Upcoming",
        },
        {
            lecture: 2,
            courseCode: "PHYS 202",
            location: "Lec / Building B / Room 202",
            faculty: "Dr. Bob Smith",
            subject: "Physics II",
            time: "09:00 AM - 10:00 AM",
            status: "Ongoing",
        },
        {
            lecture: 3,
            courseCode: "CHEM 303",
            location: "Lab / Building C / Room 303",
            faculty: "Dr. Carol Brown",
            subject: "Organic Chemistry Lab",
            time: "10:00 AM - 11:00 AM",
            status: "Completed",
        },
        {
            lecture: 4,
            courseCode: "COMP 404",
            location: "Lec / Building D / Room 404",
            faculty: "Prof. Daniel White",
            subject: "Data Structures",
            time: "11:00 AM - 12:00 PM",
            status: "Upcoming",
        },
        {
            lecture: 5,
            courseCode: "HIST 505",
            location: "Lec / Building E / Room 505",
            faculty: "Dr. Emma Green",
            subject: "World History",
            time: "12:00 PM - 01:00 PM",
            status: "Upcoming",
        },
        {
            lecture: 6,
            courseCode: "ART 606",
            location: "Studio / Building F / Room 606",
            faculty: "Prof. Frank Adams",
            subject: "Introduction to Painting",
            time: "01:00 PM - 02:00 PM",
            status: "Upcoming",
        },
        {
            lecture: 7,
            courseCode: "CS 707",
            location: "Lab / Building G / Room 707",
            faculty: "Dr. Grace Harper",
            subject: "Machine Learning Lab",
            time: "02:00 PM - 03:00 PM",
            status: "Upcoming",
        },
        {
            lecture: 8,
            courseCode: "ENG 808",
            location: "Lec / Building H / Room 808",
            faculty: "Dr. Henry Lee",
            subject: "Advanced English Literature",
            time: "03:00 PM - 04:00 PM",
            status: "Upcoming",
        },
        {
            lecture: 9,
            courseCode: "BIO 909",
            location: "Lab / Building I / Room 909",
            faculty: "Dr. Irene Clark",
            subject: "Molecular Biology Lab",
            time: "04:00 PM - 05:00 PM",
            status: "Upcoming",
        },
        {
            lecture: 10,
            courseCode: "PHIL 1010",
            location: "Lec / Building J / Room 1010",
            faculty: "Prof. Jack Peterson",
            subject: "Introduction to Philosophy",
            time: "05:00 PM - 06:00 PM",
            status: "Upcoming",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-[#00B4FF] text-white p-4 sticky top-0 z-10">
                <div className="flex items-center">
                    <button onClick={() => navigate(-1)} className="p-2">
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <h1 className="text-2xl font-semibold flex-1 text-center mr-8">
                        Time Table
                    </h1>
                </div>
            </header>

            {/* Date Selector */}
            <div className="p-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <span className="text-purple-600">Selected Date</span>
                    </div>
                    <h2 className="text-xl font-semibold">{selectedDate}</h2>
                    <div className="h-1 w-full bg-purple-600 mt-4 rounded-full" />
                </div>
            </div>

            {/* Lecture Cards */}
            <div className="p-4 space-y-4">
                {lectures.map((lecture) => (
                    <div
                        key={lecture.lecture}
                        className="bg-white rounded-lg p-4 shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-lg font-medium">
                                Lecture: {lecture.lecture}
                            </span>
                            <span className="text-gray-600">{lecture.courseCode}</span>
                        </div>
                        <div className="space-y-2">
                            <p className="text-emerald-600">{lecture.location}</p>
                            <p className="text-gray-500">Faculty: {lecture.faculty}</p>
                            <p className="text-teal-500 font-medium">
                                Subject: {lecture.subject}
                            </p>
                            <div className="flex justify-between items-center">
                                <p className="text-blue-600">Time: {lecture.time}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-600">Status:</span>
                                    <span className="bg-yellow-400 px-3 py-1 rounded-full text-sm">
                                        {lecture.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timetable;
