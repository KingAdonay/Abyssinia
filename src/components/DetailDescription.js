import React, {useState} from 'react';
import {

    SafeAreaView,
    StyleSheet,
    Animated,
    Text,
    Button,
    useColorScheme,
    View,
    TouchableOpacity,
    Image,
    ImageBackground,
    ImageStore,
    ScrollView,
    TouchableWithoutFeedback,
    ImageBackgroundComponent,
    FlatList,
    Platform,
} from 'react-native';
import { icons, dummyData, COLORS, SIZES, FONTS, images } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const DeatilDescription = ({navigation, selectedMovie})=>{
        function renderRating() {
            const rating = () => {
s
                const [defaultRating, setdefaultRating] = useState(2)
                const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

                const starImgFill = require('../assets/icons/star.png')
                const starImgEmp = require('../assets/icons/star.png')

            }

            const customeRating = () => {
                return (

                    <View
                        style={{
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: 30

                        }}
                    >

                        {
                            maxRating.map((item, key) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.7}
                                        key={item}
                                        onPress={() => setdefaultRating(item)}
                                    >

                                        <Image
                                            style={{
                                                width: 40,
                                                height: 40,
                                                resizeMode: 'cover'
                                            }}
                                            source={
                                                item <= defaultRating
                                                    ? { uri: starImgFill }
                                                    : { uri: starImgEmp }
                                            }
                                        />

                                    </TouchableOpacity>
                                )

                            })
                        }

                    </View>
                )
            }
        }

        return (
            <View>

                {/* Add button */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 20,
                            // backgroundColor: COLORS.transparentBlack
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.home}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.black
                            }}
                        />
                    </TouchableOpacity>
                    {/* Download button */}
                    {/* <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 20
                        }}
                    >
                        <Image
                            source={icons.upload}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.black

                            }}
                        />

                    </TouchableOpacity> */}
                    {/* Favorite button */}
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 20
                        }}
                    >
                        <Image
                            source={icons.star}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.black
                            }}
                        />

                    </TouchableOpacity>

                </View>
                <View
                    style={{

                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'red'
                    }}
                >
                    <Text
                        style={{

                            color: COLORS.black,
                            ...FONTS.h1
                        }}
                    >
                        {selectedMovie.title}
                    </Text>
                </View>
                {/* Movie Genre */}
                <View
                    style={{

                        marginTop: 5,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'red'
                    }}
                >
                    <Text
                        style={{

                            color: 'gray',
                            ...FONTS.h3
                        }}
                    >
                        {selectedMovie.genra}
                    </Text>
                </View>


                {/* Movie Rating */}

                        {renderRating()}
                        

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        marginTop: 10
                        // backgroundColor: 'red'
                    }}
                >
                    {/* Year */}
                    <View
                        style={{
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            // backgroundColor: 'green'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.gray,
                                ...FONTS.h3
                            }}
                        >
                            Age
                        </Text>

                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.h4
                            }}
                        >
                            {selectedMovie.ageRestriction}
                        </Text>
                    </View>
                    {/* Language */}
                    <View
                        style={{
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            // backgroundColor: 'green'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.gray,
                                ...FONTS.h3
                            }}
                        >
                            Rating
                        </Text>

                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.h4
                            }}
                        >
                            {selectedMovie.rating}
                        </Text>
                    </View>

                    {/* Length */}

                    <View
                        style={{
                            paddingHorizontal: 20,
                            alignItems: 'center',
                            // backgroundColor: 'green'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.gray,
                                ...FONTS.h3
                            }}
                        >
                            Length
                        </Text>

                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.h4
                            }}
                        >
                            {selectedMovie.movieLength}
                        </Text>
                    </View>


                </View>

                {/* Synopsis */}
                
                <View
                    style={{

                        marginTop: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                        // backgroundColor: 'red'
                    }}
                >
                    <Text
                        style={{
                            
                            alignItems: 'center',
                            color: 'gray',
                            ...FONTS.h4
                        }}
                    >
                        {selectedMovie.description}
                    </Text>
                </View>

            </View>
        )
    
}

export default DeatilDescription;