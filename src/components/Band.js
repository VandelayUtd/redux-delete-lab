import React from "react"

const Band = props => {

   
    return (
        <li>
            <span>{props.band.name}</span>
            <button onClick={()=> props.deleteBand(props.band.id)}>delete</button>
        </li>
    )
}
export default Band