import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

function ResultCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Result</h2>
        <Award className="text-green-500" />
      </div>
      <p className="text-2xl font-bold text-green-600">62%</p>
      <p className="text-sm text-gray-500">Last semester</p>
    </motion.div>
  );
}

export default ResultCard;
