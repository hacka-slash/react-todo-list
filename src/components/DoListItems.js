import React from 'react'


export default function DoListItems(props){
    const items = props.items
    return( 
    <ul>
        {items.map((item) => 
        <li key={item.id}>
            <div>{item.title}</div>
            <div>{item.body}</div>
            <button
                onClick = {() => props.handleDelete(item.id)}
            >
                X
            
            </button>
            <br />
        </li>
        )}
    </ul>
    )
        
    
}