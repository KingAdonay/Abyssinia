import React, { Component } from 'react';
import {

    SafeAreaView,
    StyleSheet,
    Animated,
    Text,
    Button,
    useColorScheme,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ImageStore,
    ScrollView,
    TouchableWithoutFeedback,
    ImageBackgroundComponent,
    FlatList,
    Platform,
} from 'react-native';
import { icons, dummyData, COLORS, SIZES, FONTS, images } from '../constants';


class homeHeader extends Component {
    renderSideIcon(route, navigation){
        switch(route.name){
            case 'Home' :
                return (
                <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 30
                        }}
                        
                    >
                        <Text> </Text>
                    </TouchableOpacity>
            )
            case 'Details': 
                return (
                    <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: 30,
                                borderRadius: 20,
                                // backgroundColor: COLORS.transparentBlack
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={icons.left_arrow}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.white
                                }}
                            />
                        </TouchableOpacity>
                )
                case 'Categories': 
                return (
                    <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 50,
                                height: 30,
                                borderRadius: 20,
                                // backgroundColor: COLORS.transparentBlack
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={icons.left_arrow}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.black
                                }}
                            />
                        </TouchableOpacity>
                )
            case 'Profile':
                return <Text> </Text>;
            default:
                return(
                    <Text>
                        Back
                    </Text>
                )
        } 
    }
    render() {
        const screen = this.props.screen;
        const navigation = this.props.navigation;
        const route = this.props.route;
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    height: 50,
                    paddingTop: 10
                }}
            >
                {/*Navigation*/}
                        {this.renderSideIcon(route, navigation)}

                {/* Logo */}

                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => console.log("Logo")}
                >
                    <Image
                        source={icons.abyssinia}
                        style={{
                            width: 140,
                            height: 30,
                            tintColor: 'black'
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default homeHeader;