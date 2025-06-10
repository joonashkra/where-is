import { Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import React, { useContext } from 'react';
import NewItemForm from '@/components/NewItemForm';
import { AppContext } from '../_layout';
import { NewItem } from '@/types';
import itemService from '@/services/itemService';
import { useRouter } from 'expo-router';

export default function AddItemScreen() {
  const { items, setItems } = useContext(AppContext);
  const router = useRouter();

  const handleSubmit = async (newItem: NewItem) => {
      const { name, description, image } = newItem;
      console.log('Submitting:', { name, description, image });
      try {
        const newItem = await itemService.addItem({ name, description, image });
        alert("Item added successfully!");
        setItems(items.concat(newItem));
        router.navigate(`/items/${newItem.id}`);
      } catch (error) {
        console.error("Error adding item:", error);
        alert("Failed to add item. Please try again.");
      }
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex items-center p-5 min-h-screen">
        <Text className='text-4xl'>New Item</Text>
        <NewItemForm handleSubmit={handleSubmit} />
      </View>
    </TouchableWithoutFeedback>
  );
};