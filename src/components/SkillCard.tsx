import SkillCircle from "./SkillCircle";
import type { Skill } from "@/data/skills";

type Props = {
  title: string;
  skills: Skill[];
};

export default function SkillCard({ title, skills }: Props) {
  return (
    <div className="w-full max-w-5xl rounded-3xl p-10 bg-purple-900/40 backdrop-blur-md border border-purple-500/30 flex flex-col items-center">
      
      <h3 className="text-2xl font-semibold text-white mb-10">
        {title}
      </h3>

      <div className="flex flex-wrap justify-center gap-12">
        {skills.map((skill) => (
          <SkillCircle
            key={skill.label}
            percentage={skill.percentage}
            color={skill.color}
            icon={skill.icon}
            label={skill.label}
          />
        ))}
      </div>
    </div>
  );
}
