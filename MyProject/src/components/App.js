import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container } from 'native-base';
import { StackNavigator } from 'react-navigation';


import ContentView from './ContentView';
import RestaurantContent from './RestaurantContents';
import HeaderApp from './HeaderApp'

const App = StackNavigator ({
  Main: {screen: RestaurantContent},
  Details: {screen: ContentView},
},{
  headerMode : 'none'
})
// class App extends Component {
//   render() {
//     return (
//       <Container>
//         <HeaderApp />
//         <ContentView />
//         <RestaurantContent />
//       </Container>
//     );
//   }
// }
export default App
