import './App.css';
import React from 'react' ;
import Navbar from 'C:/Users/TashikMoin/Desktop/learning_reactjs/src/components/Navbar.js';
import Users from 'C:/Users/TashikMoin/Desktop/learning_reactjs/src/components/Users.js' ;
class App extends React.Component {
  render()
  { 
    return (
      <div>
        <Navbar title="errabuzz"/>
        <div className="container">
          <Users/>
        </div>
        
      </div>
    );
  }
}
export default App;
