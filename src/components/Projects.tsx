import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'ComEd Electricity Price Alert System',
      description:
        'Serverless automation built on Cloudflare Workers and Telegram API to send real-time electricity price alerts. Integrated cron triggers, KV storage, and threshold-based notifications for proactive energy monitoring.',
      technologies: ['Cloudflare Workers', 'TypeScript', 'Telegram API', 'KV Storage', 'Cron Jobs'],
      github: 'https://github.com/AbdulHadi03/comed-telegram-bot',
      demo: '',
      image: '/project1.jpg',
    },
    {
      title: 'Root Stress AI Detection System',
      description:
        'IoT and AI-powered pipeline leveraging AWS Lambda and Python to detect plant root stress using sensor data. Integrated real-time dashboards with React and serverless APIs for predictive agricultural insights.',
      technologies: ['AWS Lambda', 'Python', 'React', 'IoT Core', 'API Gateway', 'Tailwind CSS'],
      github: 'https://github.com/AbdulHadi03/root-stress-detection',
      demo: '',
      image: '/project2.jpg',
    },
    {
      title: 'Pantry Connect',
      description:
        'Full-stack MERN web application connecting community pantries for real-time inventory management. Implemented inter-pantry communication, secure CRUD operations, and meeting midpoint calculation for efficient collaboration.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      github: 'https://github.com/AbdulHadi03/Pantry-Connect',
      demo: '',
      image: '/project3.jpg',
    },
    {
      title: 'Student Helpdesk (RAG)',
      description:
        'AI-driven student support system integrating LangChain and OpenAI to deliver context-aware academic assistance. Built retrieval pipelines and vector-based search to enhance accuracy and relevance of responses.',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'Supabase'],
      github: 'https://github.com/AbdulHadi03/StudentHelpdesk',
      demo: '',
      image: '/project4.jpg',
    },
    {
      title: 'Divvy Bike Demand Forecasting',
      description:
        'Machine learning project analyzing 300K+ Divvy trip records to forecast hourly bike demand across Chicago. Implemented SARIMA and Weighted Moving Average models for time-series prediction and resource optimization.',
      technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'SARIMA', 'Matplotlib'],
      github: 'https://github.com/AbdulHadi03/Divvy-Bike-Analysis',
      demo: '',
      image: '/project5.jpg',
    },
    {
      title: 'Fairness-Aware Language Translation System',
      description:
        'Developed a fairness-aware translation model mitigating gender, ethnic, political, and socioeconomic biases. Applied adversarial debiasing, counterfactual data augmentation, and fairness-aware optimization with CLEAR Bias and LLM-as-a-Judge evaluation.',
      technologies: ['Python', 'CLEAR Bias', 'LLM-as-a-Judge', 'Adversarial Debiasal'],
      github: 'https://github.com/AbdulHadi03/Fairness-Aware-Translation-System',
      demo: '',
      image: '/project6.jpg',
    },
    {
      title: 'Hyderabad Cuisine Website',
      description:
        'Developed a responsive website showcasing the rich culinary heritage of Hyderabad. Designed interactive pages featuring traditional dishes, food culture, and local delicacies using HTML, CSS, and JavaScript for smooth navigation and modern visuals.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/AbdulHadi03/Hyderabad-Cuisine/tree/master',
      demo: '',
      image: '/project7.jpg',
    },
  ]

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          My <span className="text-primary-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 transition-all transform hover:scale-[1.02] hover:border-primary-500 shadow-lg hover:shadow-primary-500/20"
            >
              <div className="h-60 md:h-72 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/70 select-none">
                  {project.title[0]}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary-400">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-xs md:text-sm text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm md:text-base"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm md:text-base"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects