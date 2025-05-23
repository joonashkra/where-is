import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import ItemsList from '@/components/ItemsList'
import ItemsSearch from '@/components/ItemsSearch'
import { WhereIsContext } from '../_layout'
import { useRouter } from 'expo-router'

const index = () => {
  const { items } = useContext(WhereIsContext);
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState('');

  if(!items) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <View className="flex py-4 gap-4">
        <View className='flex flex-row p-2 w-96'>
          <Button title="Go Home" onPress={() => router.navigate('/items')} color={"#2b7fff"} />
          <Text className="text-3xl text-center flex self-center">Items</Text>
        </View>
        <ItemsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ItemsList items={filteredItems} />
      </View>
  )
}

export default index

const styles = StyleSheet.create({})