import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { COLORS} from '../constans/Constans'
import CardComponent from '../components/CardComponents/CardComponent'
const LoginScreen = () => {
    return (
        <View style={styles.containerScreen}>
            <View style={styles.containerTitle}>
               <Text style={styles.title}>translate app</Text>
            </View>
            <ScrollView>
                <CardComponent />
            </ScrollView>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    containerTitle : {
        flex: 0.33,
        justifyContent: "center",
    },
    title: {
        fontFamily: "Roboto-Bold",
        fontSize: 21,
        textAlign: "center",
        letterSpacing: 1,
        textTransform: "uppercase",
        color: COLORS.defualt
    }
})