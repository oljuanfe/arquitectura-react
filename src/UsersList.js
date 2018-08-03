import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    // console.log('props',this.props);
    const {usersInfo}=this.props;
    // const{name,location,dob,picture} = usersData;
    // console.log('List nombre,ciudad,...', name,location,dob,picture); 
    return (
      <div>
        <ul>
          { usersInfo.map (function(oneUserInfo,index){
            const{name,location,dob,picture} = oneUserInfo;
            return(
              <li key={index}>
                 <User 
                    userName={name.first} 
                    userCity={location.city} 
                    userAge={dob.age} 
                    userPhoto={picture.thumbnail} 
                 />
              </li>
            );
          })}
       
        </ul> 
      </div>
    );
  }
}

export default UsersList;