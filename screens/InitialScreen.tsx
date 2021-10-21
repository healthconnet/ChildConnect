import React from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "../components/Themed";
import window from "../constants/Layout";

function InitialScreen() {
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require("../assets/images/logo.jpg")} />
			<Text>Child Connect</Text>
		</View>
	);
}

const windowSize = window.window;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: "30%",
		width: windowSize.width,
	},
});

export default InitialScreen;
