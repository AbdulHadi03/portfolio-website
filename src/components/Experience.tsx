const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer – Graduate Assistant',
      company: 'UIC College of Engineering, Chicago, IL',
      period: 'June 2025 – Present',
      description: [
        'Improved faculty accuracy by 20% by upgrading the undergraduate hiring app frontend and building the Business Manager module',
        'Containerized local dev with Docker, cutting developer setup time by ~25%',
        'Reduced manual entry via automated submission/approval workflows by designing and testing timesheet logic',
        'Increased reliability/security by deploying SSL and validating VM availability & app mapping via SSH',
      ],
    },
    {
      title: 'CS Graduate Research Assistant',
      company: 'UI HEALTH, Chicago, IL',
      period: 'April 2025 – August 2025',
      description: [
        'Conducted 2D/3D Digital Image Correlation experiments on spine segments',
        'Delivered quantitative strain results with custom Python/MATLAB visualizations, improving interpretation efficiency by 15%',
        'Automated processing of 5,000+ image frames using NCorr and DuoDIC to generate strain-field datasets',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Experian, Hyderabad, India',
      period: 'April 2024 – June 2024',
      description: [
        'Gained exposure to Python, PySpark, and AWS',
        'Collaborated with Ascend Ops in Agile stand-ups, accelerating onboarding and project readiness',
        'Learned silent billing configurations and UTC standardization, contributing to >95% accurate payment processing',
        'Built hands-on exposure to CI/CD automation using Docker, Jenkins, and AWS CloudWatch for workflow orchestration',
      ],
    },
    {
      title: 'Web Development Intern',
      company: 'Oasis Infobyte, Hyderabad, India',
      period: 'October 2023 – November 2023',
      description: [
        'Built a MERN-based login authentication system (MongoDB, Express, React, Node)',
        'Implemented user auth and session management with a responsive UI',
        'Designed MongoDB schemas for secure credential storage and employed Node.js for server-side logic and request management',
      ],
    },
  ];

  return (
    <div className="section bg-gray-900">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Work <span className="text-primary-400">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-400">{exp.title}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <span className="text-gray-400 font-semibold">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="absolute left-0 top-20 bottom-0 w-0.5 bg-gray-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;