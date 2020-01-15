import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import Icon from 'react-native-vector-icons/AntDesign';

class ItemList extends React.Component {
    constructor() {
        super()
        this.state = {
            addToCart: false
        }
    }
    async componentDidMount() {
        await AsyncStorage.removeItem("itemsInCart");
        const abc = await AsyncStorage.getItem("itemsInCart");

        console.log('datdtadtatda', JSON.parse(abc))

    }
    setAsyncStorage = async (item) => {
        const abc = await AsyncStorage.getItem("itemsInCart");
        if (this.state.addToCart) {
            if(abc){
                await AsyncStorage.getItem("itemsInCart")
                .then(async(data) => {
                    
                    let array = JSON.parse(data)
                    array.push(item)                    
                    console.log('Adding array: ',array )
                    await AsyncStorage.removeItem("itemsInCart");
                    AsyncStorage.setItem("itemsInCart", JSON.stringify(array))
                })
            }
            else{
                let array=[]
                array.push(item)
                console.log('Adding array: ',array )
                AsyncStorage.setItem("itemsInCart", JSON.stringify(array))
            }
        }
        else {
            await AsyncStorage.getItem("itemsInCart")
                .then(async(data) => {
                    let arrayData = []
                    arrayData = JSON.parse(data);
                    arrayData.map((data, index) => {
                        if (item.id == data.id) {
                            arrayData.splice(index,1)
                        }
                    })
                    console.log('Removing Array :', arrayData)
                    await AsyncStorage.removeItem("itemsInCart");
                    AsyncStorage.setItem("itemsInCart", JSON.stringify( arrayData))
                })
        }
    }
    render() {
        const { item } = this.props.item
        // console.log(' props are', item)


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
                        <TouchableOpacity onPress={
                            () => { this.setState({ addToCart: !this.state.addToCart }, () => this.setAsyncStorage(item.item)) }
                        }>
                            <View>
                                {this.state.addToCart
                                    ?
                                    <View>
                                        <Icon name='check' size={25} color={'green'} style={{ alignItems: 'center', alignSelf: 'center', }} />
                                        <Text style={{ fontSize: 10, alignItems: 'center', alignSelf: 'center', fontWeight: "bold", marginTop: 1, color: 'gray' }}>Added</Text>
                                    </View>
                                    :
                                    <View>
                                        <Icon name='shoppingcart' size={25} color={'gray'} style={{ alignItems: 'center', alignSelf: 'center', }} />
                                        <Text style={{ fontSize: 10, alignItems: 'center', alignSelf: 'center', fontWeight: "bold", marginTop: 1, color: 'gray' }}>Add</Text>
                                    </View>
                                }
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}
export default ItemList