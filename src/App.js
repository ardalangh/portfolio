import './App.css';
import LocationPage from './pages/LocationPage';
import MainPage from './pages/MainPage';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';


function App() {



  return (

      <BrowserRouter>
        <Routes>-
          <Route path="home" element={<MainPage/>} />
          <Route path="projects" element={<ProjectsPage/>} />
          <Route path="location" element={<LocationPage/>} />
        </Routes>
      </BrowserRouter>






  );
}

export default App;
