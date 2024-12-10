function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;

  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  };
}

const book1 = new Book("자바스크립트", 648, true);
console.log(book1);

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }

  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}
