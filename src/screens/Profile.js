import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../constants';
import { connect } from 'react-redux';
import { logout, fetchUser, languageChanged } from '../actions';
import ProfileComponent from '../components/ProfileComp';
import Header from '../components/homeHeader';

class Profile extends Component {
    state={
        language:'Am'
    };

    UNSAFE_componentWillMount(){
            this.props.fetchUser();
            const lan = AsyncStorage.getItem('language');
            if(lan){
            this.setState({language: `${lan}`});
            }
    }

    setLanguage(ln){
        this.props.languageChanged(ln)
    }

    render() {
        const navigation = this.props.navigation;
        const route = this.props.route;
        console.log(this.props.userProfile);
        return (
            // <View style={{
            //     flex: 1,
            //     backgroundColor: '#fff'
            // }}>
            //     <Text> Profile</Text>
            //     <Button title="Logout" onPress={(this.props.logout.bind())} />

            // </View>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: "white"
                }}
            >
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: COLORS.white,
                        paddingBottome: 100
                    }}
                >
                    <Header route={route} navigation={navigation} />
                    <ProfileComponent
                        user={this.props.user}
                        logout={this.props.logout}
                        fetchUser={this.props.fetchUser}
                        userProfile={this.props.userProfile}
                        setLanguage={this.setLanguage}
                        language={this.props.language}
                    />
                </ScrollView>
            </SafeAreaView>
        )
    }
};

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        language: state.profile.language,
        userProfile: state.profile.userProfile
    }
}

export default connect(mapStateToProps, { logout, fetchUser })(Profile);