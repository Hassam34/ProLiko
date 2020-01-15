import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import dataDummy from '../SiasatFeed.json';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios'
import ItemList from './ItemList';
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
        // console.log("Item Data ", item)
        return (
            <ItemList item={{item}} />
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