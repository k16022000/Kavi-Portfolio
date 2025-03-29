import { useTheme } from '../context/ThemeContext'
import { BriefcaseIcon } from '@heroicons/react/24/outline'

export default function Experience() {
  const { theme } = useTheme()
  const experiences = [
    {
      company: "Vientitydata",
      role: "Frontend Developer",
      duration: "Oct 2023 - Present",
      points: [
        "Built reusable React components reducing code redundancy by 40%",
        "Implemented cookie-based authentication",
        "Optimized mobile load times by 25%"
      ]
    },
    {
      company: "HRLytics Pvt Ltd",
      role: "Frontend Developer",
      duration: "Dec 2022 - Oct 2023",
      points: [
        "Improved UI efficiency by 30%",
        "Integrated SCORM packages",
        "Reduced API load times by 20%"
      ]
    }
  ]

  return (
    <section className={`py-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Professional Experience
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 dark:bg-gray-600 transform -translate-x-1/2" />
          
          {experiences.map((exp, idx) => (
            <div key={idx} className={`mb-8 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 p-6 rounded-lg shadow-lg ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'}`}>
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-full ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-900'}`}>
                    <BriefcaseIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                  </div>
                </div>
                <ul className="list-disc pl-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}