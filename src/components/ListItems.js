import React from 'react'
import './ListItems.css'

export default function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item}>
                <p>{item.text}</p>
            </div>
    })
    return (
        <div>
            <p>{listItems}</p>
        </div>
    )
}