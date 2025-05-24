import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import ItemsList from '@/components/ItemsList'
import ItemsSearch from '@/components/ItemsSearch'
import { AppContext } from '../_layout'
import { useRouter } from 'expo-router'

export default function index() {
  const { items } = useContext(AppContext);
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
      <View>
        <ItemsSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ItemsList items={filteredItems} />
      </View>
  )
};