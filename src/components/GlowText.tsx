interface GlowTextProps {
  text: string;
}

export default function GlowText({ text }: GlowTextProps) {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
      {text}
    </h1>
  );
}