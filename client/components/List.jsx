import React from 'react'
import data from '../../data/people'



const List = () => {
    console.log(data)
    return (
        < div >
            <h1>List of Cohort</h1>
            <ul>
                {data.map(element => <li>{element.name}</li>)}
            </ul>
        </div >)
}


// export default function List() {
//     return (
//         < div >
//             <h1>List of Cohort</h1>
//             <ul>
//                 {x.name}
//             </ul>
//         </div >)
// }

export default List
