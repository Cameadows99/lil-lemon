
import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { Main } from './components/Main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingSuccess } from './components/BookingSuccess';

function App() {
  return (
      <>
    <Header />
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reserve' element={<Main />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/booking_success' element={<BookingSuccess />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
