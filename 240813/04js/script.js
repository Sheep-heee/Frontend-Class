// const newBook1 = {
//   title: "당신이 누군가를 죽였다",
//   author: "히가시노 게이고",
//   price: 17820,
//   category: "미스터리스릴러",
// };

function Book(title, author, price, category) {
  this.title = title;
  this.author = author;
  this.price = price;
  this.category = category;
}

const book1 = new Book(
  "당신이 누군가를 죽였다",
  "히가시노 게이고",
  17820,
  "미스터리스릴러"
);

console.log(book1);
