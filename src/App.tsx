import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import { Home, Landing } from './Pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing/>}/>
        <Route path={'home'} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
