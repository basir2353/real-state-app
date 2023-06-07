import { Hero } from "./Components/Hero/hero";
import Header from "./Components/header/header";
import Companise from "./Components/Compaines/companise";
import "./App.css";
import Residences from "./Components/Residences/residences";
import Value from "./Components/values/value";
import Contact from "./Components/contact/contact";
import Getstarted from "./Components/getstarrted/getstarted";
import Footer from "./Components/footer/footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="White-gradient"/>
        <Header />
        <Hero />
      
      </div>
      <Companise />
      <Residences/>
      <Value/>
      <Contact/>
      <Getstarted/>/
      <Footer/>

    </div>
  );
}

export default App;
