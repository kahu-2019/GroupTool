import React from 'react'
import data from '../../data/people'

function arrayRemoval(arr, val) {
    return arr.filter(ele => ele != val)
}

const Group = () => {
    var x = data.map(element => element.name)
    const length = x.length
    var newArray = []
    for (var i = 1; i <= length; i++) {
        var y = x[Math.floor(Math.random() * x.length)]
        var x = arrayRemoval(x, y)
        newArray.push(y)
    }

    return (
        <div>
            <ul>
                {newArray.map(element => <li>{element}</li>)}
            </ul>
        </div>
    )


}



export default Group