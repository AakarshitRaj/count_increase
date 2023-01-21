import React ,{useState}from 'react'

function Note() {
    const [note,setNote]=useState([]);
    const [curNote,setCurNote]=useState('');

    function updateCurNote(event){
        setCurNote(event.target.value)
    }
    function addNote(event){
       
        const newNotesArray=[...note,curNote];
        setNote(newNotesArray)
    }
  return (
    <>
    <input onChange={updateCurNote} type="text"/>
    <button onClick={addNote}>Submit</button>
    <ul>
        {note.map(note=>{
            return <li>
                {note}
            </li>
        })
}
    </ul>
    
    </>
  );
}

export default Note;