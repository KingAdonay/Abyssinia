import React from 'react';
import {
    View,
    ImageBackground
} from 'react-native';
import { SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import Header from './homeHeader';
import PlayButton from './playButton';

const movieBackground = ({ selectedMovie, navigation, route }) => {
    return (
        <ImageBackground
            source={{uri:`${selectedMovie.thumbnail}`}}
            resizeMode='cover'
            style={{
                width: '100%',
                height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7
            }}
        >
            <View
                style={{
                    flex: 1
                }}
            >
                <Header route={route} navigation={navigation} />
                <PlayButton navigation={navigation} selectedMovie={selectedMovie} />
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['transparent', 'white']}
                        style={{
                            width: '100%',
                            height: 150,
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                    >
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    )
}

export default movieBackground;