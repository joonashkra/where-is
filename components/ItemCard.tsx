import { View, Text, Image } from 'react-native'
import React from 'react'
import { Item } from '@/types';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <View className='flex flex-col gap-6'>
      <View className='flex flex-col items-center justify-center gap-6'>
        <Text className='text-4xl font-medium px-2'>{item.name}</Text>
        {item.image && (
            <Image source={{ uri: item.image }} className="size-96 rounded-md" />
        )}
      </View>
      <View className='gap-2 w-full'>
        <Text className='text-2xl font-medium'>Description</Text>
        <Text className='text-lg'>{item.description}</Text>
      </View>
    </View>
  )
};