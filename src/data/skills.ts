export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "TypeScript",
      "JavaScript",
      "ARM Assembly",
      "VHDL",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "React Native", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend & Cloud",
    skills: [
      "Spring Boot",
      "AWS (Lambda, DynamoDB, Cognito)",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "DevOps & Tooling",
    skills: ["Docker", "Git", "GitHub", "GitLab", "Postman", "JMeter", "Expo"],
  },
  {
    title: "Observability",
    skills: ["Splunk", "New Relic"],
  },
  {
    title: "Databases",
    skills: ["Oracle SQL", "MongoDB", "DynamoDB"],
  },
  {
    title: "Certifications",
    skills: ["AWS Certified Cloud Practitioner"],
  },
];