import About from "./components/About";
import Offer from "./components/Offer";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Footer from "./components/Footer"
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <> 
      <Header />
      <Offer />
      <About />
      <Slide/>
      <Footer/>
    </>
  )
}
export default App;