export interface Item {
    id: string;
    name: string;
    description: string;
    image: string | null;
}

export interface NewItem {
    name: string;
    description: string;
    image: string | null;
}