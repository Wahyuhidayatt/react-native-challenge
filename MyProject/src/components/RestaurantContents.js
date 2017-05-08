import React from 'react';
import { Image, View} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux'
import { fetchData } from '../actions'
import HeaderApp from './HeaderApp'

class RestaurantContent extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchData()
  }

  render() {
    return (
      <Container>
      <HeaderApp />
         <Content>
           <Card style={{ }}>
           {this.props.datas.map(dataRestaurant => (
             <View key={dataRestaurant.restaurant.id}>
             <CardItem>
                <Left>
                  <Thumbnail source={{uri: dataRestaurant.restaurant.featured_image}}  />
                    <Body>
                      <Text
                      onPress = {()=>this.props.navigation.navigate('Details', {resto:dataRestaurant.restaurant})}
                      >{dataRestaurant.restaurant.name}</Text>
                      <Text note>{dataRestaurant.restaurant.location.locality_verbose}</Text>
                    </Body>
                </Left>
             </CardItem>
             <CardItem>
              <Body>
                <Image style={{ width:320, height: 200}} source={{uri: dataRestaurant.restaurant.featured_image}} />
                   <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon style={{marginRight:10}} name="star" size={20}/>
                    <Text>{dataRestaurant.restaurant.user_rating.aggregate_rating} </Text>
                    <Text>{dataRestaurant.restaurant.user_rating.rating_text}</Text>
                    <Icon style={{marginLeft:168, marginRight:10}} name="thumbs-o-up" size={20}/>
                    <Text>{dataRestaurant.restaurant.user_rating.votes}</Text>
                   </Button>
                 </Body>
             </CardItem>
             </View>
           ))}
          </Card>
         </Content>
       </Container>
    )
  }
}


const mapStateToProps = state => ({
  datas : state.datas
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContent)
