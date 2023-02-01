import { Book } from "./book";

export class BookCalc implements Book {
    name: string = 'Buch 2';
    price: number = 200;
    saleIndicator: number = 0.8;

    private cache: any;
    private readonly cacheSecure: any;

    constructor(name: string, price: number, saleIndicator: number) {
        this.name = name;
        this.price = price;
        this.saleIndicator = saleIndicator;
    }

    calcSalePrice(price: number, saleIndicator: number): number {
        return price * saleIndicator;
    }
}