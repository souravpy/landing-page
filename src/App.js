import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CallToAction from './components/CallToAction/CallToAction';
import Navigation from './components/Navigation/Navigation';
import MainComponent from './components/MainComponent/MainComponent';
import PropertyTypes from './components/PropertyTypes/PropertyTypes';
import SampleOMs from './components/SampleOMs/SampleOMs';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Hero />
      <MainComponent />
      <PropertyTypes />
      <SampleOMs />
      <CallToAction />
    </div>
  );
}

export default App;
