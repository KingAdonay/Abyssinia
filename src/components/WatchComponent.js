import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    Slider,
    TouchableOpacity,
    Pressable,
    TouchableNativeFeedback,
    Dimensions,
    StyleSheet
} from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/FontAwesome5';


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const h=width;
const w= height;

//const sampleVid = require('../assets/video/a.mp4');

export default class App extends React.Component {
    constructor(P) {
        super(P);
        this.state = {
            currentTime: 0,
            duration: 0.1,
            paused: false,
            overlay: false,
            fullscreen: true
        };
    }

    lastTap = null;
    handleDoubleTap = (doubleTapCallback, singleTapCallBack) => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            clearTimeout(this.timer);
            doubleTapCallback();
        } else {
            this.lastTap = now;
            this.timer = setTimeout(() => {
                singleTapCallBack();
            }, DOUBLE_PRESS_DELAY);
        }
    }

    getTime = t => {
        const digit = n => n < 10 ? `0${n}` : `${n}`;
        //const t = Math.round(time)
        const sec = digit(Math.floor(t % 60));
        const min = digit(Math.floor((t / 60) % 60));
        const hr = digit(Math.floor((t / 3600) % 60));
        return hr + ':' + min + ':' + sec;  //converts sec to timer string
    }

    load = ({ duration }) => this.setState({ duration })
    progress = ({ currentTime }) => this.setState({ currentTime })

    backward = () => {
        this.video.seek(this.state.currentTime - 5);
        clearTimeout(this.overlayTimer);
        this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    }

    forward = () => {
        this.video.seek(this.state.currentTime + 5);
        clearTimeout(this.overlayTimer);
        this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    }

    onslide = slide => {
        this.video.seek(slide * this.state.duration);
        clearTimeout(this.overlayTimer);
        this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
    }

    youtubeSeekLeft = () => {
        const { currentTime } = this.state;
        this.handleDoubleTap(() => {
            this.video.seek(currentTime - 5);
        }, () => {
            this.setState({ overlay: true });
            this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
        })
    }

    youtubeSeekRight = () => {
        const { currentTime } = this.state;
        this.handleDoubleTap(() => {
            this.video.seek(currentTime + 5);
        }, () => {
            this.setState({ overlay: true });
            this.overlayTimer = setTimeout(() => this.setState({ overlay: false }), 3000);
        })
    }

    fullscreen = () => {
        const { fullscreen } = this.state;
        if (fullscreen) {
            Orientation.lockToLandscape();
        } else {
            Orientation.lockToLandscape();
        }
        this.setState({ fullscreen: !fullscreen });
    }
    // UNSAFE_componentWillMount(){
    //     Orientation.lockToLandscape();
    // }
    componentDidMount(){
        Orientation.lockToLandscape();
    }
    
    componentWillUnmount(){
        Orientation.lockToPortrait();
    }

    render = () => {
        const { currentTime, duration, paused, overlay, fullscreen } = this.state;
        const poster = this.props.selectedMovie.thumbnail;
        return (
            <View
                style = {
                    {
                        flex: 1
                    }
                }
            >
                <View
                    // style={fullscreen ? style.fullscreenvid : style.Vid}
                    style = {{
                        width:w,
                        height:h,
                        
                    }}
                >
                    <Video
                        fullscreen={fullscreen}
                        paused={paused}
                        ref={(ref) => {
                            this.video = ref
                        }}
                        source={{uri:`${this.props.selectedMovie.movieUrl}`}}
                        style={{
                            position: 'absolute',
                            top: -15,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            backgroundColor: 'black'
                        }}
                        onEnd={()=>{
                            this.props.navigation.goBack();
                        }}
                        poster={poster}
                        resizeMode='cover'
                        onLoad={this.load}
                        onProgress={this.progress}
                        bufferConfig={
                            { minBufferMs: 5000, maxBufferMs: 10000, bufferForPlaybackMs: 5000, bufferForPlaybackAfterRebufferMs: 5000}
                         }

                    />


                    {/* Overlay */}
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                    >
                        {overlay ?
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    backgroundColor: '#0006',

                                }}
                            >

                                <Icon
                                    name='angle-double-left'
                                    style={{
                                        color: 'white',
                                        flex: 1,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        fontSize: 25
                                    }}
                                    onPress={this.backward}
                                />
                                <Icon
                                    name={paused ? 'play' : 'pause'}
                                    style={{
                                        color: 'white',
                                        flex: 1,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        fontSize: 25
                                    }}
                                    onPress={() => this.setState({ paused: !paused })}
                                />
                                <Icon
                                    name='angle-double-right'
                                    style={{
                                        color: 'white',
                                        flex: 1,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        fontSize: 25
                                    }}
                                    onPress={this.forward}
                                />

                                {/* Slider */}

                                <View
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: 40

                                    }}
                                >
                                    <View
                                        style={{
                                            width: '100%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingHorizontal: 5
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'white'
                                            }}
                                        >
                                            {this.getTime(currentTime)}
                                        </Text>
                                        <Text
                                            style={{
                                                color: 'white'
                                            }}
                                        >
                                            {this.getTime(duration)}
                                            
                                        </Text>
                                    </View>
                                    <Slider
                                        maximumTrackTintColor='white'
                                        minimumTrackTintColor='white'
                                        thumbTintColor='white'
                                        value={currentTime / duration}
                                        onValueChange={this.onslide}
                                    />

                                </View>
                            </View>
                            :
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableNativeFeedback

                                    onPress={this.youtubeSeekLeft}>
                                    <View
                                        style={{
                                            flex: 1
                                        }}
                                    />
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback

                                    onPress={this.youtubeSeekRight}>
                                    <View
                                        style={{
                                            flex: 1
                                        }}
                                    />
                                </TouchableNativeFeedback>
                            </View>
                        }
                    </View>

                </View>



            </View>
        )
    }

}

const style = StyleSheet.create({

    Vid: {
        width,
        height: width * 0.6,
        backgroundColor: 'black'
    },

    fullscreenvid: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        
    }

});