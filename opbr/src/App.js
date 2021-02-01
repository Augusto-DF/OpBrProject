import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChampsAnalytics from './Components/Champs/ChampsAnalytics';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/champs/*" element={<ChampsAnalytics />} />
          {/*<Route path="/champs/:id" element={<ChampDetails />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
