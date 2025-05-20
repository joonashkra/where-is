import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import ItemsList from '@/components/ItemsList'
import itemService from '@/services/itemService'
import { Item } from '@/types'
import ItemsSearch from '@/components/ItemsSearch'

const index = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      const getItems = async () => {
          try {
              const items = await itemService.getAllItems();
              setItems(items);
          } catch (error) {
              console.log(error);
          }
      };
      getItems();
  }, []);

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
      <Text className="text-3xl text-center">Items</Text>
      <ItemsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ItemsList items={filteredItems} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})