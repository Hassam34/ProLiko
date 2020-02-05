import React from 'react';
import Router from './Navigator/Router';
import { Provider as PaperProvider } from 'react-native-paper';


export default class App extends React.Component {
    render() {
        console.disableYellowBox = true;
        return (
            <PaperProvider>
                <Router />
            </PaperProvider>

        );
    }
};