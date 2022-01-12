import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import List from './components/List';
import Range from './components/Range';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/range" element={<Range />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
