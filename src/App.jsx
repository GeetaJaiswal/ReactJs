import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import './index.css';
import Note from './Note';

const App = () => {

    const [addItem, setItem] = useState([]);

    const addNote = (note) => {
        // alert("i am clicked");
        setItem((prevData) => {
            return [...prevData,note];
        });
        console.log(note); 
    };


    const onDelete = (id) => {
        setItem((olddata) => {
            return olddata.filter((current,index) => {
                return index!== id;
            })
        });
        console.log("deleted");
    };

    return (
        <>
        <Header/>
        <CreateNote passNote={addNote}></CreateNote>
        
           { addItem.map((val,index) => {
            return ( 
                <Note 
                key={index} 
                id={index} 
                title={val.title} 
                content={val.content} 
                deleteItem={onDelete}
                ></Note>
            );
            })
            }
        <Footer/>
        </>
    );
}

export default App;