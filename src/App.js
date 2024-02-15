import './App.css';
import Heading from './Component/Heading';
import Navbar1 from './Component/Navbar1';
import Marque from './Component/Marque';
import Carousel from './Component/Carousel';
import Footer from './Component/Footer';
import AboutUs from './Component/AboutUs';
import { useState } from 'react';
import ContactUs from './Component/ContactUs';
import Courses from './Component/Courses';


function App() {
  const [showPage , setShowPage ] = useState("Home") 
  const onClick = (value) => {
    setShowPage(value)
  }
  return (
  
    <div className="App">  
    <Heading/>
    <Navbar1 onClick={onClick}/>
    <Marque/>
    {showPage === "Home" && <Carousel/>}

    {showPage === "Courses" &&  <Courses/>}
   
    {showPage === "ContactUs" && <ContactUs/>}

    {showPage === "AboutUs" && <AboutUs/>}

    <Footer onClick={onClick} />
    
    </div>
  );
}

export default App;
