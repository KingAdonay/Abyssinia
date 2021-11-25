import React from 'react';
import {
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { COLORS } from '../constants';
import LandingComponent from '../components/LandingComponent';

const LandingScreen = ({ navigation }) => {

    return (
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
                <LandingComponent navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default LandingScreen;