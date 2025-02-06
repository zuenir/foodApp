import React from 'react'
import { View, Text, Pressable } from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons';

export function Header (){
  return (
    <View className='w-full flex-row items-center justify-between'>
        <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
            <Ionicons name='menu' size={20} color='#121212'/>
        </Pressable>

        <View className='flex flex-col items-center justify-center'>
            <Text className='text-center text-sm'>Localização</Text>
            <View className='flex-row items-center justify-center gap-1'>
                <Feather name='map-pin' size={14} color="#ff0000"/>
                <Text className='text-lg font-bold'>Luanda | Angola</Text>
            </View>
        </View>

        <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
            <Ionicons name='notifications' size={20} color='#121212'/>
        </Pressable>
    </View>
  )
}

