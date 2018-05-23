import React from 'react';
import Header from '../components/Header';
import FrontSection from '../containers/FrontSection';
import IntroSection from '../containers/IntroSection';
import VideoSection from '../containers/VideoSection';
import VenuesSection from '../containers/VenuesSection';
import SponsorsSection from '../containers/SponsorsSection';
import SuperCarousel from '../components/SuperCarousel';
import HowToSubscribeSection from '../containers/HowToSubscribeSection';
import ContactSection from '../containers/ContactSection';
import SocialMediaSection from '../containers/SocialMediaSection';
import Footer from '../components/Footer';

const HomePage = () => (
  <div>
    <Header />
    <FrontSection />
    <IntroSection />
    <VideoSection />
    <VenuesSection />
    <HowToSubscribeSection />
    <SuperCarousel />
    <SponsorsSection />
    <ContactSection />
    <SocialMediaSection />
    <Footer />
  </div>
);

export default HomePage;
