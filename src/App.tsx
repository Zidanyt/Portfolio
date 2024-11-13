import Banner from "./components/Banner";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Banner_serviço from "./components/Banner_serviço";
import Stacks from "./components/Stacks";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {

  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Stacks />
      <ContactSection />
      <Banner_serviço/>
      <Projects />
      <Team />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

