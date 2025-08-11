"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

const skills = [
  { category: "Programming", items: ["Python", "SQL", "MySQL", "JavaScript"] },
  { category: "ML/AI", items: ["Scikit-learn", "TensorFlow", "PyTorch", "NLP", "Computer Vision"] },
  { category: "Data", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Visualization"] },
  { category: "Tools", items: ["Git/GitHub", "Jupyter", "Docker", "Linux", "VS Code"] },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  I'm a final-year AI/ML student with a deep passion for artificial intelligence, machine learning, and
                  data science. My journey in technology is driven by curiosity and the desire to create intelligent
                  systems that solve real-world problems.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  I specialize in developing machine learning models, implementing deep learning algorithms, and
                  extracting meaningful insights from complex datasets. My experience spans across various domains
                  including natural language processing, computer vision, and predictive analytics.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest research papers, contributing to open-source
                  projects, or experimenting with new ML frameworks and techniques.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                {skills.map((skillGroup, index) => (
                  <div key={skillGroup.category}>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
