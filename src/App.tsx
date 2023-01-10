import { Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { Navigation } from './Components/Navigation'

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={ <ProductsPage /> } />
        <Route path='/about' element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;
