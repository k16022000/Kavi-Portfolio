// components/AnimateOnScroll.js
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AnimateOnScroll({ children }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}