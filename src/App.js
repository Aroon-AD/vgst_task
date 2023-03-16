
import './App.css';
// import * as te from 'tw-elements';
import Home from './components/Home';
import { CheckOutModel } from "./components/CheckOutModel"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<CheckOutModel />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
