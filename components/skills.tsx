"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, Code, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Brain,
    title: "Core ML",
    skills: [
      { name: "Supervised Learning", level: 90 },
      { name: "Unsupervised Learning", level: 85 },
      { name: "Model Evaluation", level: 88 },
      { name: "Feature Engineering", level: 92 },
    ],
  },
  {
    icon: Code,
    title: "Deep Learning",
    skills: [
      { name: "CNNs", level: 87 },
      { name: "RNNs/Transformers", level: 82 },
      { name: "Transfer Learning", level: 85 },
      { name: "Model Optimization", level: 80 },
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    skills: [
      { name: "Data Cleaning", level: 95 },
      { name: "EDA", level: 90 },
      { name: "Data Visualization", level: 88 },
      { name: "Statistical Analysis", level: 85 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: [
      { name: "Python/SQL", level: 92 },
      { name: "Git/GitHub", level: 88 },
      { name: "Docker", level: 75 },
      { name: "Cloud Platforms", level: 70 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{skill.name}</span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
