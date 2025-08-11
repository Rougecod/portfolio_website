"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "Sentiment Analysis for Social Media",
    description: "Deep learning model for real-time sentiment analysis of social media posts using LSTM and BERT.",
    image: "/sentiment-analysis-dashboard.png",
    tags: ["NLP", "Deep Learning", "Python", "BERT"],
    overview:
      "A comprehensive sentiment analysis system that processes social media data in real-time to determine public opinion and emotional trends.",
    problem:
      "Social media platforms generate massive amounts of textual data daily. Understanding public sentiment towards brands, products, or events is crucial for businesses and researchers.",
    approach:
      "Implemented a hybrid approach combining LSTM networks for sequential processing and BERT for contextual understanding. The model was trained on a dataset of 100K+ labeled social media posts.",
    tools: ["Python", "TensorFlow", "BERT", "Pandas", "Flask"],
    results: "Achieved 92% accuracy on test data with real-time processing capability of 1000+ posts per minute.",
    learnings:
      "Gained deep understanding of transformer architectures and the importance of data preprocessing in NLP tasks.",
  },
  {
    id: 2,
    title: "Computer Vision for Medical Diagnosis",
    description: "CNN-based system for automated detection of pneumonia in chest X-rays with 94% accuracy.",
    image: "/placeholder-yh440.png",
    tags: ["Computer Vision", "CNN", "Healthcare", "PyTorch"],
    overview: "An AI-powered diagnostic tool that assists radiologists in detecting pneumonia from chest X-ray images.",
    problem:
      "Manual analysis of chest X-rays is time-consuming and prone to human error. There's a need for automated screening tools to assist medical professionals.",
    approach:
      "Developed a convolutional neural network using transfer learning with ResNet-50 as the base model. Applied data augmentation and implemented attention mechanisms for better interpretability.",
    tools: ["PyTorch", "OpenCV", "PIL", "Matplotlib", "Streamlit"],
    results: "Achieved 94% accuracy, 91% sensitivity, and 96% specificity on a dataset of 5,000+ chest X-rays.",
    learnings:
      "Learned about medical imaging standards, the importance of model interpretability in healthcare, and ethical considerations in AI-assisted diagnosis.",
  },
  {
    id: 3,
    title: "Stock Price Prediction System",
    description: "Time series forecasting model using LSTM networks to predict stock prices with technical indicators.",
    image: "/stock-prediction-dashboard.png",
    tags: ["Time Series", "LSTM", "Finance", "Data Analysis"],
    overview: "A machine learning system that predicts stock prices using historical data and technical indicators.",
    problem:
      "Stock market prediction is challenging due to high volatility and numerous influencing factors. Investors need tools to make informed decisions.",
    approach:
      "Built an LSTM-based model incorporating multiple technical indicators (RSI, MACD, Bollinger Bands) and sentiment analysis from financial news.",
    tools: ["Python", "TensorFlow", "yfinance", "TA-Lib", "Plotly"],
    results: "Achieved RMSE of 2.3% on test data with consistent performance across different market conditions.",
    learnings:
      "Understood the complexity of financial markets and the importance of feature engineering in time series prediction.",
  },
  {
    id: 4,
    title: "Recommendation Engine",
    description: "Collaborative filtering system for e-commerce product recommendations using matrix factorization.",
    image: "/placeholder-vyu9i.png",
    tags: ["ML", "Recommendation", "Collaborative Filtering", "Python"],
    overview:
      "A personalized recommendation system that suggests products to users based on their preferences and behavior patterns.",
    problem:
      "E-commerce platforms need to provide personalized experiences to increase user engagement and sales conversion rates.",
    approach:
      "Implemented collaborative filtering using matrix factorization techniques (SVD) combined with content-based filtering for cold start problems.",
    tools: ["Python", "Scikit-learn", "Surprise", "Pandas", "FastAPI"],
    results: "Improved click-through rate by 23% and conversion rate by 15% in A/B testing scenarios.",
    learnings:
      "Gained insights into recommendation algorithms, handling sparse data, and the cold start problem in recommendation systems.",
  },
  {
    id: 5,
    title: "Chatbot with Natural Language Understanding",
    description: "Intelligent chatbot using transformer models for customer service automation.",
    image: "/chatbot-conversation-interface.png",
    tags: ["NLP", "Transformers", "Chatbot", "Customer Service"],
    overview:
      "An AI-powered chatbot that understands natural language queries and provides intelligent responses for customer service.",
    problem:
      "Customer service teams are overwhelmed with repetitive queries. There's a need for automated systems that can handle common questions effectively.",
    approach:
      "Fine-tuned a pre-trained transformer model on customer service conversations and implemented intent classification with entity recognition.",
    tools: ["Python", "Transformers", "spaCy", "Rasa", "MongoDB"],
    results: "Achieved 89% intent classification accuracy and reduced customer service workload by 40%.",
    learnings:
      "Learned about conversational AI, intent recognition, and the challenges of maintaining context in multi-turn conversations.",
  },
  {
    id: 6,
    title: "Data Pipeline for Real-time Analytics",
    description: "Scalable ETL pipeline for processing streaming data with Apache Kafka and Spark.",
    image: "/data-pipeline-architecture.png",
    tags: ["Data Engineering", "Apache Kafka", "Spark", "ETL"],
    overview:
      "A robust data pipeline system that processes streaming data in real-time for analytics and machine learning applications.",
    problem:
      "Organizations need to process large volumes of streaming data efficiently to make real-time decisions and maintain competitive advantage.",
    approach:
      "Built a scalable ETL pipeline using Apache Kafka for data streaming, Apache Spark for processing, and implemented data quality checks and monitoring.",
    tools: ["Apache Kafka", "Apache Spark", "Python", "Docker", "PostgreSQL"],
    results: "Successfully processed 10M+ events per day with 99.9% uptime and sub-second latency.",
    learnings:
      "Gained experience in distributed systems, stream processing, and the importance of data quality in real-time applications.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => setSelectedProject(project)}
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 dark:text-white">{project.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => setSelectedProject(project)} className="flex-1">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Overview</h3>
                  <p className="text-slate-600 dark:text-slate-300">{selectedProject.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Problem Statement</h3>
                  <p className="text-slate-600 dark:text-slate-300">{selectedProject.problem}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Approach</h3>
                  <p className="text-slate-600 dark:text-slate-300">{selectedProject.approach}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <Badge key={tool} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Results</h3>
                  <p className="text-slate-600 dark:text-slate-300">{selectedProject.results}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Learnings</h3>
                  <p className="text-slate-600 dark:text-slate-300">{selectedProject.learnings}</p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
