import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-200 dark:bg-gray-700"
        />
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600"
        >
        <img
          src="../assets/heroimage.jpeg" // Change to your actual image path
          alt="Profile"
          className="w-full h-full object-cover"
        />
        </motion.div> */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frontend Developer
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Building beautiful and performant web experiences
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
