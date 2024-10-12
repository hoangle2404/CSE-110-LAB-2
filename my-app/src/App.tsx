import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import  ClickCounter  from "./hooksExercise";
import { Label, Note } from "./types";
import {dummyNotesList} from "./constants";
import { useState } from 'react';

function App() {
  //favorite note
  //favortie list, containing all the notes that are set favorite
  //  const [isFav, setFavorite] = useState(false);
  //add the new note as favorite
  const [favList, setFavList] = useState<Note[]>([]);


  function Heart({n}: {n: Note}) {
    const [like, setLike] = useState(favList.includes(n));
    
    const likeHandler = () => {
      setLike(!like);
    };
    
    useEffect(()=>{
      if(!favList.includes(n) && like === true) {
          //if the note is in the fav list but it was unlike, remove from the fav list
          setFavList((previousList) => [...previousList, n])
      }
      else if(favList.includes(n) && !like){
          setFavList((previousList) => previousList.filter((note) => note !== n))
      }
    },[favList, n, like]); 
    return (
      <button onClick={(likeHandler)}>{like? '❤️': '🤍'}</button>
    );
  };


  //create notes
  const [notes, setNotes] = useState(dummyNotesList); 
  const initialNote = {
   id: -1,
   title: "",
   content: "",
   label: Label.other,
  };

  const [createNote, setCreateNote] = useState(initialNote);

  const createNoteHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('title: ',createNote.title);
    console.log('content: ', createNote.content);
    createNote.id = notes.length+1;
    setNotes([createNote, ...notes]);
    setCreateNote(initialNote);
  };
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
            <Heart n = {note} />
            <button>x</button>
            </div>
            <h2> {note.title} </h2>
            <p> {note.content} </p>
            <p> {note.label} </p>
        </div>   
      ))}
      </div>

      <div className='display_list'>
        <h2> Display Favorite List: </h2>
        <ul> 
          {favList.map(note => (
            <li>{note.title}</li>
          ))}
        </ul>
      </div>
  </div>
 
  );
 
}

export default App;
