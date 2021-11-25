import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    Pressable,
    ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { icons, COLORS, SIZES, FONTS } from '../constants';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, signUp, nameChanged, dateOfBirthChanged, confirmPasswordChanged } from '../actions';
import { Spinner } from '../components/common';

class Signup extends Component {
    onNameChange(text) {
        this.props.nameChanged(text);
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onDateChange(text) {
        this.props.dateOfBirthChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onPasswordConfirmChange(text) {
        this.props.confirmPasswordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.signUp({ email, password });
    }
    render() {
        const { email, password, passwordConfirm, fullName, dateOfBirth, language } = this.props;
        return (
            <ScrollView style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                {/* Logo */}
                <View
                    style={{
                        marginTop: SIZES.height / 10,
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
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.h1,
                        paddingTop: SIZES.h1,
                    }}
                >
                    <Text
                        style={{
                            paddingHorizontal: SIZES.h1,
                            ...FONTS.h2,
                        }}
                    >
                        Create Your Account
                    </Text>
                </View>

                {/* Text Fields */}
                <View
                    style={{
                        justifyContent: 'center',
                        paddingHorizontal: SIZES.h1 * 2
                    }}
                >
                    <View
                        style={{
                            paddingTop: SIZES.h3
                        }}
                    >
                        <TextInput
                            style={{
                                ...FONTS.h3,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                color: 'black'
                            }}
                            value={fullName}
                            onChangeText={this.onNameChange.bind(this)}
                            placeholder="Full Name"
                            placeholderTextColor="black"
                        />
                    </View>

                    <View
                        style={{
                            paddingTop: SIZES.h3
                        }}
                    >
                        <TextInput
                            style={{
                                ...FONTS.h3,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                color: 'black'
                            }}
                            value={email}
                            onChangeText={this.onEmailChange.bind(this)}
                            placeholder="Email or Phone number"
                            placeholderTextColor="black"
                        />
                    </View>
                    <View
                        style={{
                            paddingTop: SIZES.h3
                        }}
                    >
                        <DatePicker
                            style={{ width: 300 }}
                            date={dateOfBirth}
                            mode="date"
                            placeholder="Date of Birth"
                            format="YYYY-MM-DD"
                            maxDate="2008-09-07"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            useNativeDriver={true}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={this.onDateChange.bind(this)}
                        />
                    </View>

                    <View
                        style={{
                            paddingTop: SIZES.h3
                        }}
                    >
                        <TextInput
                            style={{
                                ...FONTS.h3,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                color: 'black'
                            }}
                            value={password}
                            onChangeText={this.onPasswordChange.bind(this)}
                            placeholder="Password"
                            placeholderTextColor="black"
                            secureTextEntry={true}
                        />
                    </View>

                    <View
                        style={{
                            paddingTop: SIZES.h3
                        }}
                    >
                        <TextInput
                            style={{
                                ...FONTS.h3,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                color: 'black'
                            }}
                            value={passwordConfirm}
                            onChangeText={this.onPasswordConfirmChange.bind(this)}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            placeholderTextColor="black"
                        />
                    </View>
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

                    {this.props.loading?(
                        <Spinner size="large"/>
                    ):(<Pressable
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
                            onPress={() => { this.props.signUp({ email, password, fullName, dateOfBirth, passwordConfirm, language }) }}
                        >
                            <Text
                                style={{
                                    ...FONTS.h2,
                                    color: 'white'
                                }}
                            >
                                Sing up
                            </Text>
                        </TouchableOpacity>
                    </Pressable>)}
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
                        onPress={() => this.props.navigation.navigate("Login")}
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
            </ScrollView>
        )
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        errorMessage: state.auth.errorMessage,
        loading: state.auth.loading,
        passwordConfirm: state.auth.passwordConfirm,
        fullName: state.auth.fullName,
        language: state.auth.language,
        dateOfBirth: state.auth.dateOfBirth
    }
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    signUp,
    nameChanged,
    dateOfBirthChanged,
    confirmPasswordChanged
})(Signup);