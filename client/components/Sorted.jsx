import React from 'react'
import data from '../../data/people'

class Button extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true,
        }
    }
    toggleIsHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleIsHidden.bind(this)}>Made Groups</button>
                {!this.state.isHidden && <Group />}
            </div>
        )
    }
}

function arrayRemoval(arr, val) {
    return arr.filter(ele => ele != val)
}

const Group = () => {
    var x = data.map(element => element)
    const length = x.length
    var newArray = []
    for (var i = 1; i <= length; i++) {
        var y = x[Math.floor(Math.random() * x.length)]
        var x = arrayRemoval(x, y)
        newArray.push(y)
    }
    var a = newArray.map((element, inc) => <div id={`newUser${inc}`}><p>{element.name}</p><img src={element.image} /></div>)
    return (
        <div className="newUsers">
            {newArray.map((element, inc) => 
            <div className='nameBox' id={`newUser${inc}`}>
                <div className= 'faceDiv'>
                    <img className='faceImage' src={element.image} />
                </div>
            <div className = 'nameDiv'>{element.name}</div></div>)}
           {a.slice(0, 3)}
            <br />
            {a.slice(3, 6)}
            <br />
            {a.slice(6, 9)}
            <br />
            {a.slice(9, 12)}
            <br />
            {a.slice(12, 15)}
        </div>
    )


}





export default Button
