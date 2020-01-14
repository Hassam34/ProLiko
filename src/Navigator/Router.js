import React from 'react';
import Login from '../Login';
// import Dashboard from '../Dashboard';
import Home from '../Screen/Home';
import Cart from '../Screen/Cart';

// import Search from '../Search';
// import Timeline from '../Timeline';
// import HelpSign from '../HelpSign';
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons'
// import Welcome from '../Welcome';
// import EandPSignin from '../EandPSignin';


//Tab Navigator
const tabOfApp = createBottomTabNavigator({
    Home,
    Cart
    // Timeline
},
    { tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
        //   backgroundColor: 'blue',
        },
      },
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                header:null
            }
        }
    }
    )
//const TabAppContainer=createAppContainer(tabOfApp);

// //Stack Navigator
// const stackShowingTabs = createStackNavigator({
//     StackPage: { screen: tabOfApp },
// },
//     {
//         defaultNavigationOptions: ({ navigation }) => {
//             console.log('hi');
//             return {
//                 headerLeft: (
//                     <Icon name="ios-person" size={30} color="#4F8EF7" />
//                 )
//             }
//         }
//     })
// const StackAppContainer = createAppContainer(stackShowingTabs);
// //Switch
// const switchLoginToDashboard = createSwitchNavigator({
//     Login: { screen: Login },
//     Dashboard: { screen: StackAppContainer }
// },
// {
//     navigationOptions: ({ navigation }) => {
//         console.log('hi Heloo');
//         return {
//             header:null
//         }
//     }
// })

//Switch Navigator Now Stack
const switchWelcomeToLogin = createSwitchNavigator({
    // Welcome: { screen: Welcome },
    Login: { screen: Login },
    Home:{screen: tabOfApp}
    // EandPSignin:{screen:EandPSignin},
    // HelpSign:{screen:HelpSign}

}
   )

const SwitchAppContainer = createAppContainer(switchWelcomeToLogin);

export default class Router extends React.Component {
    render() {
        return (<SwitchAppContainer />)
    }
}
