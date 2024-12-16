// TODO: Add quotes.
const QUOTES = [
  {
    content: "\"The best way to predict your future is to create it!\"",
    author: "Abraham Lincoln",
    desc: "By making good decisions now, you can set your future self up for success."
  },
  {
    content: "\"You are never too old to set another goal or to dream a new dream.\"",
    author: "C.S. Lewis",
    desc: "DESCRIPTION PLACEHOLDER 2"
  },
  {
    content: "\"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.\"",
    author: "Martin Luther King Jr.",
    desc: "DESCRIPTION PLACEHOLDER 3"
  },
  {
    content: "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"",
    author: "Winston Churchill",
    desc: "DESCRIPTION PLACEHOLDER 4"
  },
  {
    content: "\"Nothing ventured, nothing gained.\"",
    author: "Benjamin Franklin",
    desc: "DESCRIPTION PLACEHOLDER 5"
  },
  {
    content: "\"A journey of a thousand miles begins with a single step.\"",
    author: "Lao Tzu",
    desc: "DESCRIPTION PLACEHOLDER 6"
  },
  {
    content: "\"The only way to do great work is to love what you do.\"",
    author: "Steve Jobs",
    desc: "DESCRIPTION PLACEHOLDER 7"
  }
];

const quote = QUOTES[(new Date().getDate() - 1) % QUOTES.length] || { content: "NONE FOUND", author: "", desc: "" };

export default quote;
