import { Stack } from "expo-router";
import { createContext, useState } from "react";
import { Item } from "@/types";
import "./globals.css";

export interface AppContextType {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const AppContext = createContext<AppContextType>(null as unknown as AppContextType);

export default function RootLayout() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <AppContext.Provider value={{ items, setItems }}>
      <Stack />
    </AppContext.Provider>
  )
}
