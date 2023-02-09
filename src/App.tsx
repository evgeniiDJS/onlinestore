import { Routes, Route } from 'react-router-dom'
import { MenPage } from './pages/MenPage';
import { WomenPage } from './pages/WomenPage';
import { Navigation } from './Components/Navigation'
import { SalePage } from './pages/SalePage';
import { StocksPage } from './pages/StocksPage';
import { Footer } from './Components/Footer';
import NavState from './context/navState';
import MainMenu from './Components/MainMenu';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <NavState>
        <MainMenu />
      </NavState>
      <Routes>
        <Route path='/' element={ <WomenPage /> } />
        <Route path='/men' element={ <MenPage /> } />
        <Route path='/sale' element={ <SalePage /> } />
        <Route path='/stocks' element={ <StocksPage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
