import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  FlatList
} from 'react-native';
import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';
import { icons, COLORS, FONTS } from '../constants';

const VerticalList = ({ title, data, navigation }) => {
  const user = auth().currentUser;
  return (
    <View
      style={{
        marginTop: 15
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
            ...FONTS.h3
          }}
        >
          {title}
        </Text>
        
      </View>
      {/* List */}
      <FlatList
        numColumns={2}
        contentContainerStyle={{
          marginTop: 30
        }}
        data={data}
        keyExtractor={item => `${item.title}`}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={ async () => {
                await analytics().logEvent('select_item', {
                  ITEM_ID: item.id, id: user.uid
                });
                navigation.navigate("Details", {
                  selectedMovie: item
                });
              }}
            >
              <View
                style={{
                  marginLeft: index == 0 ? 5 : 5,
                  marginRight: index == data.length - 1 ? 10 : 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 10
                }}
              >
                {/* Thumbnail */}

                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 200,
                    width: 200,
                    borderRadius: 15,

                    shadowColor: "black",
                    shadowOffset: {
                      width: 0,
                      height: 6,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,
                    elevation: 20,
                  }}
                >
                  <Image
                    source={{ uri: `${item.thumbnail}` }}
                    style={{
                      width: 180,
                      height: 200,
                      borderRadius: 15,
                    }}
                  />
                </View>

                {/* Name */}

                <Text
                  style={{
                    marginTop: 10,
                    color: COLORS.black,
                    ...FONTS.h4
                  }}
                >
                  {item.name}
                </Text>

                {/* ProgressBar */}

              </View>

            </TouchableWithoutFeedback>
          )

        }}
      />

    </View>
  )
}

export default VerticalList;