import React from 'react';





import MainSection from './components/MainSection';
import TextSection from './components/TextSection';
import CitySelect from './components/CitySelect';
import Image from './components/Image';
import ImageMob from './components/ImageMob';
import Footer from './components/Footer'

function MainHome() {
  return (
    <div className="App">
      
        <MainSection/>
        <TextSection/>
        <CitySelect/>
        <Image/>
        <ImageMob/>
        <Footer/>
      
    </div>
  );
}

export default MainHome;
