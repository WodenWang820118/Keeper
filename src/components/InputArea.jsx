import React from "react";

function InputArea(props){
    const [inputText, setInputText] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {value, name} = event.target;
        
        setInputText((prevValue)=>{
            if (name === "title") {
                return {
                    title: value,
                    content: prevValue.content
                }
            } else if (name === "content") {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })
    }

    return(
            <div className="note">
                <input 
                name="title"
                placeholder="Enter the title" 
                autoComplete="off"
                onChange={handleChange}
                value={inputText.title}
                />

                <input 
                name="content"               
                placeholder="Enter the content" 
                autoComplete="off" 
                onChange={handleChange}
                value={inputText.content}
                />
            <button
                onClick={()=>{
                    props.addNote(inputText);
                    setInputText({
                        title:"",
                        content:""
                    });
                }}
                >Add new note</button>
            </div>
        )
}

export default InputArea;