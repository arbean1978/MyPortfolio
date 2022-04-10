import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection ] = useState("About Me");
  const [navSections] = useState([
    "About Me",
    "Portfolio",
    "Contact",
    "Resume",
  ]);