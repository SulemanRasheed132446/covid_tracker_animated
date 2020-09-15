import React from 'react';
import './App.css';
import { Info } from './components/Info/Info'
import { Header } from './components/Header/Header'
import { ChartSearchBox } from './components/ChartSearchBox/ChartSearchBox'
import { Footer } from './components/Footer/Footer'
import { CovidProvider } from './context/CovidProvider'
function App() {
  return (
    <CovidProvider className="App">

      <Header />
      <ChartSearchBox />
      <Info />
      <Footer />
    </CovidProvider>
  );
}

export default App;
