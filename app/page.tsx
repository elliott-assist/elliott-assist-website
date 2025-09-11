"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Users,
  Globe,
  MessageSquare,
  Mail,
  Database,
  Workflow,
  Star,
  Play,
  ChevronRight,
  Bot,
  Settings,
  BarChart3,
  Award,
  Headphones,
} from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-sky-500 text-white py-3 px-4 text-center"
      >
        <p className="text-sm font-medium">
          Starte mit Elliott Assist - Jetzt Anmelden und Zeit beim Kundensupport sparen
          <Button variant="ghost" size="sm" className="ml-2 text-white hover:text-indigo-100">
            Anmelden <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </p>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold text-gray-900">Elliott Assist</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#produkt" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Produkt
                </Link>
                <Link href="#preise" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Preise
                </Link>
                <Link href="#support" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Support
                </Link>
                <Link href="#login" className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-sky-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center">
          <!-- <motion.div variants={fadeInUp} className="mb-6">
              <Badge variant="secondary" className="bg-lime-100 text-lime-800 border-lime-200">
                <Star className="w-4 h-4 mr-1" />
                Über 500 zufriedene Kunden
              </Badge>
            </motion.div> -->

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bearbeite deine Kundenanfragen <span className="text-indigo-600">67% schneller</span> mit AI - direkt in
              Gmail
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Skaliere deinen Support mit AI und spare Zeit. Automatisiere Konversationen in Chat, E-Mail und sozialen
              Medien mit unserem DSGVO-konformen AI Agent.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 px-8 py-3 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Demo vereinbaren
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Product Visual & Key USPs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-indigo-100 to-sky-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <div className="flex items-center mb-3">
                      <Mail className="h-5 w-5 text-indigo-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">Gmail Integration</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-lime-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center">
                      <Bot className="h-8 w-8 text-indigo-600 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">AI Antwort generiert</p>
                        <p className="text-xs text-gray-500">Basierend auf Wissensdatenbank</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-indigo-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-sky-200 rounded-full opacity-50"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-lime-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Plug & Play Setup</h3>
                  <p className="text-gray-600">
                    Sofort startklar mit Google Workspace App. Keine komplizierte Installation oder Einrichtung
                    erforderlich.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Made in Germany</h3>
                  <p className="text-gray-600">
                    DSGVO konformes Hosting und Architektur. Ihre Daten bleiben sicher in Deutschland.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Testimonials Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6">
              "Seitdem wir Elliott Assist einsetzen, sparen wir 15 Stunden pro Woche im Support."
            </blockquote>
            <cite className="text-sky-100 text-lg">Sarah Mueller, E-Commerce Gründerin</cite>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Deep Product Understanding */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tieferes Produktverständnis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere AI versteht Ihr Business und liefert präzise, einheitliche Antworten
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Wissensdatenbank</h3>
                  <p className="text-gray-600 mb-6">
                    Einheitliche Antworten dank Repository. Automatisches FAQ-Matching & konfigurierbare
                    Wissensdatenbank.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-lime-500 mr-2" />
                      Automatisches FAQ-Matching
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-lime-500 mr-2" />
                      Konfigurierbare Datenbank
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gmail Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Kein neues Interface, kein Tab-Wechsel. Direkter Zugriff dort, wo du arbeitest.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-lime-500 mr-2" />
                      Nahtlose Integration
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-lime-500 mr-2" />
                      Gewohntes Interface
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Workflow className="h-8 w-8 text-lime-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Bessere Qualität</h3>
                  <p className="text-gray-600 mb-6">
                    Schnellere Einarbeitung, bessere Qualität. Klar strukturierte Workflows & transparente Antworten.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-lime-500 mr-2" />
                      Strukturierte Workflows
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="h-4 w-4 text-lime-500 mr-2" />
                      Transparente Antworten
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Erfolgsgeschichten unserer Kunden</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "E-Commerce Shop",
                problem: "15h/Woche für repetitive Anfragen",
                solution: "AI-automatisierte Antworten",
                result: "67% weniger Supportzeit",
                icon: BarChart3,
              },
              {
                company: "SaaS Startup",
                problem: "Inkonsistente Antwortqualität",
                solution: "Einheitliche Wissensdatenbank",
                result: "95% Kundenzufriedenheit",
                icon: Users,
              },
              {
                company: "Online Service",
                problem: "Lange Antwortzeiten",
                solution: "Sofortige AI-Responses",
                result: "80% schnellere Reaktion",
                icon: Clock,
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                        <study.icon className="h-5 w-5 text-indigo-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{study.company}</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm font-medium text-red-600">Problem:</span>
                        <p className="text-sm text-gray-600 mt-1">{study.problem}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-blue-600">Lösung:</span>
                        <p className="text-sm text-gray-600 mt-1">{study.solution}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-lime-600">Ergebnis:</span>
                        <p className="text-sm font-semibold text-gray-900 mt-1">{study.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Onboarding Flow */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unterstütztes Onboarding durch unser Team
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Einfaches Hochladen des Repository</h3>
                    <p className="text-gray-600">Laden Sie Ihre bestehenden FAQ und Dokumente hoch</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Schnelle Integration</h3>
                    <p className="text-gray-600">Dank Google Workspace App in wenigen Minuten einsatzbereit</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparente Übersicht</h3>
                    <p className="text-gray-600">Durch die Repository Lösung behalten Sie stets den Überblick</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Repository Upload</span>
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Gmail Integration</span>
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
                    <span className="text-sm font-medium text-indigo-700">AI Training</span>
                    <div className="w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-50">
                    <span className="text-sm font-medium text-gray-700">Live Testing</span>
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unterstützt Ihr Wachstum</h2>
            <p className="text-xl text-gray-600">Egal ob Sie alleine arbeiten oder ein Team haben</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Headphones,
                title: "Schnelle Integration",
                description: "Unterstützt durch unser Team",
              },
              {
                icon: Globe,
                title: "Multi Language",
                description: "Support in 12 Sprachen",
              },
              {
                icon: MessageSquare,
                title: "Multi Channel",
                description: "Chat, E-Mail, Social Media",
              },
              {
                icon: Shield,
                title: "DSGVO Konform",
                description: "Hosting in Deutschland",
              },
              {
                icon: BarChart3,
                title: "Reduzierte Kosten",
                description: "Mehr Zeit für Wachstumsthemen",
              },
              {
                icon: Settings,
                title: "Einfaches Management",
                description: "Intuitive Repository-Verwaltung",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Compliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sicherheit & Compliance</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GDPR / DSGVO</h3>
              <p className="text-gray-600">
                Vollständige Unterstützung der EU Datenschutzverordnung mit Hosting in Deutschland
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-10 w-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI EU Konform</h3>
              <p className="text-gray-600">
                Transparente Nutzung von AI, abgestimmt nach den EU Standards für AI Nutzung
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SOC2 Zertifiziert</h3>
              <p className="text-gray-600">Höchste Sicherheitsstandards für Ihre sensiblen Kundendaten</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Starte jetzt mit Elliott Assist</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Reduziere deine Supportlast. Steigere deine Qualität. Gewinne Zeit für Wachstum.
            </p>
            <p className="text-lg text-indigo-200 mb-10 max-w-3xl mx-auto">
              Klare Workflows für den Kundensupport ermöglichen dir Zeit zu sparen und deinen Kunden den bestmöglichen
              Kundensupport zu bieten
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-4 text-lg">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg bg-transparent"
              >
                Demo vereinbaren
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Elliott Assist</span>
              </div>
              <p className="text-gray-400">AI-powered Customer Support für moderne Unternehmen</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Preise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Integration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Unternehmen</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Karriere
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elliott Assist. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
