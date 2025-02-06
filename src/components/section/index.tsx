import React from 'react'
import { Pressable, Text, View } from 'react-native'

interface Props{
    name: string;
    size: "text-lg" | "text-xl" | "text-2xl"; 
    label?: string;
    action?: () => void;
}

export const Section = ({name,size,label,action}:Props) => {
  return (
    <View className='w-full flex flex-row items-center justify-between px-4'>
        <Text className={`${size} font-bold my-4 self-start`}>{name}</Text>
        <Pressable onPress={action}>
            <Text>{label}</Text>
        </Pressable>
    </View>
  )
}
