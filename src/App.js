
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Main } from './components/Main';
import { Specials } from './components/Specials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookingSuccess } from './components/BookingSuccess';

function App() {
  return (
      <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reserve' element={<Main />} />
      <Route path='/specials' element={<Specials />} />
      <Route path='/booking_success' element={<BookingSuccess />} />
    </Routes>
    </>
  );
}

export default App;
