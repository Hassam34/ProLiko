import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import dataDummy from '../SiasatFeed.json';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios'

export default class Home extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Icon name={"home"} size={25} color={tintColor} />;
        },
    };
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: [],
            newData: []
        }
        this.url = "https://proliko.com/wp-json/wc/v2/products/?consumer_key=ck_fcb00adb2411a7259b7cfefc9bb32d229474ea96&consumer_secret=cs_e0d58bd1ac6f8ab73dd7ab38e32ca5abbc339fb8";
    }

    componentDidMount() {
        axios.get(this.url)
            .then(response => this.setState({ data: response.data, loading: true }, () => console.log("new Data ", this.state.data)
            ));
    }
    renderRow = (item) => {
        console.log("Item Data ", item)
        return (
            <View style={{ height: 100, marginTop: 7, borderWidth: .5, marginRight: 10, marginLeft: 10, borderRadius: 7 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: .3, height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: item.item.images[0].src }} resizeMode="center" style={{ height: 90, flex: .8, width: 100, marginLeft: 3 }} />
                    </View>
                    <View style={{ flex: .6, marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 5, color: "#65B8E6" }}>
                            {item.item.name}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }} >
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5, color: "#E51C24", marginRight: 30 }}>
                                $ {item.item.price}
                            </Text>
                            {/* <Icon name='star' size={10} color={'orange'} style={{ marginTop: 2 }} />
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 1, color: "orange", }}>
                                {item.item.ratting}
                            </Text> */}
                        </View>
                    </View>
                    <View style={{ flex: .1 }}>
                        <Icon name='shoppingcart' size={25} color={'gray'} style={{ alignItems: 'center', alignSelf: 'center', }} />
                        <Text style={{ fontSize: 10, alignItems: 'center', alignSelf: 'center', fontWeight: "bold", marginTop: 1, color: 'gray' }}>Add</Text>


                    </View>
                </View>
            </View>
        )
    }
    showSpinner() {
        if (!this.state.loading) {
            return (<View style={{ flex: 1 }}>
                <Spinner />
            </View>)
        }

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={"ProLiko"} />
                {this.showSpinner()}
                {this.state.loading
                    &&
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <FlatList
                            data={this.state.data}
                            renderItem={item => this.renderRow(item)}
                        // onEndReached={this.gotoNextUrl}
                        // ListFooterComponent={this.footerSpiner}
                        // extraData={this.state}
                        //keyExtractor={item=> item.title}
                        />
                    </View>
                }

            </View>

        )
    }
}