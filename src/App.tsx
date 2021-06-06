import React from 'react';
import ContactForm from './components/contact-form/ContactForm';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import SectionPrimary from './components/section-primary/SectionPrimary';
import SectionSecondary from './components/section-secondary/SectionSecondary';
import './App.css';

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <div className="ui three column centered grid">
        <div className="row">
          <div className="column">
            <SectionPrimary />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <SectionSecondary />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <ContactForm />
          </div>
        </div>        
      </div>
      <Footer />
    </div>
  );
}
export default App;
