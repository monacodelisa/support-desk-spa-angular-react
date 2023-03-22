// import logo from './logo.svg';
import Header from './components/header/Header'
import People from './components/people/People'
import Footer from './components/footer/Footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <People />
      </main>
      <Footer />
    </div>
  );
}

export default App;
