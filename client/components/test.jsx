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
    var a = newArray.map(element => <li>{element}</li>)

    return (

        < div >
            {a.slice(0, 3)}
            <br />
            {a.slice(3, 6)}
            <br />
            {a.slice(6, 9)}
            <br />
            {a.slice(9, 12)}
            <br />
            {a.slice(12, 15)}
            <br />
        </div >
    )
}

export default Group