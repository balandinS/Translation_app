import React, { useEffect } from 'react'
import { StyleSheet, View, SafeAreaView, FlatList, Platform } from 'react-native'
import { getSMS } from './utilsScreens'
const MessagesScreen = () => {

    useEffect(() => {
       if(Platform.OS === 'android') getSMS()
    }, [])
    return (
        <View styles={styles.messagesContainer}>
            <SafeAreaView>
                <FlatList 
                  
                />
            </SafeAreaView>
        </View>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
    messagesContainer: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 5
    }
})
