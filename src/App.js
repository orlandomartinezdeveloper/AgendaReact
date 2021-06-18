import React from 'react';
import Header from './components/Header';
import Agenda from './components/Form/Agenda';
import Footer from './components/Footer';
import AppCSS from './App.module.css';
function App() {
  return (
    <div className={"App " + AppCSS.BackGround}>
      <Header />
      <Agenda />
      <Footer />
    </div>
  );
}

export default App;
