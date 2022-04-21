import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Home from './components/Home';
import Topics from './components/Topics';

function App() {
  return (
 <div className='App'>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/topics" element={<Topics />}/>
      </Routes>
    </div>
  
  );
}

export default App;