import React, { useState } from "react";
import { Book, Search, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    available: true,
  },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", available: false },
  { id: 3, title: "Design Patterns", author: "Erich Gamma", available: true },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    available: true,
  },
  {
    id: 5,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell",
    available: false,
  },
];

export default function Library() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center">
          <ArrowLeft className="mr-2" onClick={handleBack} />
          <h1 className="text-2xl font-bold">Library</h1>
        </div>
      </div>
      <div className="p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full p-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-start">
                <Book className="text-blue-500 mr-3 mt-1" />
                <div>
                  <h2 className="text-lg font-semibold">{book.title}</h2>
                  <p className="text-gray-600">{book.author}</p>
                  <p
                    className={`mt-2 ${
                      book.available ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {book.available ? "Available" : "Checked Out"}
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
