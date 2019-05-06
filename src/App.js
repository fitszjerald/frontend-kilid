import React from 'react';



import './bootstrap/bootstrap.min.css';
import './bootstrap/bootstrap-rtl.min.css'
import './style.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import TextSection from './components/TextSection';
import CitySelect from './components/CitySelect';
import Image from './components/Image';
import ImageMob from './components/ImageMob';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection/>
      <TextSection/>
      <CitySelect/>
      <Image/>
      <ImageMob/>
      <Footer/>
    </div>
  );
}

export default App;
