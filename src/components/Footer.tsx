import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/AbdulHadi03', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mohammed--abdulhadi/', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:moha208@uic.edu', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Mohammed Abdulhadi. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
