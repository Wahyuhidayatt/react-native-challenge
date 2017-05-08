import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import MapView from 'react-native-maps';

import HeaderApp from './HeaderApp'
import GetDirections from './GetDirections'
import MapApp from './Maps'

const styles ={
  container: {
    height: 200,
    width: 380,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
};

class ContentView extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
      <HeaderApp />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail style={{ height:120, width: 100}} source={{uri: params.resto.featured_image}}  />
                <Body>
                  <Text style={{fontSize: 25, color:'red', marginTop:3}}>{ params.resto.name}</Text>
                  <Text style={{fontWeight: 'bold'}}>{ params.resto.location.address}</Text>
                  <Text note>{ params.resto.location.locality}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Cuisines : { params.resto.cuisines }
                </Text>
                <Text>
                  Cost For Two : Rp.{ params.resto.average_cost_for_two }
                </Text>
                <Text>
                  Hours : 7h to 20h (Mon, Tue, Wed, Thu, Sun), 7h to 22h...
                </Text>
              </Body>
            </CardItem>
          <MapApp {...this.props.navigation.state}/>
          <GetDirections />
         </Card>
        </Content>
      </Container>
    );
  }
}
export default ContentView
