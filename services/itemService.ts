import axios from 'axios';
import { Item, NewItem } from '../types';

const baseUrl = `http://${process.env.EXPO_PUBLIC_IP_ADDR}:3001/items`;

const getAllItems = async (): Promise<Item[]> => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const getItemById = async (id: string): Promise<Item> => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

const addItem = async (item: NewItem) => {
    const response = await axios.post(baseUrl, item);
    return response.data;
};

const updateItem = async (id: string, updatedItem: NewItem): Promise<Item> => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedItem);
    return response.data;
};

const deleteItem = async (id: string) => {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
};

export default { getAllItems, getItemById, addItem, updateItem, deleteItem };