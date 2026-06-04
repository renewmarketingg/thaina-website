import About from "./components/About"
import Approach from "./components/Approach"
import Consultation from "./components/Consultation"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Instagram from "./components/Instagram"
import Navbar from "./components/Navbar"
import Specialties from "./components/Specialties"
import WhatsAppFloat from "./components/ui/WhatsAppFloat"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties/>
        <Approach />
        <Instagram />
        <Consultation />
        <Footer />
        <WhatsAppFloat />
      </main>
    </>
  )
}

export default App
