import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    };

    return (
        <>
        <div className="note">
            <div className="each_div">
                <h3>{ props.title }</h3>
                <p>{ props.content }</p>
                <button onClick={deleteNote} className="btn">
                <DeleteOutlineIcon className="delete_note" />
                </button>
            </div>
        </div>
        </>
    );
}

export default Note;