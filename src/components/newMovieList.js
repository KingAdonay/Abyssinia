import React from 'react';
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
import { connect } from 'react-redux';
import { setSelectedMovie } from '../actions';
import { icons, dummyData, COLORS, SIZES, FONTS, images } from '../constants';



const newMovieList = ({data, navigation, setSelectedMovie}) => {
  
  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;
    return (
      <Animated.FlatList
        horizontal
        pagingEnabled
        snapToAlignment="center"
        snapToInterval={50}
        showHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={0}
        contentContainerStyle={{
          marginTop: 10
        }}
        data={data}
        keyExtractor={item => `${item.title}`}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: newSeasonScrollX } } }
        ], { useNativeDriver: false })}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Details", { selectedMovie: item })}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 270,
                  marginBottom: 23


                }}
              >
                <ImageBackground
                  source={{uri: `${item.thumbnail}`}}
                  resizeMode="cover"

                  style={{ 
                    marginLeft: 13,
                    marginRight: 13,
                    // justifyContnet: 'flex-end',
                    height: 250,
                    width: 350,
                    borderRadius: 40,

                    shadowColor: "black",
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,
                    elevation: 10,
                  }}

                  imageStyle={{
                    borderRadius: 40,
                    width: 350,
                    height: 250,
                    marginTop: 0
                  }}
                >

                  <View
                    style={{

                      flexDirection: 'row',
                      height: 90,
                      width: "100%",
                      marginTop: 200,
                    }}

                  >
                    {/* Play Button */}

                    <TouchableWithoutFeedback
                      onPress={() => {
                        setSelectedMovie(item);
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
                            width: 70,
                            height: 70,
                            borderRadius: 40,
                            backgroundColor: 'white',
                            shadowOffset: {
                              width: 0,
                              height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                            shadowColor: 'black',
                            elevation: 5

                          }}
                        >


                          <Image
                            source={icons.play}
                            resizeMode='contain'
                            style={{
                              width: 30,
                              height: 30,
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
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )
        }}
      />
    )
  }

  export default connect(null, {setSelectedMovie})(newMovieList);