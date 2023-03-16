import {IProduct } from "./Product/IProduct";
import {ITablet} from "./Product/ITablet";
import {ITelevision} from "./Product/ITelevision";
import {ISmartPhone} from "./Product/ISmartPhone";
import {ILaptop} from "./Product/ILaptop";
import { dummyData } from "./dummy_db/dummy";

interface IProductApi<T> {
    findAll() : T[];
    findByCategory<U extends T> (category: string): T[];
    findByText: (input:string) => void;
}

class ProductApi<T> implements IProductApi<T> {
    private dataSource = dummyData;
    private product : T[] = [];
    
    findAll() : T[] {
        this.product = [];
        
        this.dataSource.forEach( item => {
            let p = {
                id : item.id, 
                title : item.title,
                description : item.description, 
                price : item.price,
                rating : item.rating, 
                thumbnail :  item.thumbnail,
            } as T         
    
            this.product.push(p)
        })

        return this.product;
    }
    
    findByCategory <U extends T> (category: string) : U[] {
        let productU : U[] = [];
        let p;

        for (let item of this.dataSource) {
            if (item.category === category) {
                p = {
                    id : item.id, 
                    title : item.title,
                    description : item.description, 
                    price : item.price,
                    rating : item.rating, 
                    thumbnail :  item.thumbnail,      
                    color : item.color,
                    celluar : item.celluar, 
                    wifi : item.wifi
                } as U        
                productU.push(p)                         
            } else if (item.category === category) {
                p = {
                    id : item.id, 
                    title : item.title,
                    description : item.description, 
                    price : item.price,
                    rating : item.rating, 
                    thumbnail :  item.thumbnail,  
                    smartTv: item.smartTv,
                    stock: item.stock
                } as U;
                productU.push(p)                         
            } else if (item.category === category) {
                p = {
                    id : item.id, 
                    title : item.title,
                    description : item.description, 
                    price : item.price,
                    rating : item.rating, 
                    thumbnail :  item.thumbnail,  
                    discountPercentage: item.discountPercentage,
                    screenDimentions: item.screenDimentions,
                }  as U;
                productU.push(p)                         
            } else if (item.category === category) {
                p = {
                    id : item.id, 
                    title : item.title,
                    description : item.description, 
                    price : item.price,
                    rating : item.rating, 
                    thumbnail :  item.thumbnail,  
                    color: item.color,
                }  as U;
                productU.push(p)                         
            }             
        }

        return productU;
    }

    findByText(input: string) : void {
        let text;

        this.dataSource.filter( (item) => {      
            if (item.description.toLowerCase().search(input.toLowerCase()) !== -1) {
                console.log(item)
            } 
        })
    } 
}

let product = new  ProductApi<IProduct>();
//console.log(product.findAll());

console.log("*************    TABLET   *****************")
console.log(product.findByCategory<ITablet>("tablet"))
console.log("*************    LAPTOP   *****************")
console.log(product.findByCategory<ILaptop>("laptop"))
console.log("*************  TELEVISION *****************")
console.log(product.findByCategory<ITelevision>("television"))
console.log("************* SMARTPHONES *****************")
console.log(product.findByCategory<ISmartPhone>("smartphones"))
console.log("************* TEXT/SEARCH *****************")
console.log(product.findByText("Samsung"));



