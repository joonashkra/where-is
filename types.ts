export interface Item {
    id: number;
    name: string;
    description: string;
    image: string | null;
}

export interface NewItem {
    name: string;
    description: string;
    image: string | null;
}