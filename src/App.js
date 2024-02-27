
import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NoteNavBar2, UINewNote, NoteCardCollection, ProfileNavBar, HomeNavBar, HomePage, Profile} from "./ui-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditNote from './EditNote';
class App extends Component {
  render() {
  return (
    <div className="App"><header className="App-header">
      <Router>
      <Routes>
      <Route exact path='/' element={<div><HomeNavBar/><HomePage/></div>}/>
        <Route exact path='/pref' element={<div><NoteNavBar2/><NoteCardCollection/></div>}/>
        <Route exact path='/new' element={<UINewNote/>} />
    
        <Route exact path='/prof' element={<div><ProfileNavBar/><Profile/></div>}/>
       <Route exact path='/edit/:cid' element={<EditNote/>} />

         

        
      </Routes>
      </Router>
    </header></div>
    );
}
}

export default withAuthenticator(App);
//hello