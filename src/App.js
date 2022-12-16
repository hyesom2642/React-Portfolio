// > styles 
import './reset.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

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
      <ThemeProvider theme={theme}>
        <Gnb />
        <Routes>
          <Route path="/" element={<Home />} /> {/* main 페이지 */}
          <Route path="/profile" element={<Profile />} /> {/* profile 페이지 */}
          <Route path="/project" element={<Project />} /> {/* project 페이지 */}
        </Routes>
      </ThemeProvider>
    </>
  )
}
export default App;
