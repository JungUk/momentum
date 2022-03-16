const quotes = [
  { quote: "나의 대적이여 나로 말미암아 기뻐하지 말지어다 나는 엎드러질지라도 일어날 것이요 ",
    author: "미가" },
  { quote: "어두운 데에 앉을지라도 여호와께서 나의 빛이 되실 것임이로다 ",
    author: "미가" },
  { quote: "한 손에는 성경을 다른 한 손엔 신문을 들고 ", 
    author: "칼 바르트" },
  { quote: "나의 대적이여 나로 말미암아 기뻐하지 말지어다 나는 엎드러질지라도 일어날 것이요 ",
    author: "미가" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;