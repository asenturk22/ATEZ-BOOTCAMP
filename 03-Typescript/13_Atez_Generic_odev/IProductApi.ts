import { IProduct } from "./IProduct"

export interface IProductApi<T> {
    findAll: () => T[];
    findByCategory: (category : string) =>  T[];
    findByText: (input:string) => T[];
}