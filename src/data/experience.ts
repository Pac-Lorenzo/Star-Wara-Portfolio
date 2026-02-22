export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Software Engineer Intern",
    organization: "Ping Identity",
    location: "Austin, TX",
    period: "June 2025 – August 2025",
    bullets: [
      "Contributed to PingDirectory serving millions of enterprise identities",
      "Validated rate limiting and concurrency controls reducing unnecessary calls by 60%",
      "Used JMeter and Splunk to test and analyze deployment performance",
      "Participated in code reviews, CI/CD pipelines, and integration testing",
    ],
  },
  {
    role: "PolarGate & DeepGate Research Assistant",
    organization: "Villanova University",
    location: "Villanova, PA",
    period: "May 2025 – July 2025",
    bullets: [
      "Captured and QC’d experiment data reducing reproduction time by 80%",
      "Built Python scripts using pandas and Matplotlib to analyze circuit metrics",
      "Created data-flow diagrams mapping ML-hardware pipelines",
    ],
  },
];