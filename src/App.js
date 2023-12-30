import './App.css';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes
}
  from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<h2>Inside search page</h2>} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
