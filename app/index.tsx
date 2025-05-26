import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      className="flex-1 justify-center items-center gap-6 p-6"
    >
      <Text className="text-5xl text-black">Where Is</Text>
      <Link href="/items/new" className="p-4 bg-blue-500 text-2xl rounded-md text-gray-50 w-1/2 text-center">Add Item</Link>
      <Link href="/items" className="p-4 bg-blue-500 text-2xl rounded-md text-gray-50 w-1/2 text-center">Items List</Link>
    </View>
  );
}
