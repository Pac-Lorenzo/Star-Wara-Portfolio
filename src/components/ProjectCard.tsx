"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-900 border border-blue-500/20 rounded-xl p-6 shadow-md"
    >
      <h2 className="text-2xl font-semibold text-blue-400">
        {project.title}
      </h2>

      <p className="mt-3 text-gray-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-4 text-gray-400 text-sm list-disc list-inside">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className="inline-block mt-4 text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      )}
    </motion.div>
  );
}
