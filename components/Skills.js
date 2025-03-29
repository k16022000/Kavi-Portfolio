// components/Skills.js
export default function Skills() {
    const skills = [
      'React.js', 'Next.js', 'Node.js', 'TypeScript', 
      'Redux', 'REST APIs', 'MongoDB', 'Firebase'
    ]
  
    return (
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center"
              >
                <span className="text-gray-900 dark:text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }