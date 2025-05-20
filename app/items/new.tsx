import { Text, TouchableWithoutFeedback, View, Keyboard } from 'react-native';
import React from 'react';
import NewItemForm from '@/components/NewItemForm';

const AddItem = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex items-center p-5 min-h-screen">
        <Text className='text-4xl'>New Item</Text>
        <NewItemForm />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddItem;
