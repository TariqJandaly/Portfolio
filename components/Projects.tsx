interface ProjectsProps {
  
}

const projects = [
  {
    title: "Portfolio",
    description: "My personal portfolio with all my skills and projects in it!",
    image: "/Portfolio.png",
    date: "Jun 18, 2024",
    link: "https://tariqjandaly.com"
  }
]

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <main className="flex flex-col items-start w-screen p-10">
      <h1 className="text-4xl font-semibold pb-10 md:p-10">
        Projects
      </h1>
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 h-fit justify-center w-full">
        {
          projects.map((items, index) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={index}>
              <a href={items.link}>
                <img src={items.image} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                <div className="mt-3 space-y-2">
                  <span className="block text-indigo-600 text-sm">{items.date}</span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.description}</p>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export default Projects