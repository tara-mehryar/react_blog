import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import TopicList from './Components/TopicList/TopicList.jsx';



export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>

      </Routes>
    </div>
    </BrowserRouter>
  );
}
