import React, { Component } from "react";
import { MainTitle, Paragraph, Header } from "../Style";

class Main extends Component {
  state = {};
  render() {
    return (
      <Header>
        <MainTitle>French Toast Mafia</MainTitle>
        <Paragraph>
          Meeting my friends
        </Paragraph>
      </Header>
    );
  }
}

export default Main;
