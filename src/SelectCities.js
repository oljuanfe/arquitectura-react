import React, { Component } from 'react';


class SelectCities extends Component {
  constructor(props){
    super(props);
    
  }
  
  render() {
    // console.log('props select',this.props);
    const {usersInfo}=this.props;
    
   
    return (
      <select name="" id="">
        { usersInfo.map(function(userData,index){
          return(
            <option 
              value={userData.location.city} 
              key={index} 
            >
              {userData.location.city}
            </option>
          );
        })}
      </select>
    );
  }
}

export default SelectCities;