import React from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function Note(){
    const [notes, setNotes] = React.useState([]);

    function addNote(inputText){
        console.log(inputText);
        setNotes((prevNotes)=>{
            return [...prevNotes, inputText];
        })
    }
    
    function deleteNote(id){
        setNotes((prevNotes)=>{
            return prevNotes.filter((notes, index)=>{
                return index !== id;
            })
        })
    }

    return (
    <div>      
        <div>
        {notes.map((item, index)=>(
            <ToDoItem 
                key={index}
                id={index}
                title={item.title}
                content={item.content}
                onChecked={deleteNote}
            />
        ))}
        </div>
        <div>
            <InputArea 
            addNote={addNote}
            />
        </div>
        
        
    </div>
    
    )
}

export default Note;