import React from 'react';
import logo from './logo.svg';
import './App.css';

import  ClickCounter  from "./hooksExercise";
import { Label, Note } from "./types";
import {dummyNotesList} from "./constants";

function App() {
  return (
    <div className='app-container'>
      <form className="note-form">
       <div><textarea placeholder="Note Title"></textarea></div>

       <div><textarea placeholder='Note Content'></textarea></div>
       
       <div>
       <select name ="label" id="label-select">
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                    <option value="study">Study</option>
                    <option value="other">Other</option>
        </select>
       </div>

       <div><button type="submit">Create Note</button></div>
      </form>
      
      <div className="notes-grid">

      {dummyNotesList.map((note) => (
        <div
          key={note.id}
          className="note-item">
          <div className='note-header'>
            <button>x</button>
            </div>
            <h2> {note.title} </h2>
            <p> {note.content} </p>
            <p> {note.label} </p>
          </div>
      ))}
      </div>
      <ClickCounter/>
    </div>
 
  );
 
}

export default App;
