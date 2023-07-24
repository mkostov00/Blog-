import React from 'react';
import './App.css';
import { Button, Typography, responsiveFontSizes } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import Header from './common/Header';



function App() {
  return (
  <>  
    <Header />
    <AppRoutes />
  </>
  );
}

export default App;
