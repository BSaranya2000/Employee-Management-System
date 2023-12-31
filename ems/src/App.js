
import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Login from './Login';
import List from './List';



function App() {
  return (
     <Router>
      <Routes>
       <Route exact path="/"  element={<Login/>} />
       <Route path='/list'  exact element={<List/>} />
       </Routes>
    </Router>
  );
}

export default App;
