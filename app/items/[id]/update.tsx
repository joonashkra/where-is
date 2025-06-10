import { View, Text, TouchableWithoutFeedback, Keyboard ,ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React, { useContext } from 'react';
import { AppContext } from '@/app/_layout';
import { NewItem } from '@/types';
import itemService from '@/services/itemService';
import ItemForm from '@/components/ItemForm';

export default function UpdateItemScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { items, setItems } = useContext(AppContext);

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
                <ItemForm item={item} handleSubmit={handleSubmit} />
            </ScrollView>
        </View>
    </TouchableWithoutFeedback>
  );
}
