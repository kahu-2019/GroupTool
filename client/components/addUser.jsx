import React from 'react'
import people from '../../data/people'

class AddUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        image: 'images/user.png'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      people.push(this.state)
      console.log(people)


    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            New User Name: 
            <textarea value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default AddUser