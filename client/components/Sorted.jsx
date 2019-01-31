import React from 'react'
import data from '../../data/people'

class Button extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
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
                {!this.state.isHidden && <Sorted />}
            </div>
        )
    }
}

const Sorted = () => {
    var x = data.map(element => element.name)
    var randomIndex = Math.floor(Math.random() * x.length)
    return (
        < div >
            <ul>
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
            </ul>
        </div>
    )
}




export default Button
