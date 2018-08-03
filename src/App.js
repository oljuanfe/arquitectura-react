import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList';
import SelectCities from './SelectCities';
import SelectGender from './SelectGender';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[
        {
          name: '',
          location:'',
          dob: '',
          picture:'',
        },
      ],
    };

    this.askForUsers = this.askForUsers.bind(this);
  }

  askForUsers(){
    fetch('https://randomuser.me/api/?results=50')
      .then((response) => {
        return response.json();
      })
      .then(json => {
        // console.log('json.results', json.results);
        return this.setState({users: json.results});
      })
    
  }

  render() {
    // console.log('state',this.state.users);
    const [user]=this.state.users;
    const{name,location,dob,picture} = user;
    // console.log('nombre,ciudad,...', name,location,dob,picture);
    return (
      <div>
        {/*Botón para hacer Petición de usuarios a la API*/ }
        <button onClick={this.askForUsers} >Busca personas</button>
        <SelectCities usersInfo = {this.state.users}/>
        <SelectGender usersInfo = {this.state.users}/>
        <UsersList usersInfo = {this.state.users}/>
      </div>
    );
  }
}

export default App;
