import React, {Component} from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';


class List extends Component{
    render(){
        
        const title= this.props.title;
        const arrOfData= this.props.data;
        
        return(
            <View>
                <Text style={{ fontSize: 20}}> {title} </Text>
                <FlatList
                  horizontal
                  data={arrOfData}
                  keyExtractor={(singleData)=> singleData.id}  
                  renderItem={
                      ({item})=>{
                          return (
                              <View>
                                <View >
                                    <TouchableOpacity onPress={()=>this.props.navigation.push('Details', {title: item.title, videoUri: item.videoUri})}>
                                    <Image
                                        source={item.imageUrl}
                                        style={{borderRadius:10, width: 150, height: 120, margin: 20, }}
                                    />
                                    </TouchableOpacity>
                                </View>
                                {/* <Button style={{padding: 10, fontSize:15, width:50  }} title={item.title}  onPress={()=>this.props.navigation.push('Details')}/> */}
                              </View>
                          )

                      }
                  }
                />
            </View>
        )
    }
};

export default List;