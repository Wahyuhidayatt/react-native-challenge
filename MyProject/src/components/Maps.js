import React from 'react'
import MapView from 'react-native-maps';
import { View } from 'react-native'


const styles ={
  container: {
    height: 200,
    width: 380,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
};

const MapApp = (props) => (
    <MapView
      style={styles.container}
      initialRegion={{
        latitude: Number(props.params.resto.location.latitude),
        longitude: Number(props.params.resto.location.longitude),
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
    <MapView.Marker
    coordinate={{
      latitude: Number(props.params.resto.location.latitude),
      longitude: Number(props.params.resto.location.longitude),
    }}
    />
    </MapView>
  )

export default MapApp
