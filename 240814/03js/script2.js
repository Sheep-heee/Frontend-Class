// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;

//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//     return str;
//   };
// };

// const book1 = new Book("자바스크립트", 648, false);

// console.log(book1.title);
// console.log(book1.__proto__);

// function Book()

// function NewBook(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
// }

// NewBook.prototype.finish = function () {
//   let str = "";
//   this.done === false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };

// const nbook1 = new NewBook("타입스크립트", 648, false);
// console.log(nbook1.finish());

function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);
};

const book1 = new Book("뽀로로", 10000);
book1.buy();

function TextBook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

TextBook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전공 서적, ${this.title}을(를) 구매하였습니다!`);
};

Object.setPrototypeOf(TextBook.prototype, Book.prototype);

const book2 = new TextBook("잘될거야!", 20000, "인생");
book2.buyTextBook();
book2.buy();
