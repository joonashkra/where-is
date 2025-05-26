import { FlatList, Text, View, Image, Pressable, PanResponder, TouchableOpacity } from 'react-native';
import React from 'react';
import { Item } from '../types';
import { Link } from 'expo-router';

interface ItemsListProps {
    items: Item[];
}

export default function ItemsList({ items }: ItemsListProps) {
    return (
        <FlatList
            className="w-screen"
            testID="items-list"
            data={items}
            contentContainerStyle={{ paddingBottom: 120 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Link href={`/items/${item.id}`} asChild>
                    <Pressable>
                        <View className="flex-row gap-4 p-5 border-b border-gray-300" testID='item'>
                            {item.image && (
                                <Image source={{ uri: item.image }} className="w-24 h-24 rounded-md" />
                            )}
                            <View
                                className={`flex-col gap-2 ${item.image ? 'w-64' : 'w-full px-1'}`}
                            >
                                <Text
                                    className="text-xl font-medium"
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    className="text-lg"
                                    numberOfLines={2}
                                    ellipsizeMode="tail"
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                </Link>
            )}
        /> 
    );
};