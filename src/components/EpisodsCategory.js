import React, {Component} from 'react';

class EpisodCategories extends Component {
    render(){
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
                        {catTitle}
                    </Text>
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
                                onPress={() => navigation.navigate("Player")}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: index == 0 ? 0 : 0,
                                        marginRight: index == data.length - 1 ? 0 : 0,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 30,
                                        backgroundColor: 'white',
                                        justifyContent: 'space-between',
                                        paddingHorizontal: 40
                                    }}
                                >
    
                                    {/* Thumbnail */}
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: 160,
                                            width: 100,
                                            borderRadius: 15,
    
                                            shadowColor: "black",
                                            shadowOffset: {
                                                width: 0,
                                                height: 12,
                                            },
                                            shadowOpacity: 0.51,
                                            shadowRadius: 13.16,
    
    
                                            elevation: 3,
                                        }}
                                    >
                                        
                                        <Image
                                            source={item.thumbnail}
                                            style={{
                                                width: 100,
                                                height: 160,
                                                borderRadius: 15,
                                            }}
                                        />
                                    </View>
                                    <View>
                                    <Text
                                        style={{
                                            alignItems:'center',
                                            marginTop: 10,
                                            
                                            color: COLORS.black,
                                            ...FONTS.h3
                                        }}
                                    >
                                        Title:
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            alignItems:'center',
                                            marginTop: 10,
                                            
                                            color: COLORS.black,
                                            ...FONTS.h3
                                        }}
                                    >
                                        Description:
                                        {item.synopsis}
                                    </Text>
                                    </View>
    
                                   
    
    
    
    
                                </View>
                            </TouchableWithoutFeedback>
                        )
    
                    }}
                />
    
            
    
            </View >
        )
    }
};

const mapStateToProps = (state) => {
    return{

    }
};

export default connect(mapStateToProps, {})(EpisodCategories);