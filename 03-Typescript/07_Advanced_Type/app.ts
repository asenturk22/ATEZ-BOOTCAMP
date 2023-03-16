interface BusinessPartner{
    name: string;
    credit: number;
}

interface Identity{
    name: string;
    id: number;
}

interface Contact{
    email: string;
    phone: string;
}


//Type Intersection
type Employee = Identity & Contact;

let employee:Employee = {
    id:50,
    name: 'Abdullah Şentürk',
    email: 'asenturk22@yandex.com',
    phone: '555-555-5555'
}

console.log( employee );

type Customer = BusinessPartner & Contact;
let customer:Customer = {
    name: 'Abdullah Şentürk',
    email: 'asenturk22@yandex.com',
    phone: '555-555-5555',
    credit : 5000
}
console.log( customer );


//TYpe Guard
type tip = string | number;

function add(a : tip, b: tip) {
    if (typeof a === 'number' && typeof b === 'number') 
        return a + b;
    if (typeof a === 'string' && typeof b === 'string') 
        return a.concat(b);
    
    throw new Error ("Lütfen dogru deger girdiginizden emin olunuz. ");
}


console.log(add(5,6));
console.log(add("Abdullah ", "Şentürk"));
console.log(add(5,"a"));


class Customer2 {
    isCreaditAllowed(): boolean {
        //..
        return true;
    }
}

class Supplier{
    isInShortList(): boolean {
        //...
        return true;
    }
};

type BusinessPartner2 = Customer2 | Supplier;

function signContract(partner: BusinessPartner2) : any {
    // let message : string;
 
     if (partner instanceof Customer2) {
         return partner.isCreaditAllowed() ? 'sign a new contract with the customer' : 'Credit issue';
     }
 
     if (partner instanceof Supplier) {
         return partner.isInShortList() ? 'sign a new contract with the supplier' : 'Nead to evaluate further';
     }
 }
 
 
















