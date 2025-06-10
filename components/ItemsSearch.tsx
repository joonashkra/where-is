import React from 'react'
import { Button, TextInput, View } from 'react-native'

interface ItemsSearchProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

export default function ItemsSearch({ setSearchTerm, searchTerm }: ItemsSearchProps) {
  return (
    <View className='flex-row justify-between items-center self-center bg-gray-200 p-2 w-96 my-4'>
      <TextInput
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholder="Search items..."
        placeholderTextColor="#50b39b"
        className="bg-gray-200 text-xl rounded-md overflow-hidden pl-2 w-4/5"
      />
      <View className='w-1/5 p-0 m-0 flex justify-end items-end'>
        <Button title="Clear" onPress={() => setSearchTerm('')} color={"#2b7fff"} />
      </View>
    </View>
  )
};