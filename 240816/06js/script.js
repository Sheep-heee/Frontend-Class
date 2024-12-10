const button = document.querySelector("#tweetButton");

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #도로롱`;

  const encodedText = encodeURIComponent(tweetText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(tweetURL)
});
