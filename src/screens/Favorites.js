import React, {Component} from 'react';
import { Text, View } from 'react-native';

class Favorites extends Component {
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
                <Text>
                    Favorites!
                </Text>
            </View>
        )
    }
};

export {Favorites};