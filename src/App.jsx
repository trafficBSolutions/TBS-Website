import { Routes, Route, Link} from 'react-router-dom'
import { Apply, Home, TrafficControl } from './pages';
import axios from 'axios';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast'


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true


function App() {
  return (
    <>
<Navbar />
  <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
  <Routes>
    <Route path="/applynow" element={<Apply/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/trafficcontrol" element={<TrafficControl/>}/>
  </Routes>
</>

  );
}

export default App;
