import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Dashboard />
        <Routes>
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
