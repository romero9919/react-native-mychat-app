import React, { useEffect } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import LogoImage from '../assets/logo.png'
import colors from '../colors'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const nav = useNavigation();
    useEffect(()=>{
        nav.setOprions({
            headerLeft: () => (
                <FontAwesome name="search" size={25} color={colors.gray}
                            style={{marginLeft: 15}}
                />
            ),
            headerRight: () => (
                <Image source={LogoImage}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                />
            )
        })
    }, [nav]);

  return (
    <View>
        <TouchableOpacity style={styles.chatButton}>
            <Entypo name="chat" />
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: colors.bGround
    },

    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50
    }
});