import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <Main />
    <Footer />
    </>
  );
}

export default App;
