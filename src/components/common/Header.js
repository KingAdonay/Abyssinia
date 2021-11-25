import React from 'react';
import {Text, View} from 'react-native';

const Header=(props)=>{

    const {textStyle, viewStyle}= styles;



    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles={
    textStyle:{
        fontSize:20
    },
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center', //vertical justification
        alignItems:'center', //horizontal justification
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset: { width:0, height:2 },
        shadowOpacity: 0.2,
        elevation:2,
        position: 'relative'
    }
};

//Making the component available for other parts of the app to use
export { Header };