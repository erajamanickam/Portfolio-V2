import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <>
      <div className='bg-slate-800'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prod" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
