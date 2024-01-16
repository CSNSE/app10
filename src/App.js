
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NoteNavBar2, UINewNote, NoteCardCollection} from "./ui-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditNote from './EditNote';
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Router>
      <Routes>
        <Route exact path='/' element={<div><NoteNavBar2/><NoteCardCollection/></div>}/>
        <Route exact path='/new' element={<UINewNote/>} />
       <Route exact path='/edit/:cid' element={<EditNote/>} />
         

        
      </Routes>
      </Router>
    </header></div>
    );
}
}

export default withAuthenticator(App);
//hello