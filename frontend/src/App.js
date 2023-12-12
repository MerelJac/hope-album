import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
