import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note,setNote] = useState({
        title: "",
        content: "",
    });

    const getEvent = (event) => {
        
        // const name = event.target.name;
        // const value =  event.target.value;

        const {name,value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,          //[title:title_Value, content:content_value]  
            };
        });
        console.log(note);
    };


    const addEvent = () => {
        props.passNote(note);

        setNote({
            title: "",
            content: "",
        });
    };

    const expandIt = () => {
        setExpand(true);
    };

    const bToNormal = () => {
        setExpand(false);
    };

    return (
        <>
        <div className="main_note" onDoubleClick={bToNormal}>
            <form className="note-form">
                <input type="text"
                       placeholder="Title"
                       autoComplete="off"
                       name="title"
                       value={note.title}
                       onChange={getEvent}
                       onClick={expandIt}
                       />

                       <br/>
                       {expand ?( <textarea placeholder="Enter your note..."
                            name="content"
                            value={note.content}
                            onChange={getEvent}></textarea>):null}
                    <div className="note_add">
                    <Button onClick={addEvent}>
                        <AddIcon className="btn-icon"/>
                    </Button>
                    </div>
            </form>
        </div>
        </>
    );
}

export default CreateNote;