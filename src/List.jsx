import React from 'react';

const List = (props) => {
        return(
                <>
                <br/>
                <span>
                    <i 
                        className="fa fa-times-circle" 
                        onClick={() => {
                            props.onSelect(props.id);
                        }}>
                    </i>
                </span>
                <li>{props.text}</li>
                </>
            );
}

export default List;