class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(...book);
    }

    listAllBooks(){
        this.books.forEach(function(book,index){
            console.log(`${index + 1} ${book.name} and ${book.author}`);
        });
    }
}

class Book{
    constructor(name,isbn,price,author){
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.readStstus = false;
    }

    info(){
        console.log(`${this.name} is written by ${this.author} and is avilabel amoze and price range is ${this.price}`);
    }

    readStatus(){
        this.readStatus = !this.readStatus;
    }
}

let j1 = new Library();
let book1 = new Book("heath is best","2esfgsfgsy",200,"navneet Gurjar");
let book2 = new Book("adventure","2esfgsfgsy",220,"Ajay");
let book3 = new Book("papa ni pari","2esfgsfgsy",190,"Nayan");

j1.addBook([book1,book2,book3]);
