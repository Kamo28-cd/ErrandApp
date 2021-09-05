import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react=native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('window');

const DetailsScreen = ({navigation}) => {
	return (
		<SafeAreaView style={{flex: 1, color: COLORS.white}}>
			<Text>Details</Text>
		</SafeAreaView>
	);
};

const syle = StyleSheet.create({
	
});
export default DetailsScreen;