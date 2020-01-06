import React from 'react';
import Router from './Navigator/Router';


export default class App extends React.Component {
    render() {
        console.disableYellowBox = true;
        return (<Router/>
        );
    }
};