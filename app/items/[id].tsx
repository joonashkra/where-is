import { ScrollView, Text, View, Image, Button, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import itemService from '@/services/itemService';
import { Item } from '@/types';
import { AppContext } from '../_layout';
import ItemCard from '@/components/ItemCard';

export default function Details() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const { items, setItems } = useContext(AppContext);
    
    const item = items.find(item => item.id === id);

    const handleDeleteItem = async () => {
      Alert.alert(
        'Delete item?',
        'This cannot be undone.',
        [
          {
            text: "Yes",
            onPress: async () => {
              try {
                await itemService.deleteItem(id);
                alert('Item deleted succesfully!');
                setItems(items.filter(item => item.id !== id))
                router.navigate('/items');
              } catch (error) {
                alert('Error deleting item.');
              }
            }
          },
          {
            text: "No",
            onPress: () => console.log("Cancel")
          }
        ],
        { cancelable: false }
      )
    }

  if (!item) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-3xl'>Item not found!</Text>
      </View>
    )
  }

  return (
    <View className='p-6 h-full flex flex-col justify-between pb-10'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemCard item={item} />
      </ScrollView>
      <View className='flex flex-row w-full justify-between px-6 pt-4'>
        <Button title="Update" onPress={() => router.navigate(`/items/${id}/update`)} color={"#3b82f6"} />
        <Button title="Delete" onPress={() => handleDeleteItem()} color={"#ef4444"} />
      </View>
    </View>
  )
};