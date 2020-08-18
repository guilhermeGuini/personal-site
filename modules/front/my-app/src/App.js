
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

export default function App() {

  return (
    <Router>
      <div className="clear-margin">
        <Header />
        <Main />
        <Footer />
      </div >
    </Router>
  );
}