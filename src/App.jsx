import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pageone from './Pages/Pageone';
import Pagetwo from './Pages/Pagetwo';
import Pagethree from './Pages/Pagethree';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Pageone />} />
            <Route path="pagetwo" element={<Pagetwo />} />
            <Route path="pagethree" element={<Pagethree />} />
        </Routes>
    );
}

export default App;
