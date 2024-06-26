import MySkills from "@/data/skills"
import { Link } from "next-view-transitions"

interface SkillsProps {
  
}

const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <main className="flex flex-wrap gap-10 md:gap-0 md:flex-nowrap p-10 md:p-16 justify-between w-screen h-fit">
      <div className="w-full">
        <h1 className="text-4xl font-semibold">
          Who am I?
        </h1>
        <p className="text-md pt-5 md:pr-24 md:text-justify">
          Hello! I'm <span className="font-bold text-orange-500">Tariq Jandaly</span>, a passionate full-stack web developer with <span className="font-bold text-orange-500">4 years</span> of experience creating dynamic, user-friendly web applications. My expertise includes front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks such as Node.js and Express. I am proficient with databases like MySQL, PostgreSQL, and MongoDB, and have experience with cloud platforms and tools like AWS, Docker, and Kubernetes.
          <br />
          <br />
          I specialize in building seamless, scalable web solutions that provide exceptional user experiences. My commitment to writing clean, maintainable code and my dedication to continuous learning ensure that I deliver high-quality projects that meet and exceed client expectations. Whether working on complex applications or simple websites, I aim to bring innovative ideas to life through efficient and visually appealing designs.
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-semibold">
          My Skills
        </h1>
        <ul className="text-sm md:text-base flex flex-wrap w-full py-5 gap-2 md:gap-5">
          {MySkills.map((skill, index) => {
            return (
              <li key={JSON.stringify(skill)} className={`px-5 py-2 ${skill.color? `bg-${skill.color}` : 'bg-gray-500/50'} rounded-md md:hover:scale-110 transition-all cursor-pointer`}>
                {skill.title}
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default Skills