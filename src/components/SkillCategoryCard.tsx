"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  skills: string[];
}

export default function SkillCategoryCard({ title, skills }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-900 border border-blue-500/20 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-blue-400 mb-4">
        {title}
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}