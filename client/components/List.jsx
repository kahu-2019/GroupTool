import React from 'react'
import data from '../../data/people'


const List = () => {
    return (
        < div >
            <h1>List of Cohort</h1>
            <ul>
                {data.map(element => <li>{element.name}</li>)}
                <br />
            </ul>
        </div>)
}



export default List


