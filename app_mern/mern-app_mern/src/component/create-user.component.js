import React, { Component } from 'react';
import axios from 'axios';


    
    import "react-datepicker/dist/react-datepicker.css";
    var filejson;
    export default class CreateUser extends Component {
      constructor(props) {
        super(props);
    
        this.state = {
          username: '',
          category: '',
          state: '',
          city: '',
          birth: '',
          firstname: '',
          lastname: '',
          address: '',
          email: '',
          gender: '',
          phone: ''
     
        }
      }
  
     
    
      onChangeDescription= (e) => {
        this.setState({
          description: e.target.value
        })
      }

   
   

      onChangeUsername = (e)=> {
        this.setState({
          username: e.target.value
        })
      }
   
   
      onChangeCategory= (e) =>{
        this.setState({
          category: e.target.value
        })
      }
      onChangeFirstname=(e)=> {
        this.setState({
          firstname: e.target.value
        })
      }
      onChangeLastname=(e)=> {
        this.setState({
          lastname: e.target.value
        })
      }
      onChangeAddress=(e)=> {
        this.setState({
          address: e.target.value
        })
      }
      onChangeEmail=(e)=> {
        this.setState({
          email: e.target.value
        })
      }
      onChangeGender=(e)=> {
        this.setState({
          gender: e.target.value
        })
      }
     
    
      onChangeBirth=(e)=> {
        this.setState({
          birth: e.target.value
        })
      }

      onChangeState=(e)=> {
        this.setState({
          state: e.target.value
        })
      }
      onChangeCity=(e)=> {
        this.setState({
          city: e.target.value
        })
      }
      onChangePhone=(e)=> {
        this.setState({
          phone: e.target.value
        })
      }

   
    
  
  
      onSubmit=(e)=> {
        e.preventDefault();
    
        const user = {
          username: this.state.username,
          //description: this.state.description,
          category: this.state.category,
          state: this.state.state,
          city: this.state.city,
          birth:this.state.birth,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          address: this.state.address,
          email: this.state.email,
          gender: this.state.gender,
          phone:this.state.phone,
          id_player: this.state.state, }

        const malek=10;
     
        console.log(malek);
        //var malek20
       
        axios.post('http://localhost:5001/users/add', user)
   

     
       //.then(res => console.log(res.data))
       .then(res => {
        //console.log(res.data)
        console.log(res.data);
    
        filejson =(res.data);
        console.log(res.data.city);
       // console.log(malek)
      })
console.log(filejson);
      var malek20=(Response.body);
       // .then(res => console.log(res.body));
   // var malek20=(Response.data);
console.log(malek20);

        this.setState({
            username: e.target.value
          })
    
       // window.location = '/';
      }
    
      render() {
        return (
        <div>
          <h3>search</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <input type="text"
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}/>

                  <label>Firstname: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.firstname}
                  onChange={this.onChangeFirstname}/>

                    <label>lastname: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.onChangeLastname}/>

                 <label>address: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.address}
                  onChange={this.onChangeAddress}/>

                  <label>email: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}/>

                   <label>gender: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.gender}
                  onChange={this.onChangeGender}/>


                  <label>State: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.state}
                  onChange={this.onChangeState}/>
 
                  <label>City: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.city}
                  onChange={this.onChangeCity}/>

                      <label>phone: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.phone}
                  onChange={this.onChangePhone}/>


                   <label>Category: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.category}
                  onChange={this.onChangeCategory}/>

                  <label>Birth: </label>
                  <input type="text"
                  required
                  className="form-control"
                  value={this.state.birth}
                  onChange={this.onChangeBirth}/>

              
            </div>

            <div className="form-group">
              <input type="submit" value="Create user Log" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
      }
    }
