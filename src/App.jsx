import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { BrowserRouter, Routes } from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <h1 style={{ padding: '200px 35%' }}>This is where your pages will appear</h1>
    </div>
    </BrowserRouter>
  );
}
