import { source } from "motion/react-client";
import { OrbitingCircles } from "./OrbitingCircles";



export function Frameworks() {
    const skills = ['auth0.svg'  ,'blazor.svg' , 'cplusplus.svg'  , 'css3.svg' , 'git.svg' , 'html5.svg' , 'javascript.svg' , 'microsoft.svg' , 'react.svg' , 'tailwindcss.svg' , 'vitejs.svg' ];
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
        {skills.map((skill,index) => <Icon key={index} src={`assets/logos/${skill}`} />)}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse({duration : 11}).map((skill,index) => <Icon key={index} src={`assets/logos/${skill}`} />)}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({src}) => {
    return <img src={src} className="duration-200 rounded-sm hover:scale-110" />
}
