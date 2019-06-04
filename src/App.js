import React from 'react';
import Header from './Header';
import Blog from './Blog';
import Projects from './Projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Display">
          <Route exact path="/" component={Blog} />
          <Route path="/Blog" component={Blog} />
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    </div>
  );
}

export default App;
