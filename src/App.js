import React from 'react';
import Header from './Header';
import Blog from './Blog';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Display">
          <Route path="/" component={Blog} />
        </div>
      </Router>
    </div>
  );
}

export default App;
