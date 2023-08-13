import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.sec}}>
        <View className="flex-1 flex justify-around my-4">
            <Text 
                className="font-bold text-4xl text-center" style={{color: themeColors.nt}}>
                Let's Get Started!
            </Text>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/welcome.png")}
                    style={{width: 350, height: 350}} />
            </View>
            <View className="flex-row justify-center">
                <Image source={require("../assets/images/zb1.png")}
                    style={{width: 160, height: 50}} />
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('SignUp')}
                    className="py-3 mx-7 rounded-xl" 
                    style={{backgroundColor: themeColors.acc}}>
                        <Text 
                            className="text-xl font-bold text-center text-gray-700"
                            style={{color: themeColors.pri}}
                        >
                            Sign Up
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-white font-semibold">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                        <Text className="font-semibold" style={{color: themeColors.acc}}> Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}