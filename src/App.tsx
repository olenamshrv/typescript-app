//===Typescript==========================================

//==============Types===================================================

// import React from 'react';
// // import logo from './logo.svg';
// import './App.css';


  // const getSpace = (num: number ) : string => `${num*4}px;

  // function getSpace(num: number ): string {
  //   return `${num*4}px`
  // }

  // function getSpace(name: string, callback: (value: string, test?: number) => string ): string {
  //   return callback(name);
  // }



// function App() {

//   let age: number = 25;

//   let height: number = 1.75;

//   // height = "hello world";

//   let name: string="John";
//   const message: string = "Hello, world!";

//   // name = age + name;

//   // name = height + age;

//   name = String(height + age);


//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           {name} {message}
//         </p>
//         <p>
//           {age} {height}
//         </p>
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;


// //==================



// function App() {

// let value: string | null | number = "Hello, world!";

// value = null;

// value = 123;

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           {value}
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;


// //==================



// function App() {

//   let value: any = "Hello, world!";
  
//   value = null;
//   value = 123;
//   value = []
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             {value}
//           </p>
  
//         </header>
//       </div>
//     );
//   }


//   export default App;


// //==================



// function App() {

//   let value: unknown = "Hello, world!";
  
//   value = null;
//   value = 123;
//   value = []
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             {value}
//           </p>
  
//         </header>
//       </div>
//     );
//   }


//   export default App;


// //==================



// function App() {

//  const handleChange = (value: number): void => {}

  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>
//             Hello world
//           </p>
  
//         </header>
//       </div>
//     );
//   }


//   export default App;


// //==================



// function App() {

// let data: object = {};


// let person : {name: string; age: number | null; isStudent?: boolean} = {
//   name: "John",
//   // age: 25,
//   age: null,
//   // isStudent: true,
// }
 
//      return (
//        <div className="App">
//          <header className="App-header">
//            <p>
//              {person.name}
//            </p>
   
//          </header>
//        </div>
//      );
//    }
 
 
//    export default App;


// //==================



// function App() {

//   let numbers: Array<number> =[1,2,3,4,5];
//   let name: Array<string> = ["John", "Jane", "Mary"];
//   let mixed: Array<number | string> = [1, "hello", 3, "world"];
//   let nested: Array<Array<number>> = [[1,2], [3,4,5], [6]]
  
  
  
//        return (
//          <div className="App">
//            <header className="App-header">
//              <p>{numbers}</p>
//              <p>{name}</p>
//              <p>{mixed}</p>
//              <p>{nested}</p>     
//            </header>
//          </div>
//        );
//      }
   
   
//      export default App;


//==================

// function App() {

//   let numbers: number[] =[1,2,3,4,5];
//   let name: string[] = ["John", "Jane", "Mary"];
//   let mixed: (number | string)[] = [1, "hello", 3, "world"];
//   // let nested:  Array<number[]> = [[1,2], [3,4,5], [6]]

//   // let nested: (number[])[] = [[1,2], [3,4,5], [6]]

//   let nested: number[][] = [[1,2], [3,4,5], [6]]
  
  
  
//        return (
//          <div className="App">
//            <header className="App-header">
//              <p>{numbers}</p>
//              <p>{name}</p>
//              <p>{mixed}</p>
//              <p>{nested}</p>     
//            </header>
//          </div>
//        );
//      }
      
//      export default App;

//===========Classes=============================================

// import './App.css';

// class Book {
//   public title: string;
//   public author: string;
//   // ratings: number[];
//   public ratings: number[] = [];

//   constructor(title: string, author: string) {
//     this.title=title;
//     this.author=author;
//     // this.ratings=[];
//   }

//   // addRating(rating: number): void {
//   //   if (rating >= 1 && rating <=5) {
//   //     this.ratings.push(rating);
//   //     console.log(`Rating ${rating} added for ${this.title}`);
//   //   } else {
//   //     console.log(`Invalid rating. Please provide a rating between 1 and 5.`)
//   //   }
//   // }

//   addRating = (rating: number): void => {
//     if (rating >= 1 && rating <=5) {
//       this.ratings.push(rating);
//       console.log(`Rating ${rating} added for ${this.title}`);
//     } else {
//       console.log(`Invalid rating. Please provide a rating between 1 and 5.`)
//     }
//   }

//   getAverageRating(): number {
//     if (this.ratings.length===0) {
//       return 0;
//     }
//   const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
//   return sum / this.ratings.length;
//   }

//   displayInfo(): void {}
// }

// const book1 = new Book("The Catcher in the Rye", "J.D. Salinger");
// const book2 = new Book("The Kill a Mockingbird", "Harper Lee");

// book1.addRating(4);
// book1.addRating(5);
// book2.addRating(3);

// console.log(`Average rating for ${book1.title}: ${book1.getAverageRating()}`)
// console.log(`Average rating for ${book2.title}: ${book2.getAverageRating()}`)

// book1.displayInfo();
// book2.displayInfo();

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>Hello world</header>
//  </div>
//   )
// }

//==============================================================

// import './app.css';

// class person {
//   private firstname: string;
//   private lastname: string;
//   public age: number;
  
//   constructor(firstname: string, lastname: string, age: number) {
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.age=age;
//   }

//   public getfullname = ():string => {
//     return `${this.firstname} ${this.lastname}`;
//   }

//   private canvote = ():boolean => {
//      return this.age>=18;
//   }

//   checkvotingeligibility():void {
//     if (this.canvote()) {
//       console.log(`${this.getfullname()} is eligible to vote`);
//     } else {
//       console.log(`${this.getfullname()} is not eligible to vote`);
//     }
//   }

// }

// const person1 = new person("john", "doe", 25);
// const person2 = new person("janw", "smith", 16);

// console.log(person1.getfullname())
// console.log(person2.getfullname())

// person1.checkvotingeligibility();
// person2.checkvotingeligibility();

// function app() {
//   return (
//     <div classname='app'>
//       <header classname='app-header'>hello world</header>
//     </div>
//   )
// }

// //================================

// import './App.css';

// class User {
//   // private canAuth = (): boolean => true;
//   // public canAuth = (): boolean => true;
//   protected canAuth = (): boolean => true;
// }

// class Person extends User {
//   private firstName: string;
//   private lastName: string;
//   public age: number;
  
//   constructor(firstName: string, lastName: string, age: number) {
//     super();
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
//   }

//   public getFullName = ():string => {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   private canVote = ():boolean => {
//      return this.age>=18;
//   }

//   checkVotingEligibility():void {
//     this.canAuth()
//     if (this.canVote()) {
//       console.log(`${this.getFullName()} is eligible to vote`);
//     } else {
//       console.log(`${this.getFullName()} is not eligible to vote`);
//     }
//   }

// }

// const person1 = new Person("John", "Doe", 25);
// const person2 = new Person("Janw", "Smith", 16);

// console.log(person1.getFullName())
// console.log(person2.getFullName())

// person1.checkVotingEligibility();
// person2.checkVotingEligibility();

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>Hello world</header>
//     </div>
//   )
// }

// //============================================


// import './App.css';

// class Animal {
//   protected name: string;

//   constructor(name:string) {
//     this.name=name;
//   }

//   protected makeSound = (sound:string): void => {
//     console.log(`${this.name} makes a ${sound} sound.`)
//   }
// }

// class Dog extends Animal {
//   private breed: string;
  
//   constructor(name: string, breed: string) {
//     super(name);
//     this.breed=breed;
//   }

//   public displayBreed():void {
//     console.log(`${this.name} is a ${this.breed} dog.`)
//   }

//   public bark():void {
//     this.makeSound("bark");
//   }
// }

// const dog1 = new Dog("Buddy", "Golden Retriever");

// dog1.displayBreed()
// dog1.bark()


// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>Hello world</header>
//     </div>
//   )
// }

// //============================================


// import './App.css';

// class Circle {
//   // public readonly radius: number;
//   private readonly radius: number;

//   constructor(radius:number) {
//     this.radius=radius;

//     this.radius = 10;
//   }

//   calculatedarea (): number {
//     // this.radius = 10;
//     return Math.PI * this.radius ** 2;
//   }
// }

// const circle1 = new Circle(5);

// console.log(`Circle 1 - Radius: ${circle1.radius}, Area: ${circle1.calculatedarea()}`)

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>Hello world</header>
//     </div>
//   )
// }

// //============================================


// import './App.css';

// const product : {
//   readonly name: string;
//   readonly price: number;
//   description: string;
//   manufacturer: string;
//   inStock: boolean;
// } = {
//   name: "Laptop",
//   price: 999.99,
//   description: "A high performance laptop with the latest features",
//   manufacturer: "tchCo",
//   inStock: true,
// }

// // product.name="change";

// console.log(product);

// //================


// interface Person {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string;
// }

// const person1:Person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   email: "john@example.com",
// }

// function displayePersonInfo(person:Person): void {
//   console.log(`Name: ${person.firstName} ${person.lastName}`);
//   console.log(`Age: ${person.age}`)
//   if (person.email) {
//     console.log(`Email: ${person.email}`)
//   }
// }

// function App() {
//   const test: {
//     firstName: string;
//     lastName: string;
//     age: number;
//     test: number;
//   } = {
//     firstName: "Test",
//     lastName:  "Test",
//     age: 10,
//     test: 123,
//   }

//   displayePersonInfo(test);

//   return (
//     <div className='App'>
//       <header className='App-header'>Hello world</header>
//     </div>
//   )
// }

// export default App;


// //============================================


// import './App.css';

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// interface Employee {
//   getSalary(): number;
//   role: string;
// }

// class User {}

// class Manager extends User implements Employee, Person {
//   firstName: string;
//   lastName: string;
//   salary: number;
//   role: string;

//   constructor(firstName:string, lastName: string) {
//     super();
//     this.firstName = firstName;
//     this.lastName=lastName;
//     this.role="Manager";
//     this.salary = 50000;
//   }

//   getSalary(): number {
//     return this.salary;
//   }
// }

// class Developer implements Employee, Person {
//   firstName: string;
//   lastName: string;
//   salary: number;
//   role: string;


//   constructor(firstName:string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName=lastName;
//     this.role="Developer";
//     this.salary = 60000;
//   }

//   getSalary(): number {
//     return this.salary;
//   }
// }

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>Hello world</header>
//     </div>
//   )
// }

// export default App;


// //============================================


// import './App.css';

// enum COLOR {
//   RED="red",
//   GREEN="green",
//   BLUE="blue",
// }

// console.log(COLOR);

// function displayColor(color: COLOR): void {
//   if (color === COLOR.RED) {
//     console.log(`The selected color is Red.`);
//   } else if (color === COLOR.GREEN) {
//     console.log(`The selected color is Green.`);
//   } else if (color === COLOR.BLUE) {
//     console.log(`The selected color is Blue.`);
//   } else {
//     console.log("Invalid color.");
//   }
// }

// const selectedColor: COLOR = COLOR.GREEN;
// displayColor(selectedColor);


// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>Hello world</header>
//     </div>
//   )
// }

// export default App;


//============================================


import './App.css';

let book: [string, number, boolean];

book = ["The Catcher in the Rye", 1951, true]

const title: string = book[0];
const year: number = book[1];
const isAvailable = book[2];

console.log(book);

// book[0] =10;
book[0] ="10";

// book.push(10);

// book[3] = "Test";

// delete book[2];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Hello world</header>
    </div>
  )
}

export default App;

  