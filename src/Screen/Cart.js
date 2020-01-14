import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

import { Button, CardSection, Header, Spinner } from '../components/common';


export default class Cart extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Icon name={"shoppingcart"} size={25} color={tintColor} />;
        },
    };
    render() {
        return (<View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Header headerText={"ProLiko"} />
            <Text> Hello </Text>
        </View>)

    }
}