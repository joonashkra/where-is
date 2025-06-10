import { Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ItemsList from '@/components/ItemsList'
import ItemsSearch from '@/components/ItemsSearch'
import { AppContext } from '../_layout'
import itemService from '@/services/itemService'

export default function ItemsScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const { items, setItems } = useContext(AppContext);

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
      <View>
        <ItemsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ItemsList items={filteredItems} />
      </View>
  )
};