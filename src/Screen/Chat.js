import React from 'react';
import { View, Text, FlatList, Image, AsyncStorage,TouchableOpacity } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import dataDummy from '../SiasatFeed.json';
import Icon from 'react-native-vector-icons/Fontisto';
import axios from 'axios'
import { NavigationEvents } from "react-navigation";



export default class Cart extends React.Component {
    static navigationOptions = {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Icon name={"hipchat"} size={25} color={tintColor} />;
        },
    };
    constructor(){
        super()
        this.state={
            cartData:[]
        }
    }
    componentDidMount(){
        
    }
    
    
    
    render() {
        return (<View style={{ flex: 1 }}>
            {/* <Header headerText={"ProLiko"} /> */}
            {/* <NavigationEvents
          onWillFocus={() => {
            this.getCartData()
          }}
        /> */}
           
        </View>)
    }
}