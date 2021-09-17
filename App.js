import 'react-native-gesture-handler';
import React from 'react';

import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsScreen from './src/views/screen/DetailsScreen';
import HomeScreen from './src/views/screen/HomeScreen';
import DrawerNavigator from './src/views/navigators/DrawerNavigator';
import Screen1 from './src/views/screen/Screen1';
import Screen2 from './src/views/screen/Screen2';
import Screen3 from './src/views/screen/Screen3';

const Stack = createNativeStackNavigator();



export default function App() {
  
	return (
    
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="HomeScreen" component={DrawerNavigator}/>
				<Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
				<Stack.Screen name="Screen1" component={Screen1}/>
				<Stack.Screen name="Screen2" component={Screen2}/>
				<Stack.Screen name="Screen3" component={Screen3}/>
			</Stack.Navigator>
		</NavigationContainer> 
	);

}



const styles = StyleSheet.create({
  
	container: {
    
		flex: 1,
    
		backgroundColor: '#fff',
    
		alignItems: 'center',
    
		justifyContent: 'center',
  
	},

});
