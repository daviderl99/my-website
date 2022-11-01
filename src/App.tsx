import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2192FF'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/cv" element={''} />
            <Route path="/blog" element={''} />
            <Route path="/about" element={''} />
            <Route path="/" element={''} />
            <Route element={''} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
