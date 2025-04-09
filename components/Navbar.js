import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Kaviyarasu
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}