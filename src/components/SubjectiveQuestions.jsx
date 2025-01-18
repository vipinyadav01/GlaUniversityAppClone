import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SubjectiveQuestions = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const questions = [
        {
            id: 1,
            question: "Explain the concept of React hooks and give an example of useState.",
            subject: "Web Development",
            marks: 5
        },
        {
            id: 2,
            question: "Describe the process of image segmentation in computer vision.",
            subject: "Digital Image Processing",
            marks: 10
        },
        {
            id: 3,
            question: "What are the key differences between HTTP and HTTPS?",
            subject: "Computer Networks",
            marks: 5
        },
        {
            id: 4,
            question: "Explain the working principle of convolutional neural networks (CNNs).",
            subject: "Machine Learning",
            marks: 10
        },
        {
            id: 5,
            question: "Discuss the importance of normalization in database design.",
            subject: "Database Management",
            marks: 8
        }
    ];

    const handleAnswerChange = (e) => {
        setAnswers({
            ...answers,
            [questions[currentQuestion].id]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log("Submitted answers:", answers);
        alert("Answers submitted successfully!");
    };

    const navigateQuestion = (direction) => {
        if (direction === 'next' && currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else if (direction === 'prev' && currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-[#00B4FF] text-white p-4 sticky top-0 z-10">
                <div className="flex items-center">
                    <button onClick={() => navigate(-1)} className="p-2">
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                    <h1 className="text-2xl font-semibold flex-1 text-center mr-8">Subjective Questions</h1>
                </div>
            </header>

            <div className="p-4 max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium text-gray-500">Question {currentQuestion + 1} of {questions.length}</span>
                        <span className="text-sm font-medium text-blue-600">{questions[currentQuestion].subject}</span>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</h2>
                    <div className="mb-4">
                        <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">Your Answer:</label>
                        <textarea
                            id="answer"
                            rows="6"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={answers[questions[currentQuestion].id] || ''}
                            onChange={handleAnswerChange}
                            placeholder="Type your answer here..."
                        ></textarea>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Marks: {questions[currentQuestion].marks}</span>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => navigateQuestion('prev')}
                                disabled={currentQuestion === 0}
                                className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => navigateQuestion('next')}
                                disabled={currentQuestion === questions.length - 1}
                                className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md disabled:opacity-50"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                >
                    Submit All Answers
                </button>
            </div>
        </div>
    );
};

export default SubjectiveQuestions;

