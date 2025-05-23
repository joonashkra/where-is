import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import itemService from '@/services/itemService';
import { Item } from '@/types';
import { ItemsContext } from '../_layout';

const Details = () => {

    const { id } = useLocalSearchParams<{ id: string }>();
    const [item, setItem] = useState<Item>();
    const router = useRouter();
    const { items, setItems } = useContext(ItemsContext);
    
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
                router.navigate('/items');
                setItems(items.filter(item => item.id !== id))
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
      <View className='w-1/5 p-0 m-0 flex justify-end items-end'>
        <Button title="Delete" onPress={() => handleDeleteItem()} color={"#2b7fff"} />
      </View>
    </View>
  )
}

export default Details;

const styles = StyleSheet.create({})