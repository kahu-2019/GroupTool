import React from 'react'
import data from '../../data/people'



const List = () => {
    var x = data.map(element => element.name)
    var randomIndex = Math.floor(Math.random() * x.length)
    return (
        < div className="users">
            {data.map((element, inc) => <div id={`user${inc}`}><p>{element.name}</p><img src={element.image} /></div>)}
        </div >)
}




export default List
