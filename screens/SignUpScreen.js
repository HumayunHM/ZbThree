import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

// subscribe for more videos like this :)
export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.sec}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
            <TouchableOpacity 
                onPress={()=> navigation.goBack()}
                className="bg-yellow-400 p-2 rounded-lg ml-4"
                style={{backgroundColor: themeColors.acc}}
            >
                <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: themeColors.pri}}
      >
        <View className="form space-y-2">
            <Text className="text-white ml-4">Full Name</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="john snow"
                placeholder='Enter Name'
            />
            <Text className="text-white ml-4">Email Address</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value="john@gmail.com"
                placeholder='Enter Email'
            />
            <Text className="text-white ml-4">Password</Text>
            <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value="test12345"
                placeholder='Enter Password'
            />
            <TouchableOpacity
                className="py-3 rounded-xl"
                style={{backgroundColor: themeColors.acc}}
            >
                <Text className="font-xl font-bold text-center" style={{color: themeColors.pri}}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-white font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-10 h-10" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="font-semibold" style={{color: themeColors.nt}}>Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold" style={{color: themeColors.acc}}> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
