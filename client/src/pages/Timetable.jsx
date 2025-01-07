import React, { useState } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Timetable = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('November 25, 2024');

    const lectures = [
        {
            lecture: 1,
            courseCode: 'BCSE 1251',
            location: 'Lec / AB - IX / Room - 009',
            faculty: 'Shiv Kumar Verma',
            subject: 'Full Stack Using Scripting Technologies',
            time: '08:00 AM - 09:00 AM',
            status: 'Upcoming'
        },
        {
            lecture: 2,
            courseCode: 'BCSE 1252',
            location: 'Lec / AB - IX / Room - 010',
            faculty: 'Rajesh Kumar',
            subject: 'Data Structures and Algorithms',
            time: '09:00 AM - 10:00 AM',
            status: 'Upcoming'
        },
        {
            lecture: 3,
            courseCode: 'BCSE 0131',
            location: 'Lab / AB - I / Room - 216',
            faculty: 'Mukesh Kumar Sahu',
            subject: 'Digital Image Processing Lab',
            time: '10:00 AM - 11:00 AM',
            status: 'Upcoming'
        },
        {
            lecture: 4,
            courseCode: 'BCSE 0131',
            location: 'Lab / AB - I / Room - 216',
            faculty: 'Mukesh Kumar Sahu',
            subject: 'Digital Image Processing Lab',
            time: '11:00 AM - 12:00 PM',
            status: 'Upcoming'
        },
        {
            lecture: 5,
            courseCode: 'BCSE 0141',
            location: 'Lec / AB - IX / Room - 011',
            faculty: 'Priya Singh',
            subject: 'Computer Networks',
            time: '12:00 PM - 01:00 PM',
            status: 'Upcoming'
        },
        {
            lecture: 6,
            courseCode: 'BCSE 0101',
            location: 'Lec / AB - IX / Room - 009',
            faculty: 'Ajay Kumar Mahato',
            subject: 'Digital Image Processing',
            time: '01:00 PM - 02:00 PM',
            status: 'Upcoming'
        },
        {
            lecture: 7,
            courseCode: 'BCSE 0161',
            location: 'Lab / AB - II / Room - 301',
            faculty: 'Amit Kumar',
            subject: 'Machine Learning Laboratory',
            time: '02:00 PM - 03:00 PM',
            status: 'Upcoming'
        },
        {
            lecture: 8,
            courseCode: 'BCSE 0171',
            location: 'Lec / AB - IX / Room - 012',
            faculty: 'Sunita Sharma',
            subject: 'Software Engineering',
            time: '03:00 PM - 04:00 PM',
            status: 'Upcoming'
        },
        {
            lecture: 9,
            courseCode: 'BCSE 0181',
            location: 'Lab / AB - III / Room - 401',
            faculty: 'Rahul Gupta',
            subject: 'Cloud Computing Lab',
            time: '04:00 PM - 05:00 PM',
            status: 'Upcoming'
        },
        {
            lecture: 10,
            courseCode: 'BCSE 0191',
            location: 'Lec / AB - IX / Room - 013',
            faculty: 'Neha Verma',
            subject: 'Artificial Intelligence',
            time: '05:00 PM - 06:00 PM',
            status: 'Upcoming'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-[#00B4FF] text-white p-4 sticky top-0 z-10">
                <div className="flex items-center">
                    <button onClick={() => navigate(-1)} className="p-2">
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <h1 className="text-2xl font-semibold flex-1 text-center mr-8">Time Table</h1>
                </div>
            </header>

            {/* Date Selector */}
            <div className="p-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <span className="text-purple-600">Enter Date</span>
                    </div>
                    <h2 className="text-xl font-semibold">{selectedDate}</h2>
                    <div className="h-1 w-full bg-purple-600 mt-4 rounded-full" />
                </div>
            </div>

            {/* Lecture Cards */}
            <div className="p-4 space-y-4">
                {lectures.map((lecture) => (
                    <div key={lecture.lecture} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-lg font-medium">Lecture : {lecture.lecture}</span>
                            <span className="text-gray-600">{lecture.courseCode}</span>
                        </div>
                        <div className="space-y-2">
                            <p className="text-emerald-600">{lecture.location}</p>
                            <p className="text-gray-500">Faculty : {lecture.faculty}</p>
                            <p className="text-teal-500 font-medium">Subject: {lecture.subject}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-blue-600">Time: {lecture.time}</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-600">Status :</span>
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

