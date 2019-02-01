import React from 'react'
import data from '../../data/people'



const List = () => {
    var x = data.map(element => element.name)
    var randomIndex = Math.floor(Math.random() * x.length)
    return (
        < div className = 'users' >
            {data.map((element, inc) => 
            <div className='nameBox'>
                <div className='faceDiv' id={`user${inc}`}>
                    <img className = 'faceImage' src={element.image} />
                    </div>
                <div className = 'nameDiv'>
                    {element.name} 
                
                </div>
            </div>)}
        </div >)
}




export default List
