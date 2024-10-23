import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import Timer from './components/Timer';
import Calculator from './components/Calculator';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<ToDo />} />
                <Route path="/todo" element={<ToDo />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
