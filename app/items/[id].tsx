import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import itemService from '@/services/itemService';
import { Item } from '@/types';

const Details = () => {

    const { id } = useLocalSearchParams<{ id: string }>();
    const [item, setItem] = useState<Item>();
    
    useEffect(() => {
            const getItem = async () => {
                try {
                    const item = await itemService.getItemById(id);
                    setItem(item);
                } catch (error) {
                    console.log(error);
                }
            };
            getItem();
        }, []);

  if (!item) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-3xl'>Loading...</Text>
      </View>
    )
  }

  return (
    <View className='flex w-screen h-screen items-center gap-6 p-6'>
      <Text className='text-4xl font-medium px-2'>{item.name}</Text>
      {item.image && (
          <Image source={{ uri: item.image }} className="size-96 rounded-md" />
      )}
      <View className='w-full flex flex-col gap-2 px-2'>
        <Text className='text-2xl font-medium'>Description</Text>
        <Text className='text-lg'>{item.description}</Text>
      </View>
    </View>
  )
}

export default Details;

const styles = StyleSheet.create({})