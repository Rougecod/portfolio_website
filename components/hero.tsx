"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6">Mayur V Udupa</h1>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-medium">
              Final-year AI/ML Student | Building intelligent systems and data-driven solutions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about machine learning, deep learning, and data science. I love solving complex problems
              through intelligent algorithms and turning data into actionable insights that drive real-world impact.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg"
            >
              Contact Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-950 px-8 py-3 text-lg"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="https://github.com/mayurudupa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/mayurudupa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("#about")}
              className="text-slate-400 hover:text-cyan-500 transition-colors duration-200"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
