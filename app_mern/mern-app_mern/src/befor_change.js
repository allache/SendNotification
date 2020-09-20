//// declare import and requeris 
import React, { Component } from 'react';
import FormCheck from 'react-bootstrap/FormCheck'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import 'emoji-mart/css/emoji-mart.css'
import EmojiPicker from 'emoji-picker-react';
import { Picker } from 'emoji-mart'
import 'react-dropdown/style.css'
import Dropdown from 'react-dropdown'
import Button from 'react-bootstrap/Button'    




import 'emoji-picker-react/dist/universal/style.scss'; // or any other way you consu

import axios from 'axios';

///initalsation les variables

import "react-datepicker/dist/react-datepicker.css";


export default class serch_create_file extends Component {
  constructor(props) {
    super(props);



    this.onChangeBirth = this.onChangeBirth.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    // this.onChangeType_cars = this.onChangeType_cars.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeId_player = this.onChangeId_player.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeOption = this.onChangeOption.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      birth: '',
      gender: '',
      type_cars: '',
      type_person: '',
      date_birth: '',
      value: '',
      year_car: '',
      username: '',
      category: '',
      state: '',
      message: '',
      id_player: '',
      lastname: '',
      firstname: '',
      phone: '',
      email: '',
      option2: '',

      options: [
        'Both Driver/Rader', 'Rader', 'Driver'
      ],
      gender_option: [
        'Both Male/Female', 'Male', 'Female'
      ]
    }
  }



  ///////////////////////// next 

  onChangeMessage(e) {
    this.setState({ message: e.target.value })
  };
  onChangeBirth(e) {
    this.setState({
      birth: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeId_player(e) {
    this.setState({
      id_player: e.target.value
    })
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }


  onChangeState(e) {
    this.setState({
      state: e.target.value
    })
  }


  onChangeCategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  onChangeOption(e) {
    this.setState({
      option2: e.value
    })
  };



  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }


  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeEmail
  onSubmit(e) {
    e.preventDefault();

    const driver = {


      username: this.state.username,
      lastname: this.state.lastname,
      firstname: this.state.firstname,
      email: this.state.email,
      id_player: this.state.id_player,
      message: this.state.message,
     
      phone: this.state.phone,
      
      option2 : this.state.option2,

      gender: this.state.gender,
      birth: this.state.birth,
      category: this.state.category,
      state: this.state.state,
      //   message:this.state.message,
    }
    console.log(this.state.message)
    console.log(driver.birth)

    axios.post('http://localhost:5001/users/search', driver)



      .then(res => console.log(res.data))
    //console.log(res.data)
    //var    malek =(res.data);
    // console.log("this is : res.data from create file exersice.list comp ",res.data);

    //malek =(res.data);
    // console.log(malek)


    console.log("res.data.citydfgdfgdf");
    // console.log(malek)




  }



  create_file(event) {

    const save_path = {
      'path': 'c/programefile'
    }
    axios.post('http://localhost:5001/users/create_file', save_path)
      .then(res => console.log("result sended"))
    // .then(res => console.log(res.data));
    console.log("malek20")
    console.log("option is jhkb;", this.state.option2) 
  }
  message(event) {
  

  }
  uploadFile(event) {

    const save_path = {
      'path': 'c/programefile'
    }

    axios.get('http://localhost:5001/users/upload_file')
      .then(res => console.log(res.data))
    console.log("upload file")

  }


  render() {

 

    return (

      <div>

        <Dropdown options={this.state.options}
          onChange={this.onChangeOption}
          value={this.state.option2}
          placeholder="Select category " />
          
        
        <h3>Write your message</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <button variant="primary" type="submit">
              Submit
                                              </button>


            <textarea type="text"

              className="form-control"
              value={this.state.message}
              onChange={this.onChangeMessage}>fdbddf</textarea>



            <label>email </label>
            <input type="text"

              className="form-control"
              value={this.state.onChangeEmail}
              onChange={this.onChangeEmail} />

            <label>birth: </label>
            <input type="text"

              className="form-control"
              value={this.state.birth}
              onChange={this.onChangeBirth} />

            <label>State: </label>
            <input type="text"

              className="form-control"
              value={this.state.state}
              onChange={this.onChangeState} />

           

            <label>last name </label>
            <input type="text"
              // required
              className="form-control"
              value={this.state.type}
              onChange={this.onChangeLastname} />


            <label>category </label>
            <input type="text"
              // required
              className="form-control"
              value={this.state.onChangeCategory}
              onChange={this.onChangeCategory} />


            <label>first name: </label>
            <input type="text"
              // required
              className="form-control"
              value={this.state.onChangeFirstname}
              onChange={this.onChangeFirstname} />


            <label>Id Player: </label>
            <input type="text"
              // required
              className="form-control"
              value={this.state.id_player}
              onChange={this.onChangeId_player} />



          </div>

          <div className="form-group">
            <input type="submit" message="Create user Log" className="btn btn-primary" />

          </div>
        </form>
        <Form>
  <Form.Row>
 
    <Form.Group controlId="formGridUsername">
      <Form.Label >username </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="Username"
                      type="text"
              // required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername} />
    </Form.Group>

    <Form.Group controlId="formGridCategory">
      <Form.Label >category </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="category"
                      type="text"
              // required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangeCategory} />
    </Form.Group>
    
    <Form.Group controlId="formGridCategory">
      <Form.Label >birth </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="birth"
                      type="text"
              // required
              className="form-control"
              value={this.state.birth}
              onChange={this.onchangebirth} />
    </Form.Group>

    <Form.Group controlId="formGridPhone">
      <Form.Label >phone </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="phone"
                      type="text"
              // required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone} />
    </Form.Group>

    <Form.Group controlId="formGridGender">
      <Form.Label >Gender </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="Username"
                      type="text"
              // required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender} />
    </Form.Group>

    <Form.Group controlId="formGridFirstname">
      <Form.Label >First_name </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="Firstname"
                      type="text"
              // required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname} />
    </Form.Group>
  
    <Form.Group controlId="formGridLastname">
      <Form.Label >Last_name </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="Lastname"
                      type="text"
              // required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname} />
    </Form.Group>
  

           

  

    <Form.Group controlId="formGridPassword">
      <Form.Label>Password</Form.Label> 
      <Form.Control style={{margin :'5px'}} type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>


  <Form.Row>
  <Form.Group controlId="formGridAddress1">
    <Form.Label >Address36sds</Form.Label>
    <Form.Control style={{margin :'5px',width : '180%'}} placeholder="1234 Main St" />
  </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label >Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group  controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit1200
  </Button>
</Form>

        <button onClick={this.create_file.bind(this)} style={{color : 'red', paddingRight : '5px'}}>create file</button>
        <button onClick={this.uploadFile.bind(this)}>upload file</button>

      </div>
    );
  }
}



