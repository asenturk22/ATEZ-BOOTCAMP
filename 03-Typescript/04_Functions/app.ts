//Functions  return : number
function add(a:number, b:number) : number {
    return a + b;
}

let toplam = add(10, 20);
console.log("a + b = ", toplam);


//Functions  return : void
function display() : void {
    console.log("Abdullah Şentürk")
}

display();


//Functions  return : string
function displayEmployee(firstName: string, lastName : string) : string {
    return `${firstName} ${lastName}`;
}

console.log(displayEmployee("Abdullah", "Şentürk"));

//Function parameter optional 
function calculate(a: number, b: number, c?: number) {
    if (typeof c !== "undefined") {
        return a*b*c;
    }

    return a*b;
}

console.log(calculate(5,4));
console.log(calculate(5,4, 5));

//Arrow FUnction
let cal = (a:number, b:number) : number => {
    return a * b;
};

//let cal = (a:number, b:number) : number => a * b;

console.log("çarpim : ", cal(5, 25));


//function overloading
function topla(a: number, b:number) : number;
function topla(a: number, b:string) : string;
function topla(a: string, b:number) : string;
function topla(a: string, b:string) : string;

function topla(a: any, b:any) : any {
    return a + b;
}

console.log(topla(1,5));
console.log(topla("A",5));
console.log(topla(1,"B"));
console.log(topla("A","Ş"));


//rest parameters
function sum(...numbers: number[]): number{
    let total = 0;
    numbers.forEach((num)=> total += num);
    return total;
}

console.log("Sayilarin toplami : ", sum());
console.log("Sayilarin toplami : ", sum(10));
console.log("Sayilarin toplami : ", sum(10, 20));
console.log("Sayilarin toplami : ", sum(10, 20, 30));
console.log("Sayilarin toplami : ", sum(10, 20 ,30, 40));





