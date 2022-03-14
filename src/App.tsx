import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import { Home } from './Pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'home'} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
