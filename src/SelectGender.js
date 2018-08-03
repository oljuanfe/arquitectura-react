import React, { Component } from 'react';


class SelectGender extends Component {
  constructor(props){
    super(props);
    
   
  }

  render() {
    
    const {usersInfo}=this.props;
    console.log('userInfo',usersInfo);
    
    const filteredGender = usersInfo.filter( function(userData, index, arr){
      const {gender} =userData;
      console.log('genderinside', gender);
      
      console.log('return',arr.indexOf(userData.gender) === index);
      return arr.indexOf(gender) === index;
    })
    ;
    console.log('gender',filteredGender);
    return (
      <select name="gender" id="gender">
        // { filteredGender.map(function(userData,index){
          return(
            <option 
              value={userData} 
              key={index} 
            >
              {userData}
            </option>
          );
        })}
      </select>
    );
  }
}

export default SelectGender;