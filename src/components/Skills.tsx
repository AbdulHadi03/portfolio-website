import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaAws, FaDocker, FaGitAlt, FaLinux, FaBootstrap, FaCode, FaDesktop } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss, SiSlack, SiConfluence } from 'react-icons/si'
import { DiCode } from 'react-icons/di'
import { BiCodeAlt, BiGitBranch } from 'react-icons/bi'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaJs,
      skills: [
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
        { name: 'C', icon: FaCode, color: 'text-blue-600' },
        { name: 'C++', icon: FaCode, color: 'text-blue-700' },
        { name: 'Python', icon: FaPython, color: 'text-green-500' },
        { name: 'R', icon: BiCodeAlt, color: 'text-blue-400' },
        { name: 'SQL', icon: DiCode, color: 'text-cyan-500' },
        { name: 'Java', icon: FaJava, color: 'text-orange-600' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: FaReact,
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      ],
    },
    {
      title: 'Databases & Cloud',
      icon: FaAws,
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
        { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: FaGitAlt,
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
        { name: 'VS Code', icon: FaDesktop, color: 'text-blue-500' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
        { name: 'Linux', icon: FaLinux, color: 'text-yellow-500' },
        { name: 'Confluence', icon: SiConfluence, color: 'text-blue-400' },
        { name: 'Slack', icon: SiSlack, color: 'text-purple-400' },
        { name: 'Command Line', icon: BiGitBranch, color: 'text-gray-400' },
      ],
    },
    {
      title: 'Concepts & Methodologies',
      icon: BiCodeAlt,
      skills: [
        { name: 'OOP', icon: BiCodeAlt, color: 'text-purple-400' },
        { name: 'Data Structures', icon: BiCodeAlt, color: 'text-blue-400' },
        { name: 'Algorithms', icon: BiCodeAlt, color: 'text-green-400' },
        { name: 'AI/ML', icon: BiCodeAlt, color: 'text-pink-400' },
        { name: 'REST APIs', icon: BiCodeAlt, color: 'text-cyan-400' },
        { name: 'Agile', icon: BiCodeAlt, color: 'text-orange-400' },
      ],
    },
  ]

  return (
    <div className="section bg-gray-900">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary-400">Skills</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit of technologies, frameworks, and methodologies I use to build exceptional digital experiences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-primary-400 text-2xl" />
                <h3 className="text-xl font-semibold text-primary-400">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-700 rounded-full hover:bg-primary-600 transition-all duration-300 group"
                  >
                    <skill.icon className={`${skill.color} text-lg group-hover:text-white transition-colors`} />
                    <span className="text-sm text-gray-300 group-hover:text-white font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
