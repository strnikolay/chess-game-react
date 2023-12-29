import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./style/reset.css";
import "./style/index.css";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="game" element={<Board/>} />
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
