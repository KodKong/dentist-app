import React from 'react'; 
import { Text, View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";


const Groups = ({items, title}) => {
    return (
        <Wrapper>
        <GroupTittle>{title}</GroupTittle>
        {items.map((item, index) =>  <GroupItem key={index}>
          <Avatar source = {{
            uri: 'https://sun9-18.userapi.com/impg/Ae_Dfzl-W7xAD644yEulDPwmD4NHL6vGDhxSrg/HD0APVDEcsU.jpg?size=1333x2000&quality=96&proxy=1&sign=da5538fac8c1ca9cb802da6e071dbbc2&type=album'
          }}/>
          <View style={{ flex: 1 }}>
          <FullName>{item.user.fullname}</FullName>
          <GrayText>{item.user.procedure}</GrayText>
          </View>
          <GroupeDate active>{item.time}</GroupeDate>
        </GroupItem>)} 
      </Wrapper>
    )
}

Groups.defaultProps = {
    items: []
}


const GroupTittle = styled.Text`
font-weight: 800; 
font-size: 22px; 
color: #000000; 
`; 

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

const Wrapper = styled.View`

padding: 0 20px

`;

const Avatar = styled.Image`

margin-right: 15px
border-radius: 50px; 
width: 40px; 
height: 40px

`; 


export default Groups
