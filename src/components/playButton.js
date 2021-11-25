import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../actions';
import { icons } from '../constants';

class playButton extends Component{
    render(){
    const navigation = this.props.navigation;
    const selectedMovie = this.props.selectedMovie;
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 90,
                width: '100%',
                marginTop: 170
            }}
        >
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.setSelectedMovie(selectedMovie);
                    navigation.navigate("Player");
            }}
            >
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            backgroundColor: 'white',
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                            shadowColor: 'black',
                            elevation: 10

                        }}
                    >
                        <Image
                            source={icons.play}
                            resizeMode='contain'
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 0,
                                marginLeft: 10,
                                tintColor: 'black',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}
}

export default connect(null, {setSelectedMovie})(playButton);