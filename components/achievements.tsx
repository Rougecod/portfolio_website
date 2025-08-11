"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, FolderOpen, Calendar, Award } from "lucide-react"

const achievements = [
  {
    icon: Users,
    label: "Happy Clients",
    value: 25,
    suffix: "+",
  },
  {
    icon: FolderOpen,
    label: "Projects Completed",
    value: 50,
    suffix: "+",
  },
  {
    icon: Calendar,
    label: "Years of Experience",
    value: 2,
    suffix: "",
  },
  {
    icon: Award,
    label: "Certifications",
    value: 8,
    suffix: "",
  },
]

function Counter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">Achievements</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  <Counter value={achievement.value} />
                  {achievement.suffix}
                </div>
                <div className="text-lg opacity-90">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
