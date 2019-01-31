import React from 'react'
import data from '../../data/people'



const List = () => {
    var x = data.map(element => element.name)
    var randomIndex = Math.floor(Math.random() * x.length)
    return (
        < div >
            <ul>
                {data.map(element => <li>{element.name}</li>)}
            </ul>
        </div >)
}




export default List
