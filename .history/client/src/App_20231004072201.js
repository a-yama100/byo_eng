// E:\programming\Project\byo_eng\client\src\App.js

import React from 'react';
import './App.css';
import Header from './component/Header';
import AdviceComponent from './component/AdviceComponent';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <AdviceComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
