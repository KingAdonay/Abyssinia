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
  import { icons,  COLORS, SIZES, FONTS, images } from '../constants';

const CategoriesList =({navigation, data}) => {
    return (
        <View
          style={{
            marginTop: 50
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                flex: 1,
                color: COLORS.black,
                ...FONTS.h2
              }}
            >
              Category
            </Text>
  
            <Image
              source={icons.right_arrow}
              style={{
                width: 20,
                height: 20,
                tintColor: 'black'
              }}
            />
          </View>
  
          {/* List */}
  
          <FlatList
  
  
            showHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 30
            }}
            data={data}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item, index }) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate("Details", {
                    selectedMovie: item
                  })}
                >
                  <View
                    style={{
                      marginLeft: index == 0 ? 0 : 0,
                      marginRight: index == data.length - 1 ? 0 : 0,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 30
                    }}
                  >
  
                    {/* Thumbnail */}
  
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 160,
                        width: 370,
                        
                      }}
                    >
                      <ImageBackground
                        source={item.thumbnail}
                        resizeMode="cover"
                        style={{
                          width: 370,
                          height: 160,
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
                          borderRadius: 15,
                          
  
                        
                        }}
                      >
  
                        <View
                          style={{
                            flexDirection: 'row',
                            width: "100%",
                            backgroundcolor: 'red'
                          }}
  
                        >
  
                          <View
                            style={{
                              flex: 1,
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                              
  
                            }}
                          >
                          </View>
                        </View>
  
                      </ImageBackground>
  
  
                    </View>
  
                  </View>
  
                </TouchableWithoutFeedback>
              )
  
            }}
          />
  
        </View>
      )
}

export default CategoriesList;