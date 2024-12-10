// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// const displayHello = async () => {
//   console.log("Hello");
// };

// console.log(displayHello());

// const whatsYourFavorite = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatsYourFavorite().then(displaySubject).then(console.log);

const whatsYourFavorite = async () => {
  const fav = "Javascript";
  return fav;
};

const displaySubject = async (subject) => {
  return `Hello, ${subject}`;
};

const init = async () => {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
};

init();
