"use client"

import type React from "react"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 2000)
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto">
            Let's build something intelligent together. I'm always open to discussing new opportunities and interesting
            projects.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-cyan-500 mr-4" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Email</p>
                      <p className="text-slate-600 dark:text-slate-300">mayur.udupa@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-cyan-500 mr-4" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Location</p>
                      <p className="text-slate-600 dark:text-slate-300">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/mayurudupa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mayurudupa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-lg text-white">
                <h4 className="text-lg font-semibold mb-2">Ready to collaborate?</h4>
                <p className="text-cyan-100">
                  I'm always excited to work on innovative AI/ML projects and contribute to meaningful solutions. Let's
                  discuss how we can work together!
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send me a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="flex items-center text-green-600 dark:text-green-400">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Message sent successfully!</span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center text-red-600 dark:text-red-400">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <span>Failed to send message. Please try again.</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
