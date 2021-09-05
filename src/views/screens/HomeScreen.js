import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {height, width} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
	return (
		<SafeAreaView style={{flex: 1, color: COLORS.white}}>
			<View style={styles.header}>
				<Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer}/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		padding:20,
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems:'center',
	}
});
export default HomeScreen;