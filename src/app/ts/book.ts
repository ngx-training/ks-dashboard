export interface Book {
    name: string;
    description?: string;
    price: number;
    saleIndicator: number;
}

export interface BookCreate extends Book {
    id: number;
    coverImagePath: string;
}