import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { COLORS } from '../constants';
import {connect } from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import { languageChanged } from '../actions';
import Icon from 'react-native-vector-icons/Ionicons';
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';

class profileComp extends Component{
    languageChangedd(text){
        this.props.languageChanged(text)
    }
    render(){
        const { navigation, logout, user, userProfile, setLanguage } = this.props;
        const name = userProfile.fullName;
    const language =userProfile.language;
    const email = user.user.email;

        return(
            <View
            style={{
                alignSelf: 'center'
            }}
        >
            <View
                style={{
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center',


                }}
            >
                <Image
                    source={require("../assets/images/dummy_profile/100.jpg")}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 200,
                        height: 200,
                        borderRadius: 200,

                    }}
                    resizeMode="center"
                >
                </Image>
            </View>

            {/* Information container  */}

            <View
                style={{
                    marginTop: 10,
                    alignSelf: 'center',
                    alignItems: 'center'

                }}

            >
                <Text
                    style={{
                        fontWeight: '200',
                        fontSize: 28,
                        color: 'black'
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        marginTop: 5,
                        fontSize: 16,
                        color: 'gray',

                    }}
                >
                    {email}
                </Text>
            </View>

            {/* Menu Items */}

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                       // flexDirection: 'row',
                        //paddingVertical: 15,

                    }}
                >
                    {/* <Icon name='heart-outline' color='black' size={25} /> */}
                    <Text
                        style={{
                            color: '#777777',
                            marginLeft: 20,
                            fontWeight: '600',
                            fontSize: 20,
                            lineHeight: 26,
                        }}
                    >
                        Language
                    </Text>
                    <Picker
                        selectedValue={this.props.language}
                        onValueChange={(itemValue, itemIndex) =>this.languageChangedd(itemValue)}
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
                
                <View
                    style={{
                        flexDirection: 'row',
                        paddingVertical: 15,
                        marginBottom: 20
                    }}
                >
                    {/* <Icon name='menu' color='black' size={25} /> */}
                    <TouchableOpacity onPress={logout.bind(this)}>
                        <Text
                            style={{
                                color: 'red',
                                marginLeft: 20,
                                fontWeight: '600',
                                fontSize: 20,
                                lineHeight: 26,
                            }}
                        >
                            Signout
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
    }
}
// const profileComp = ({ navigation, logout, user, userProfile, setLanguage, languageChanged }) => {
//     console.log(userProfile)
//     // name should be fetched from database
//     // const name = userProfile.fullName;
//     // const language =userProfile.language;
//     // const email = user.user.email;

//     //const [selectedLanguage, setSelectedLanguage] = useState();


// //     return (
// //         // Profile Picture
        
// // }

const mapStateToProps = state => {

    return {
        language: state.auth.language
    }
}

export default connect(mapStateToProps,{languageChanged})(profileComp);