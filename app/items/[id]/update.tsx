import { View, Text, TouchableWithoutFeedback, Keyboard ,ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/app/_layout';
import { Item, NewItem } from '@/types';
import itemService from '@/services/itemService';
import NewItemForm from '@/components/NewItemForm';

export default function update() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { items, setItems } = useContext(AppContext);
  const router = useRouter();

  const item = items.find(item => item.id === id);

    const handleSubmit = async (updatedItem: NewItem) => {
        const { name, description, image } = updatedItem;
        console.log('Updating:', { name, description, image });
        try {
            const updated = await itemService.updateItem(id, { name, description, image });
            alert("Item updated successfully!");
            setItems(items.map(item => item.id === id ? updated : item));
        } catch (error) {
            console.error("Error updating item:", error);
            alert("Failed to update item.");
        }
    }

    if (!item) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className='text-3xl'>Item not found!</Text>
            </View>
        );
    }
      

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className='py-6 h-full flex flex-col items-center'>
            <Text className='text-4xl font-medium px-2'>{item.name}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <NewItemForm item={item} handleSubmit={handleSubmit} />
            </ScrollView>
        </View>
    </TouchableWithoutFeedback>
  );
}
