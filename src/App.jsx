import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen bg-black bg-opacity-95 text-gray-100">
      <Header />
      <div className="container mx-auto max-w-5xl px-8 sm:px-6 lg:px-8 py-8">
        <main className="mt-24 max-w-3xl mx-auto">
          <div id="profile">
            <Profile />
          </div>
          <div id="about">
            <About />
          </div>
          <Experience />
          <div id="projects">
            <Skills />
          </div>
          <Contact />
        </main>
      </div>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
