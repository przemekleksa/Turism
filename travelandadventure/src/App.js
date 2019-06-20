import React from 'react';

import { BrowserRouter, Switch, Route }from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';


function App() {
  return (
    <div className="app">
     <BrowserRouter>
      <Navbar />
        <Switch>
            <Route path="/" component={Homepage} exact />
        </Switch>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
