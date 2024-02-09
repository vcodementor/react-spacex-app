import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import LaunchPage from '../pages/SpaceX/LaunchPage';
import LaunchDetailPage from '../pages/SpaceX/LaunchDetailPage';
import "./App.css";

const App = () => {
  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LaunchPage/>} />
            <Route path="/launch/:id" element={<LaunchDetailPage/>} />
          </Routes>
        </Layout>
      </Router>
  );
};

export default App;