import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import COLORS from '../../const/colors';
const {height, width} = Dimensions.get('window');

const Screen1 = ({navigation}) => {
	return (
		<SafeAreaView style={{flex: 1, color: COLORS.primary}}>
			<Text>Screen1</Text>
		</SafeAreaView>
	);
};

const syle = StyleSheet.create({
	
});
export default Screen1;