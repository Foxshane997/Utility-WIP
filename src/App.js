import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import ToDo from './components/ToDo'; 

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                {/* <Route path="/" element={<h1>Home</h1>} /> */}
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<ToDo />} />
            </Routes>
        </Router>
    );
};

export default App;
