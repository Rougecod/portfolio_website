"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "Bachelor of Technology - AI & ML",
    organization: "XYZ Institute of Technology",
    period: "2021 - 2025",
    description:
      "Specialized in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and natural language processing.",
    details: [
      "CGPA: 8.7/10",
      "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, NLP, Data Structures",
      "Final Year Project: Automated Medical Diagnosis using Deep Learning",
    ],
  },
  {
    type: "experience",
    title: "ML Engineering Intern",
    organization: "TechCorp Solutions",
    period: "Jun 2024 - Aug 2024",
    description:
      "Developed and deployed machine learning models for customer behavior prediction and recommendation systems.",
    details: [
      "Built recommendation engine serving 10K+ daily users",
      "Improved model accuracy by 15% through feature engineering",
      "Collaborated with cross-functional teams using Agile methodology",
    ],
  },
  {
    type: "experience",
    title: "Data Science Intern",
    organization: "DataInsights Inc.",
    period: "Dec 2023 - Feb 2024",
    description:
      "Worked on data analysis and visualization projects for business intelligence and predictive analytics.",
    details: [
      "Analyzed customer data to identify trends and patterns",
      "Created interactive dashboards using Tableau and Power BI",
      "Developed predictive models for sales forecasting",
    ],
  },
  {
    type: "education",
    title: "Higher Secondary Education",
    organization: "ABC Higher Secondary School",
    period: "2019 - 2021",
    description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
    details: [
      "Percentage: 92%",
      "Subjects: Mathematics, Physics, Chemistry, Computer Science",
      "School Topper in Computer Science",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
            Experience & Education
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-500"></div>

              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center z-10">
                    {item.type === "education" ? (
                      <GraduationCap className="h-8 w-8 text-white" />
                    ) : (
                      <Briefcase className="h-8 w-8 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-4 w-4 text-cyan-500 mr-2" />
                        <span className="text-sm text-cyan-500 font-medium">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                      <h4 className="text-lg text-cyan-600 dark:text-cyan-400 mb-3">{item.organization}</h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
