import { Stack } from "expo-router";
import './globals.css';
import { createContext, use, useEffect, useState } from "react";
import itemService from "@/services/itemService";
import { Item } from "@/types";

interface AppContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const AppContext = createContext<AppContextType>(null as unknown as AppContextType);

export default function RootLayout() {
    const [items, setItems] = useState<Item[]>([]);
  
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

    console.log(items);

  return (
    <AppContext.Provider value={{ items, setItems }}>
      <Stack />
    </AppContext.Provider>
  )
}
