import { View, Text, TextInput, Button, Image, TouchableOpacity, Keyboard, Alert } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Item, NewItem } from '@/types';

interface ItemFormProps {
  item?: Item;
  handleSubmit: (item: NewItem) => void;
}

export default function ItemForm({ handleSubmit, item }: ItemFormProps) {
  console.log(item);
  const [name, setName] = useState(item ? item.name : '');
  const [description, setDescription] = useState(item ? item.description : '');
  const [image, setImage] = useState<string | null>(item ? item.image : null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmit = () => {
    if (!name || !description) {
      Alert.alert("Please provide both name and description.");
      return;
    }
    const newItem: NewItem = {
      name,
      description,
      image: image || null,
    };
    handleSubmit(newItem);
    if (!item) {
      setName('');
      setDescription('');
      setImage(null);
    }
    Keyboard.dismiss();
  }

  return (
      <View className='w-screen flex-col gap-5 rounded-md p-5'>
        <View>
          <Text className='text-xl'>Item Name</Text>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Enter item name"
            multiline
            numberOfLines={1}
            className="bg-gray-200 p-3 text-xl rounded-md"
          />
        </View>
        <View>
          <Text className='text-xl'>Description</Text>
          <TextInput
            onChangeText={setDescription}
            value={description}
            placeholder="Enter description"
            multiline
            numberOfLines={4}
            className="bg-gray-200 p-3 text-xl rounded-md"
          />
        </View>

        <View>
          <TouchableOpacity onPress={pickImage} className='flex-col gap-2 mb-2 items-start'>
            <Text className="text-center text-xl text-blue-500">{!image ? "Pick an image" : "Change image"}</Text>
            {image && (
              <View>
                <Image source={{ uri: image }} className="w-32 h-32 rounded-md" />
              </View>
            )}
          </TouchableOpacity>
        </View>
        <View className='p-2 bg-blue-500 rounded-md'>
          <Button title={item ? 'Update Item' : 'Add Item'} onPress={onSubmit} color={"#f9fafb"} testID='submit-button' />
        </View>
      </View>
  );
};