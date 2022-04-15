import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage'
import ProjectsPage from './Pages/ProjectsPage'
import LoginPage from './Pages/LoginPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/projects" exact element={<ProjectsPage/>}/>
            <Route path="/login" exact element={<LoginPage/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
