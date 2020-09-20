import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

import axios from 'axios';
 var malek;



 export class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = { exercises: [] };
    this.state = { users: [] };
    this.state = { data: [] };
  }

  onChangeName(e) {
    this.setState({
      username: e.target.value
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5001/users/')
      .then(response => {
        this.setState({ data: response.data })
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    axios.get('http://localhost:5001/users/')
      .then(response => {
        this.setState({ users: response.data })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5001/exercises/' + id)
      .then(response => { console.log(response.data) });

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {


  }



  handleAlternate(event) {
    const user2 = {
      username: this.state.username
    }

    event.preventDefault();
    console.log("file created");

    axios.post('http://localhost:5001/users/create_file', malek)



      .then(res => {

        console.log("this is : res.data from create file exersice.list comp ", res.data);

        malek = (res.data);

      })
      .catch(err => {
        console.log(err);
      });


    ////
  }


  serche(event) {

    const user1 = {
      username: this.state.username
    }
    console.log("this is from malek", malek);
    ///////////////////////////////////////
    axios.get('http://localhost:5001/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({

            users: response.data.map(user => user.username),

          })

        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    //////////////////////////////////
    console.log(user1);
    event.preventDefault();
    console.log("file created");



  }

  render() {
    return (
      <div>
        <h3>List Users</h3>
        <div className="form-group">
          <label>serch: </label>
          <input type="text"
            required
            className="form-control"
            value={this.state.name}
            onChange={this.onChangeName} />

          <form>
            <button onClick={this.serche.bind(this)}>serche</button>
          </form>


          <Table striped bordered hover>
            <thead className="thead-light">
              <tr class="bg-primary">
                <th>username</th>
                <th>category</th>
                <th>state</th>
                <th>age</th>
                <th>firstname</th>
                <th>lastname</th>
                <th>email</th>
                <th>gender</th>
                <th>phone</th>
              </tr>
            </thead>
            <tbody>

              {this.state.data.map(row => (
                <tr>
                  <td>{row.username}  </td>
                  <td>{row.category}  </td>
                  <td>{row.state}  </td>
                  <td>{row.birth}  </td>
                  <td>{row.firstname}  </td>
                  <td>{row.lastname}  </td>
                  <td>{row.email}  </td>
                  <td>{row.gender}  </td>
                  <td>{row.phone}  </td>

                </tr>
              ))
              }

            </tbody>
          </Table>

        </div>


      </div>
    )
  }
}

const Comp= (props)=>{

 const [greeting,setgreeting]=useState('malek')

  
return(<div>
  
  <h1>malek</h1>
  <input
  type='text'
  value={greeting}
  onChange={e=>setgreeting(e.target.value)}
  ></input>
  
  </div> );

};
export {Comp}