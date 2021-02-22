import React from 'react'; 
import { Text, View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";


const Groups = ({user, procedure, active, time}) => {
    return (
       
         <GroupItem>
          <Avatar source = {{
            uri: user.avatar
          }}/>
          <View style={{ flex: 1 }}>
          <FullName>{user.fullname}</FullName>
          <GrayText>{procedure}</GrayText>
          </View>
          <GroupeDate active={active}>{time}</GroupeDate>
        </GroupItem>
    
    )
}

Groups.defaultProps = {
    items: []
}


  const GroupItem = styled.TouchableOpacity`

  align-items: center; 
  padding: 20px 0; 
  flex-direction: row; 
  border-bottom-width: 1px; 
  border-bottom-color: #f3f3f3; 

  `;

  const GroupeDate = styled.Text`

  background: ${props => props.active ? '#2A86FF' : '#E9F5FF' }; 
  border-radius: 18px; 
  font-weight: 600; 
  color: ${props => props.active ? '#fff' : '#4294ff' }; 
  font-size: 14px; 
  width: 70px; 
  height: 32px; 
  text-align: center; 
  line-height: 28px; 

  `; 


  const FullName = styled.Text`

  font-weight: 600; 
  font-size: 16px; 

  `; 


  const GrayText = styled.Text`

  font-size: 16px; 
  color: #8b979f; 

  `; 

  

  const Avatar = styled.Image`

  margin-right: 15px
  border-radius: 50px; 
  width: 40px; 
  height: 40px

  `; 


  export default Groups
