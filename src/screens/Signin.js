import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    Pressable,
} from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Spinner } from '../components/common';


class Signin extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size="large"/>;
        }

        return (
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
                    onPress={this.onButtonPress.bind(this)}
                >
                    <Text
                        style={{
                            ...FONTS.h2,
                            color: 'white'
                        }}
                    >
                        Sing In
                    </Text>
                </TouchableOpacity>

            </Pressable>
        );
    }
    renderError() {
        if (this.props.errorMessage) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.errorMessage}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            // <Card >
            //     <CardSection>
            //         <Input 
            //             placeholder="email@gmail.com" 
            //             label="Email"
            //             onChangeText={this.onEmailChange.bind(this)}
            //             value={this.props.email}
            //         />
            //     </CardSection>
            //     <CardSection>
            //         <Input
            //             secureTextEntry
            //             placeholder="password" 
            //             label="Password"
            //             onChangeText={this.onPasswordChange.bind(this)}
            //             value={this.props.password}
            //         />
            //     </CardSection>
            //     {this.renderError()}
            //     <CardSection>
            //         {this.renderButton()}
            //     </CardSection>
            // </Card>
            <View style={{
                flex:1,
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
                        Login to your account
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
                                color: '#000'
                            }}
                            value={this.props.email}
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
                        <TextInput
                            style={{
                                ...FONTS.h3,
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                color: '#000'
                            }}
                            value={this.props.password}
                            onChangeText={this.onPasswordChange.bind(this)}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="black"
                        />
                    </View>
                </View>
                {this.renderError()}

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
                    {this.renderButton()}
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
                        Don't have an account?
                    </Text>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.push("Signup")}
                    >
                        <Text
                            style={{
                                ...FONTS.h2
                            }}
                        >
                            Signup
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        errorMessage: state.auth.errorMessage,
        loading: state.auth.loading
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 30
    }
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(Signin);
