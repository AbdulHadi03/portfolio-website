import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/AbdulHadi03', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohammed--abdulhadi/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:moha208@uic.edu', label: 'Email' },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
            Mohammed Abdul Hadi
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4">
            Software Engineer & AI/ML Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Building scalable, intelligent software solutions powered by clean architecture and modern engineering.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
            <a
              href="/Resume_Mohammed_AbdulHadi.pdf"
              download
              className="px-8 py-3 border-2 border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={label}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
