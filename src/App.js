import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/Searchpage';
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
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
