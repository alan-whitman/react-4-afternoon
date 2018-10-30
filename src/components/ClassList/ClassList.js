import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
    
  }
  componentDidMount() {
    let nameOfClass = this.props.match.params.class
    axios.get('http://localhost:3005/students?class=' + nameOfClass).then(res =>  {
      this.setState({students: res.data});
    }).catch(err => console.error(err));
  }
  render() {
    return (
      <div className="box">
        
        <h2>ClassList: {this.props.match.params.class}</h2>
        {this.state.students.map((student, i) =>  {
          return(
            <Link key={i} to={'/student/' + student.id}><h3>{student.first_name} {student.last_name}</h3></Link>
          )
        })}
      </div>
    )
  }
}