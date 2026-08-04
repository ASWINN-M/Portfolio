import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "python-logo-only.png",
    "deep-learning.png",
    "git.svg",
    "microsoft.svg",
    "azure.svg",
    "javascript.svg",
    "react.svg",
    "sqlite.svg",
    "visualstudiocode.svg",
    "github.svg",
    "vitejs.svg",
  ];

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={`outer-${skill}-${index}`} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={`inner-${skill}-${index}`} src={`assets/logos/${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => {
  return (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" alt="" />
  );
};
