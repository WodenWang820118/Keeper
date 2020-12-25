import React from "react";

function ToDoItem(props){
    return (
        <div className="note">    
            <h1 name="title">{props.title}</h1>
            <p name="content">{props.content}</p>
            
            <button
                onClick={()=>{
                    props.onChecked(props.id)
                }}>Delete</button>
        </div>   
    )
}

export default ToDoItem;