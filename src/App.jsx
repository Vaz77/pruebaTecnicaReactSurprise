import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <>
    <Routes>
    <Route path="/"element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
