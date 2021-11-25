import React, {useEffect} from 'react';
// import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import StringsOfLanguages from './components/StringsOfLanguages';

import Home from './screens/Home';
import MovieDetail from './screens/MovieDetail';
import Profile from './screens/Profile';
import Search from './screens/Search';
// import Downloads from './screens/Downloads';
import Player from './screens/Player';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
// import Favorites from './screens/Favorites';
import Categories from './screens/Categories';
import LandingPage from './screens/LandingPage';

import {

    Downloads,
    Favorites

} from './screens';


const BottomTabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const DownloadsStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const PlayerStack = createStackNavigator();
const MainWindow = createStackNavigator();
const DrawerStack = createDrawerNavigator();

const PlayerStackScreens = () => {
    return (
        <PlayerStack.Navigator screenOptions={{
            headerShown: false,
            tabBarVisible: false
        }}>
            <PlayerStack.Screen
                name="Player"
                component={Player}
                options={{ title: 'Player' }}
            />
        </PlayerStack.Navigator>
    );
}

const HomeStackScreens = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Abyssinia Movies' }}

            />
            <HomeStack.Screen
                name="Details"
                component={MovieDetail}
                options={{ title: 'Details' }}
            />
            <HomeStack.Screen
                name="Categories"
                component={Categories}
                options={{ title: 'Categories' }}
            />
            {/* <HomeStack.Screen
                name="Player"
                component={Player}
                options={{
                    title:'Player',
                    
                }} */}
            {/*                 
            /> */}
        </HomeStack.Navigator>
    );
};

// const DrawerStackScreen = ()=>{
//     return(
//         <DrawerStack.Navigator>
//             <DrawerStack.Screen name = "Movies" component={HomeStackScreens} />
//             <DrawerStack.Screen name= "Categories" component= {Categories} />
//             <DrawerStack.Screen name = "Favorites" component= {Favorites} />
//         </DrawerStack.Navigator>
//     );
// };

const DownloadsStackScreens = () => {
    return (
        <DownloadsStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <DownloadsStack.Screen name="Downloads" component={Downloads} />
        </DownloadsStack.Navigator>
    )
}

const SearchStackScreens = () => {
    return (
        <SearchStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <SearchStack.Screen
                name={StringsOfLanguages.search}
                component={Search}
                options={{ title: StringsOfLanguages.search }}
            />
            <SearchStack.Screen
                name="Details"
                component={MovieDetail}
                options={{ title: 'Details' }}
            />
        </SearchStack.Navigator>
    )
}

const ProfileStackScreens = () => {
    return (
        <ProfileStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    )
}

const AuthStackScreens = () => {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AuthStack.Screen name="LandingPage" component={LandingPage}/>
            <AuthStack.Screen name="Login" component={Signin} />
            <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
    )
}

const NavNavBar = () => {
    return (
        <BottomTabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home' || route.name === 'ቤት') {
                        iconName = 'home';
                    } else if (route.name === 'Profile' || route.name === 'መገለጫ') {
                        iconName = 'user';
                    } else if (route.name === 'Search' || route.name === 'ፈልግ') {
                        iconName = 'search';
                    }

                    // You can return any component that you like here!
                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'black',
                labelStyle: {
                    fontSize: 13
                },
                iconStyle: {
                    marginTop: 2
                }
            }}
        >
            <BottomTabs.Screen
                name={StringsOfLanguages.home}
                component={HomeStackScreens}
            />
            {/* <BottomTabs.Screen name="Downloads" component={DownloadsStackScreens} /> */}
            <BottomTabs.Screen name={StringsOfLanguages.search} component={SearchStackScreens} />
            <BottomTabs.Screen name={StringsOfLanguages.profile} component={ProfileStackScreens} />
        </BottomTabs.Navigator>
    )
}

const NavigatorRender = ({ userToken, language }) => {
    useEffect(()=>{
        StringsOfLanguages.setLanguage(language);
    },[language])
    const isSignedIn = false;
    return (
        <NavigationContainer>
            {!userToken ? (
                <AuthStackScreens />
            ) : (
                <MainWindow.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <MainWindow.Screen
                        name="Home"
                        component={NavNavBar}
                    />
                    <MainWindow.Screen
                        name="Player"
                        component={PlayerStackScreens}
                    />
                </MainWindow.Navigator>
            )
            }


        </NavigationContainer>
    );
};

const mapStateToProps = state => {
    return {
        userToken: state.auth.userToken,
        language: state.auth.language,
        watching: state.movie.watching
    }
}

export default connect(mapStateToProps)(NavigatorRender);