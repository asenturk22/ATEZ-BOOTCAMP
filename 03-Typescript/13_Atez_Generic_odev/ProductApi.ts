import { IProduct } from "./IProduct"
import { IProductApi } from "./IProductApi"
import { dummyData } from "./DataSource";

export class ProductApi implements IProductApi<T> {

    findByCategory<T extends IProduct>(category: string): T[] {
        for (let item of dummyData) {
            if (category === item.category) {
                console.log(item.category);
            }
        }

        return [];
    }

    // findByCategory <T extends IProduct> (IProduct: T): IProduct<T> Deniz Can Tufekci ---
    findAll: () => IProduct[];
    findByText: (input:string) => IProduct[];
}
