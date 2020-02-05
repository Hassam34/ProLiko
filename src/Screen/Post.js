import React from "react";
import {View,Text} from "react-native"
import Icon from 'react-native-vector-icons/Entypo';

export default class Post extends React.Component{
    static navigationOptions = {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Icon name={"plus"} size={25} color={tintColor} />;
        },
    };
    render(){
        return(
            <View>
                <Text>
                    Post
                </Text>
            </View>
        )
    }
}