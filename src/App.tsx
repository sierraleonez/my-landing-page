import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LandingPage/>}/>
        <Route path={'home'} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const LandingPage = () => {
  return (
    <div>
      This is landing
    </div>
  )
}

export default App;
