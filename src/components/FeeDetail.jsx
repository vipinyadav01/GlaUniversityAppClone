import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FeeDetail() {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: "academic",
      title: "Academic",
      content: [
        { description: "Tuition Fee", amount: "₹85,000" },
        { description: "Development Fee", amount: "₹15,000" },
        { description: "Library Fee", amount: "₹5,000" },
      ],
    },
    {
      id: "hostel",
      title: "Hostel",
      content: [
        { description: "Room Rent", amount: "₹45,000" },
        { description: "Maintenance", amount: "₹10,000" },
      ],
    },
    {
      id: "mess",
      title: "Mess",
      content: [
        { description: "Mess Fee", amount: "₹35,000" },
        { description: "Utility Charges", amount: "₹5,000" },
      ],
    },
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#00B8F1] text-white p-4 sticky top-0 z-10">
        <div className="flex items-center max-w-3xl mx-auto">
          <button
            className="p-2 hover:bg-[#0099cc] rounded-full transition-colors"
            onClick={handleBack}
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-semibold ml-4">Fee Details</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="rounded-xl overflow-hidden">
            <motion.button
              className="w-full bg-[#00B8F1] text-white p-6 flex justify-between items-center rounded-xl"
              onClick={() => toggleSection(section.id)}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">{section.title}</span>
              <motion.div
                animate={{ rotate: expandedSection === section.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white"
                >
                  <div className="p-6 space-y-4">
                    {section.content.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-600">
                          {item.description}
                        </span>
                        <span className="font-semibold">{item.amount}</span>
                      </div>
                    ))}
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total</span>
                        <span className="font-bold text-[#00B8F1]">
                          {section.content
                            .reduce(
                              (total, item) =>
                                total +
                                parseInt(item.amount.replace(/[^0-9]/g, "")),
                              0
                            )
                            .toLocaleString("en-IN", {
                              style: "currency",
                              currency: "INR",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        <motion.button
          className="w-full bg-blue-600 text-white p-6 rounded-xl mt-6"
          whileTap={{ scale: 0.98 }}
        >
          Payment History
        </motion.button>
      </div>
    </div>
  );
}

export default FeeDetail;
