
import React from 'react';
import './App.css';
import Context from './Context'
import Data from './data'
const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Adhithi Ravichandran"
  }
};

function App() {
  return (
      <div>
     <Context.Provider value={blogInfo}>
         <h2>Use Context Example Component</h2>
          <Data></Data>
    </Context.Provider>
      
    </div>
  );
}

export default App;
