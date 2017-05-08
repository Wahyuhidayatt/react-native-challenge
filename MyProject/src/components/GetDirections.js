import React, { Component } from 'react'
import { View, Button } from 'native-base'
import getDirections from 'react-native-google-maps-directions'

export default class GmapsDirections extends Component {

  handleGetDirections = (props) => {

    const data = {
       source: {
        latitude: -33.8600024,
        longitude: 18.697459,
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }

    getDirections(data)
  }

  render() {
    return (
      <View>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}
