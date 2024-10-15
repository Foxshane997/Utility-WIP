import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import ToDo from './components/ToDo';
import Footer from './components/Footer';
import Timer from './components/Timer';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/todo" element={<ToDo />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/timer" element={<Timer />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
