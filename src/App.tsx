import './App.css'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <main className="app">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ScrollReveal delay={100}>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Features />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Pricing />
      </ScrollReveal>
      <ScrollReveal direction="right" delay={100}>
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  )
}

export default App
