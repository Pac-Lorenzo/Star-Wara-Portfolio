"use client";

import { motion } from "framer-motion";

interface Props {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export default function ExperienceCard({
  role,
  organization,
  location,
  period,
  bullets,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-900 border border-blue-500/20 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold text-blue-400">
        {role}
      </h2>

      <p className="text-gray-300 mt-1">
        {organization} — {location}
      </p>

      <p className="text-gray-500 text-sm mt-1">{period}</p>

      <ul className="mt-4 list-disc list-inside text-gray-400 space-y-1">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </motion.div>
  );
}