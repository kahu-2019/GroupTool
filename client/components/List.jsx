import React from 'react'
import data from '../../data/people'



const List = () => {
    var x = data.map(element => element.name)
    var randomIndex = Math.floor(Math.random() * x.length)
    return (
        < div >
            <h1>List of Cohort</h1>
            <ul>
                {data.map(element => <li>{element.name}</li>)}
                <br />

                <div>

                    <li>{x[randomIndex]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <br />
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <br />
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <br />
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <br />
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>
                    <li>{x[Math.floor(Math.random() * x.length)]}</li>



                </div>


            </ul>
        </div >)
}




export default List
