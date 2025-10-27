const About = () => {
  return (
    <div className="section bg-gray-800">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary-400">Me</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              I'm a Software Engineer and Master's student in Computer Science at the University of Illinois at Chicago, passionate about developing reliable, scalable, and intelligent software systems. My expertise spans React, Node.js, Express, MySQL, Docker, and AI integration using Python, LangChain, and OpenAI models, bridging traditional software architectures with LLM-powered automation and intelligent workflows.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              Currently, I work as a Graduate Assistant Software Engineer at the UIC College of Engineering, where I'm enhancing the Undergraduate Hiring Application used across departments. I focus on improving usability, implementing workflows, and containerizing environments with Docker to ensure consistency and reliability. Previously, at Experian and Oasis Infobyte, I learnt CI/CD pipelines, AWS CloudWatch, and secure MERN-based development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              I'm driven by curiosity and continuous learning, thriving in Agile environments that encourage innovation and collaboration. I aim to build software solutions that are technically robust and create meaningful, real-world impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About



