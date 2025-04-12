import React from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Aids from './pages/Aids';  
import Entc from './pages/Entc';
import Navbar from './pages/Navbar';
import ApplyNowButton from './components/ApplyNowButton';
import Bca from './pages/IntegratedMcaBca';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/aids" element={<PageWithDynamicTitle title="AIDS" />} />
          <Route path="/entc" element={<PageWithDynamicTitle title="ENTC" />} />
          <Route path="/bca" element={<PageWithDynamicTitle title="Bca" />} />
        </Routes>
        <ApplyNowButton />
      </div>
    </Router>
  );
}

// Component to handle dynamic title
function PageWithDynamicTitle({ title }) {
  const dynamicTitle = `ICEM | ${title}`;

  return (
    <>
      <Helmet>
      <title>{dynamicTitle}</title>
      </Helmet>
      {title === "AIDS" && <Aids />} 
      {title === "ENTC" && <Entc />}
      {title === "Bca" && <Bca />}
    </>
  );
}

export default App;
