"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="relative">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 z-50 origin-left"
          style={{ scaleX }}
        />

        <Header />

        <main>
          <Hero />
          <About />
          <Projects />
          <Achievements />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
