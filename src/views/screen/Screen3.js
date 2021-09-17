import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import COLORS from '../../const/colors';
import {Icon, Button, SocialIcon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');

const Screen3 = ({navigation}) => {
	return (
		<SafeAreaView style={{flex: 1, color: COLORS.primary}}>
			<Icon name="sort" size={28} onPress={navigation.toggleDrawer}/>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	
});
export default Screen3;