import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);

  }
  render() {
    // console.log('props user',this.props);
    const {userName,userCity,userPhoto,userAge} = this.props;
    // console.log('nombre y demás', userName,userCity,userPhoto,userAge);
    return (
      <div>
        <img src={userPhoto} alt={userName}/>
        <h1>{userName}</h1>
        <p>Edad: {userAge}</p>
        <p>Ciudad: {userCity}</p>
      </div>
    );
  }
}

export default User;