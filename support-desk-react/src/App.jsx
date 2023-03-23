import React, { useState } from 'react';
import Header from './components/header/Header'
import People from './components/people/People'
import Footer from './components/footer/Footer'
import './App.scss';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header onSearch={setSearchTerm} />
      <main>
        <People searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
