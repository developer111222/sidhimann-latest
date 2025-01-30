import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import CauseDetails from './component/cause-details/CauseDetails';
import TeamDetails from './component/team-details/TeamDetails';
import EventDetails from './component/event-details/EventDetails';
import DonationPage from './component/donation-page/DonationPage';
import PhotoGallery from './component/photo-gallery/PhotoGallery';
import BlogPage from './component/blog/single blog/BlogPage';
import Contact from './component/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Header is now inside the Router */}
        <Header />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cause-details" element={<CauseDetails />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer is now inside the Router */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;