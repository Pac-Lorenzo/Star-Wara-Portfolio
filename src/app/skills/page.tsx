import { skillCategories } from "@/data/skills";
import SkillCategoryCard from "@/components/SkillCategoryCard";

export default function SkillsPage() {
  return (
    <section className="min-h-screen">
      <h1 className="text-4xl font-bold text-blue-400 mb-12">
        Skills & Tools
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <SkillCategoryCard
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}