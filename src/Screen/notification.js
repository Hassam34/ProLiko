import React from "react";
import {View,Text} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Notificatons extends React.Component{
    static navigationOptions = {
        tabBarLabel:() => {return null},

        tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name={"notifications"} size={25} color={tintColor} />;
        },
    };
    render(){
        return(
            <View>
                <Text>
                    Notifications
                </Text>
            </View>
        )
    }
}