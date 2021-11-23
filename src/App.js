import React from 'react';
import { Container, Grid } from '@mui/material';

import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Container>
      <Grid container >
        {/* First grid is for the profile and does not change with the screen size, second grid is for the remaining components and will take all the space */}
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile/>
        </Grid>
        <Grid item xs>

          <Router>
            {/* The portfolio and resume will only be visible from the routes */}

            {/* Switch has been replaced with Routes */}
            <Route path="/portfolio">
                <Portfolio/>
            </Route>
            <Route path="/">
              <Resume/>
            </Route>
        
          </Router>
          <Header/>
          
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
