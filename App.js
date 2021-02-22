import React from 'react';
import { Group, StyleSheet, Text, View, TouchableOpacity, SectionList } from 'react-native';
import styled from "styled-components/native";
import Groups from "./Components/Groups";
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    title: "15 марта", 
    data: [
      {
      time: `15:30`,  
      procedure: `чистка`,
      active: true, 
      user: {
        fullname: "Роман Музафаров", 
        avatar: 'https://sun9-18.userapi.com/impg/Ae_Dfzl-W7xAD644yEulDPwmD4NHL6vGDhxSrg/HD0APVDEcsU.jpg?size=1333x2000&quality=96&proxy=1&sign=da5538fac8c1ca9cb802da6e071dbbc2&type=album'
      }
      }, 
      {
        time: `15:30`,  
        procedure: `чистка`,
        active: true, 
        user: {
          fullname: "Алина Высоцкая", 
          avatar: 'https://i.pinimg.com/564x/c4/d5/21/c4d5213de9546ddc4285529455bce991.jpg'
        }
      },
      
    ]
  }, 
  {
    title: "16 марта", 
    data: [
      {
      time: `15:30`,  
      procedure: `чистка`,
      active: true, 
      user: {
        fullname: "Роман Музафаров", 
        avatar: 'https://sun9-18.userapi.com/impg/Ae_Dfzl-W7xAD644yEulDPwmD4NHL6vGDhxSrg/HD0APVDEcsU.jpg?size=1333x2000&quality=96&proxy=1&sign=da5538fac8c1ca9cb802da6e071dbbc2&type=album'
      }
      }, 
      {
        time: `15:30`,  
        procedure: `чистка`,
        active: true, 
        user: {
          fullname: "Алина Высоцкая", 
          avatar: 'https://i.pinimg.com/564x/c4/d5/21/c4d5213de9546ddc4285529455bce991.jpg'
        }
      }
    ]
  }
]



export default function App() {
  return (
   <Container>

    <SectionList 
     sections={DATA}
      keyExtractor={(item, index) =>  index}
      renderItem={({item}) => <Groups {...item}/>}
      renderSectionHeader={({section: {title} }) => (
        <GroupTittle>{title}</GroupTittle>
      )}/>
     <PlusButton>
     <Ionicons name="ios-add" size={26} color="#fff" />
     </PlusButton>
    </Container>  
  );
}

const PlusButton = styled.TouchableOpacity`

align-items: center; 
justify-content: center; 
border-radius: 50px;
width: 64px; 
height: 64px; 
background: #2A86FF; 
position: absolute; 
bottom: 15px; 
right: 28px; 

`;


const Container = styled.View`

  flex: 1; 
  margin-top: 50px; 
  padding: 0 20px; 
  margin-bottom: 25px; 

`; 

const GroupTittle = styled.Text`
font-weight: 800; 
font-size: 22px; 
color: #000000; 
margin-top: 20px
`; 