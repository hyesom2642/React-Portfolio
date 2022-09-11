// > styles 
import './reset.css';

// > components 
import Gnb from './components/Gnb/Gnb';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Project from './pages/Project/Project';

// > react-router-dom@6 
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <>
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  )
}
export default App;
