import { View, Text, TextInput, Button, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import itemService from '@/services/itemService';

const NewItemForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null); // Ensure type safety

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // Use 'image' for latest expo-image-picker
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri); // Ensure we set a valid image URI
    }
  };

  const handleSubmit = () => {
    if(!name || !description) {
      alert("Please give name and description.");
      return;
    }
    console.log('Submitting:', { name, description, image });
    // TODO: Handle form submission
    itemService.addItem({
      name,
      description,
      image,
    }).then(() => {
      console.log("Item added successfully");
      alert("Item added successfully!");
      setName('');
      setDescription('');
      setImage(null);
    }).catch((error) => {
      console.error("Error adding item:", error);
      alert("Failed to add item. Please try again.");
    });
    Keyboard.dismiss();
  };

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
          <Button title="Add Item" onPress={handleSubmit} color={"#f9fafb"} />
        </View>
      </View>
  );
};

export default NewItemForm;
