import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Home</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  background: white;
  flex: 1;
`;
