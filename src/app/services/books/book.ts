import { Author } from "../authors/author";
import { BookCategory } from "../book-categories/book-category";
import { Genre } from "../genres/genre";

export interface Book {
    id?: number;
    title: string;
    description: string;
    price: number;
    publishDate: string;
    isAvailable: boolean;
    published_at: string;
    created_at: string;
    updated_at: string;
    authors: Author[];
    book_categories: BookCategory[];
    genres: Genre[];
}
