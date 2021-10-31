import React, { useState } from 'react';
import List from './List';

const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);      //initial value we assigned is a empty array

    const getEvent = (event) => {
        console.log(event.target.value);
        setInputList(event.target.value);
    }

    const ListofItems = () => {
        setItems((oldItems) => {              // means this function having all previous values we have in state
            return[...oldItems, inputList];
        });
        setInputList("");
    }

    const deleteItem = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index!== id;
            });
        });
    };

    return(
        <>
         <div className="main_div">
             <div className="center_div">
                <h1>
                    ToDo List
                </h1>
                <br/>
                <input type="text" placeholder="Add items" name="item-name" 
                                        value={inputList} onChange={getEvent}/>
                <button type="submit" onClick={ListofItems}>+</button>
                <ol>
                {/* <li><span><i className="fa fa-times-circle"></i></span>{inputList}</li> */}

                {
                    Items.map((itemval, index) => {
                        return(
                            <List key={index} id={index} text={itemval} onSelect={deleteItem}></List>
                        );
                })}

                </ol>
             </div>
         </div>
        </>
    );
}

export default App;