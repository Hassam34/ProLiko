import React from 'react';
import { View, Text, FlatList, Image, KeyboardAvoidingView, } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Octicons';
import { Searchbar } from 'react-native-paper';

import axios from 'axios'


export default class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: () => { return null },
        tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name={"home"} size={25} color={tintColor} />;
        },
    };
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: [],
            newData: [], firstQuery: ""
        }
        this.url = "https://vindecoder.p.rapidapi.com/salvage_check";
    }

    componentDidMount() {

        axios.get(this.url, {
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "vindecoder.p.rapidapi.com",
                "x-rapidapi-key": "a1a9e29294mshf4c18dee5e500c8p182f3ajsn55d73a2a0598"
            }, "params": {
                "vin": "4T4BF1FKXER340134"
            }
        }).then((response) => {
            console.log("myresponse", response.data.info)
            let array = []
            array.push({ data: response.data.info })
            this.setState({ data: array })
        }).catch((error) => {
            console.log("myerro", error)

        })
    }

    showSpinner() {
        if (!this.state.loading) {
            return (<View style={{ flex: 1 }}>
                <Spinner />
            </View>)
        }

    }
    renderHeader() {
        return (
            <View style={{
                height: 50, flexDirection: 'row', borderBottomColor: 'gray',
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowRadius: 2, borderBottomWidth: .3
            }}>
                <View style={{ flex: 8, justifyContent: 'center' }}>
                    <Text style={{ marginLeft: 10, fontSize: 22, fontWeight: 'bold' }}>
                        Yours Next Ride ?
           </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Icon2 name={"settings"} size={25} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Icon name={"search1"} size={22} />
                </View>
            </View>
        )
    }
    renderSearch() {
        const { firstQuery } = this.state;
        return (
            <View style={{ padding: 10 }}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}
                    style={{ borderRadius: 5 }}
                />
            </View>
        )
    }
    renderItem = (item) => {
        console.log("MyData", item.item.data)
        const data = item.item.data
        return (
            <View>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <Image
                        style={{ height: 200, width: "100%", borderRadius: 5 }}
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbFhb17P0n1t5loeS59KGOJyUTAScZPoUiIP6qX2fjtYdtRj4q" }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}>Title : </Text><Text style={{ color: "gray" }}>{data.vehicle_title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}>Milage : </Text><Text style={{ color: "gray" }}>{data.mileage}</Text>
                    </View>
                </View>


            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderHeader()}
                <KeyboardAvoidingView behavior="height" enabled>
                    {this.renderSearch()}
                </KeyboardAvoidingView>
                <FlatList
                    data={this.state.data}
                    renderItem={(item) => this.renderItem(item)}
                />


            </View>

        )
    }
}