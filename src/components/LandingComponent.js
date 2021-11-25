import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Pressable,
} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {languageChanged} from '../actions';
import { icons, COLORS, SIZES, FONTS } from '../constants';

class LandingComponent extends Component{
    langChanged(language){
        this.props.languageChanged(language)
    }
    render(){
        const navigation= this.props.navigation;
    return (
        <View>
            {/* Logo */}
            <View
                style={{
                    marginTop: SIZES.height / 7,
                    padding: SIZES.h1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
                <Image
                    source={icons.abyssinia}
                    style={{

                        width: SIZES.width / 1.8,
                        height: 45,
                        tintColor: 'black'
                    }}
                />
            </View>

            {/* Welcome */}
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: SIZES.h1 + 20
                    // backgroundColor: 'red'
                }}
            >
                <Text
                    style={{
                        ...FONTS.h1,
                    }}
                >
                    Welcome
                </Text>
            </View>

            {/* Note */}
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: SIZES.h1,
                    paddingHorizontal: SIZES.h2,
                    // backgroundColor: 'red'
                }}
            >
                <Text
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.h4,
                        textAlign: 'center',

                        ...FONTS.h3,
                    }}
                >
                    Abyssinia streaming services, proving you
                    with the best experience of Amharic Movies
                    and TV shows
                </Text>
            </View>
            <View style={{
                alignItems:'center'
            }}>
            <Picker
                        selectedValue={this.props.language}
                        onValueChange={this.langChanged.bind(this)}
                        style={{width: 200, color: '#000'}}
                        mode="dropdown"
                        dropdownIconColor="#000"
                        itemStyle={{
                            backgroundColor: '#fff',
                            color: '#fff'
                        }}
                        >
                        <Picker.Item style={{color: '#000', backgroundColor:'white'}} label="Amharic" value="Amharic" />
                        <Picker.Item style={{color: '#000', backgroundColor:'#fff'}} label="English" value="English" />
                    </Picker>
            </View>

            {/* Get Started Button */}
            <View
                style={{
                    marginTop: SIZES.h3,
                    padding: SIZES.h1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >

                <Pressable
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.gray1,
                        width: 280,
                        height: 50,
                        borderRadius: 10,
                        elevation: 3

                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZES.width,
                            height: 70

                        }}
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text
                            style={{
                                ...FONTS.h2,
                                color: 'white'
                            }}
                        >
                            Get Started
                        </Text>
                    </TouchableOpacity>

                </Pressable>
            </View>

            {/* Account setup */}
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: SIZES.h3,
                    paddingHorizontal: SIZES.h2,
                    // backgroundColor: 'red'
                }}
            >
                <Text
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        ...FONTS.h3,
                    }}
                >
                    Already have an account?

                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text
                        style={{
                            ...FONTS.h2
                        }}
                    >
                        Login
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
}

const mapStateToProps = (state)=>{
    return {
        language: state.auth.language
    }
}

export default connect(mapStateToProps, { languageChanged})(LandingComponent);