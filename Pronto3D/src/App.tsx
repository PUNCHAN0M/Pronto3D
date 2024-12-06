import './App.css'
import { Routes ,BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import WebcamComponent from './ScanQRCodePage'
function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/camera" element={<WebcamComponent/>}></Route>
      </Routes>
  </BrowserRouter>
  )}

export default App
