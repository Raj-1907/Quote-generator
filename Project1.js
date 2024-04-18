//  Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: '"The only way to do great work is to love what you do."',
    person: "Steve Jobs",
  },
  {
    quote: '"Believe you can and you\'re halfway there."',
    person: "Theodore Roosevelt",
  },
  {
    quote:
      '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
    person: "Winston Churchill",
  },
  {
    quote: '"In the middle of difficulty lies opportunity."',
    person: "Albert Einstein",
  },
  {
    quote:
      '"The only limit to our realization of tomorrow will be our doubts of today."',
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      '"The future belongs to those who believe in the beauty of their dreams."',
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      '"I am not a product of my circumstances. I am a product of my decisions."',
    person: "Stephen Covey",
  },
  {
    quote:
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    person: "Nelson Mandela",
  },
  {
    quote: '"Opportunities don\'t happen. You create them."',
    person: "Chris Grosser",
  },
  {
    quote: '"Don\'t watch the clock; do what it does. Keep going."',
    person: " Sam Levenson",
  },
  {
    quote: '"The way to get started is to quit talking and begin doing."',
    person: "Walt Disney",
  },
  {
    quote:
      '"The harder you work for something, the greater you\'ll feel when you achieve it."',
    person: "Kobe Bryant",
  },
  {
    quote:
      '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."',
    person: "Albert Schweitzer",
  },
];

btn.addEventListener("click", function () {
  let button = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[button].quote;
  person.innerText = quotes[button].person;
});
