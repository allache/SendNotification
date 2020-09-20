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
//const imgMyimageexample = require('cato.png');
//let imgUrl = 'cato.jng'; 

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
    this.onChangeSegment=this.onChangeSegment.bind(this);

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
      segment:'',

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
      gender_option: e.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeSegment(e) {
    this.setState({
      segment: e.target.value
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
    console.log("this message",this.state.message)
    console.log(driver.birth)

    axios.post('http://localhost:5001/users/search', driver)



      .then(res => {console.log(res.data)
        console.log(res.data.length)
      })
    //console.log(res.data)
    //var    malek =(res.data);
    // console.log("this is : res.data from create file exersice.list comp ",res.data);

    //malek =(res.data);
    // console.log(malek)


    console.log("res.data.citydfgdfgdf");
    // console.log(malek)




  }

  send_segment(event){
   // message= message.setState.value;

     var name_segment={
      'segment': this.state.segment,
      'message': this.state.message
    }
  axios.post('http://localhost:5001/users/send_segment',name_segment)
  .then(res => console.log(res.data))
  
  }

  create_file(event) {

    const save_path = {
      'path': 'c/programefile'
    }
    axios.post('http://localhost:5001/users/create_file', save_path)
      .then(res => console.log("result sended"))
    // .then(res => console.log(res.data));
    console.log("malek20")
  
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
        <h3>Write your message</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">



            <textarea type="text"

              className="form-control"
              value={this.state.message}
              onChange={this.onChangeMessage}>fdbddf</textarea>


          </div>

          <div className="form-group">
            <input type="submit" message="Create user Log" className="btn btn-primary" />

          </div>
        </form>
        
        <Dropdown options={this.state.options}
          onChange={this.onChangeOption}
          value={this.state.option2}
          placeholder="Select category " />
        <Form>
  <Form.Row>

  

    <Form.Group controlId="formGridState">
      <Form.Label >State </Form.Label>
      <Form.Control style={{margin :'5px',width : '250px'}}
                      placeholder="Choose your state"
                      type="text"
              // required
              className="form-control"
              value={this.state.state}
              onChange={this.onChangeState} />
    </Form.Group>



    <Form.Group controlId="formGridGender">
      <Form.Label >Gender </Form.Label>
      <Form.Control style={{margin :'5px',width : '95%'}}
                      placeholder="male or female"
                      type="text"
              // required
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender} />
    </Form.Group>
    </Form.Row>

</Form>
<Button onClick={this.create_file.bind(this)}>create file</Button>
        <Button  variant="secondary" onClick={this.uploadFile.bind(this)}>upload file</Button>
        <hr size="6" width="100%" color="black"/>
<Form>
<Form.Row>
    <Form.Group controlId="formGridSegment">
      <Form.Label >Name Segment </Form.Label>
      <Form.Control style={{margin :'5px',width : '450px'}}
                      placeholder="Set Name of Segment"
                      type="text"
              // required
              className="form-control"
              value={this.state.seggment}
              onChange={this.onChangeSegment} />
    </Form.Group>
    <Button variant="secondary"  onClick={this.send_segment.bind(this)}>send segment</Button>

  </Form.Row>

</Form>

    
      
      </div>
    
    );
  }
}



