import React from 'react';
import { Group, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import Groups from "./Components/Groups";

export default function App() {
  return (
   <Container>
    <Groups title={"15 марта"}
    items={[
      {
      time: `15:30`,  
      user: {
        fullname: "Роман Музафаров", 
        procedure: `чистка`,
      }
      }
    ]}
    
    ></Groups>
    </Container>  
  );
}


const Container = styled.View`

  flex: 1; 
  margin-top: 50px; 

`; 
