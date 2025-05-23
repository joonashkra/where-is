import { Stack } from "expo-router";
import './globals.css';
import { createContext, useEffect, useState } from "react";
import itemService from "@/services/itemService";
import { Item } from "@/types";

interface WhereIsContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const WhereIsContext = createContext<WhereIsContextType>(null as unknown as WhereIsContextType);

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
    <WhereIsContext.Provider value={{ items, setItems }}>
      <Stack />
    </WhereIsContext.Provider>
  )
}
