import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Button, CardSection, Header, } from '../components/common';
import dataDummy from '../SiasatFeed.json';
import Icon from 'react-native-vector-icons/Entypo';


export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        loading: true,
        data: dataDummy
    }
    componentDidMount() {
        console.log("Data ", this.state.data)
        // this.setState({data:dataDummy});
        // setTimeout(() => {this.setState({loading: true})}, 1000)
    }
    renderRow = (item) => {
        console.log("Item Data ", item)
        return (
            <View style={{ height: 100,  marginTop: 7, borderWidth: .5, marginRight: 10, marginLeft: 10, borderRadius: 7 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{flex:.3, height: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{ uri: item.item.image }} resizeMode="center" style={{ height: 90, flex: .8, width: 100, marginLeft: 3 }} />
                    </View>
                    <View style={{flex:.6, marginLeft: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 5, color: "#65B8E6" }}>
                            {item.item.itemname}
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 20 }} >
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 5, color: "#E51C24", marginRight: 30 }}>
                                {item.item.price}
                            </Text>
                            <Icon name='star' size={10} color={'orange'} style={{ marginTop: 2 }} />
                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 1, color: "orange", }}>
                                {item.item.ratting}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:.1}}>
                    <Icon name='shopping-cart' size={25} color={'gray'} style={{alignItems:'center',alignSelf:'center', }}  />
                    <Text style={{fontSize:10,alignItems:'center',alignSelf:'center', fontWeight:"bold",marginTop:1,color:'gray'}}>Add</Text>
                        
                       
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText={"ProLiko"} />
                <View style={{ flex: 1, }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={item => this.renderRow(item)}
                    // onEndReached={this.gotoNextUrl}
                    // ListFooterComponent={this.footerSpiner}
                    // extraData={this.state}
                    //keyExtractor={item=> item.title}
                    />
                </View>


            </View>

        )
    }
}