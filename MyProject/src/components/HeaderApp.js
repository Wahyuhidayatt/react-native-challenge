import React from 'react';
import { Content, ListItem, Text, CheckBox, Button, Icon, Title, Left, Right, Header, Body } from 'native-base';

const HeaderApp = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Restaurant List</Title>
      </Body>
      <Right>
        <Text>Cancel</Text>
      </Right>
    </Header>
  )
}
export default HeaderApp;
