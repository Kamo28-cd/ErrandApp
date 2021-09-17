import React from 'react';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, useDrawerProgress, useDrawerStatus} from '@react-navigation/drawer';
import {View, Image, Text, StatusBar} from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import Animated from 'react-native-reanimated';

import Screen1 from '../screen/Screen1'; 
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props)=> {
	return (
		<DrawerContentScrollView style={{paddingVertical:30}}>
			<View style={{marginLeft: 20, marginVertical:40}}>
				<Image source={require('../../assets/default2.png')} style={{height: 70, width:70, borderRadius: 70}}/>
				<Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 13, marginTop:10}}>Mary Smith</Text>
			</View>
			<DrawerItemList {...props}/>
		</DrawerContentScrollView>
	)
}

const DrawerScreenContainer = ({children}) =>{
	const progress = useDrawerProgress();
	const isDrawerOpen = useDrawerStatus();
	
	const scale = Animated.interpolateNode(progress, {inputRange:[0,1], outputRange:[1, 0.8]});
	const borderRadius = Animated.interpolateNode(progress, {inputRange:[0,1], outputRange:[0, 25]});
	return (
		<Animated.View style={{backgroundColor: COLORS.white, flex: 1, transform: [{scale}],borderRadius, overflow:'hidden'}}>
			<StatusBar barStyle="dark-content" backgroundColor={isDrawerOpen == "open" ? COLORS.primary : COLORS.white}/>
			{children}
		</Animated.View>
	)
}

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator screenOptions={{headerShown: false,
			drawerType: 'slide',
			drawerStyle:	{
				width:200,
				backgroundColor: COLORS.primary,
			},
			overlayColor: null,
			sceneContainerStyle:{
				backgroundColor: COLORS.primary,
			},
			darwerActiveTintColor:COLORS.white,
			drawerInactiveTintColor: COLORS.white,
			drawerItemStyle: {backgroundColor:null},
			drawerLabelStyle: {
				fontWeight:'bold',
			}
		}}
			drawerContent={props => <CustomDrawerContent {...props} />}	
		>
			<Drawer.Screen name="Home" options={{title:'HOME', drawerIcon: ({color}) => <Icon name="account" sie={25} color={color}/>,}}>
				{(props) => 
					<DrawerScreenContainer >
						<HomeScreen {...props}/>
					</DrawerScreenContainer>}
			</Drawer.Screen>
			<Drawer.Screen name="Screen1" options={{title:'SCREEN 1', drawerIcon: ({color}) => <Icon name="gift" sie={25} color={color}/>,}}>
				{(props) => 
					<DrawerScreenContainer >
						<Screen1 {...props}/>
					</DrawerScreenContainer>}
			</Drawer.Screen>
			<Drawer.Screen name="Screen2" options={{title:'SCREEN 2', drawerIcon: ({color}) => <Icon name="plus-box" sie={25} color={color}/>,}}>
				{(props) => 
					<DrawerScreenContainer >
						<Screen2 {...props}/>
					</DrawerScreenContainer>}
			</Drawer.Screen>
			<Drawer.Screen name="Screen3" options={{title:'SCREEN 3', drawerIcon: ({color}) => <Icon name="heart" sie={25} color={color}/>,}}>
				{(props) => 
					<DrawerScreenContainer >
						<Screen3 {...props}/>
					</DrawerScreenContainer>}
			</Drawer.Screen>
		</Drawer.Navigator>
	)
}

export default DrawerNavigator;