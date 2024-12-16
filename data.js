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
  },
  {
    content: "\"Believe you can and you're halfway there.\"",
    author: "Theodore Roosevelt",
    desc: "DESCRIPTION PLACEHOLDER 8"
  },
  {
    content: "\"The greatest obstacle to discover is not ignorance; it is the illusion of knnowledge.\"",
    author: "Daniel J. Boorstin",
    desc: "DESCRIPTION PLACEHOLDER 9"
  },
  {
    content: "\"Happiness is not something ready made. It comes from your own actions.\"",
    author: "Dalai Lama",
    desc: "DESCRIPTION PLACEHOLDER 10"
  },
  {
    content: "\"You miss 100% of the shots you don't take\"",
    author: "Wayne Gretzky",
    desc: "DESCRIPTION PLACEHOLDER 11"
  },
  {
    content: "\"The future belongs to those who believe in the beauty fo their dreams.\"",
    author: "Eleanor Roosevelt",
    desc: "DESCRIPTION PLACEHOLDER 12"
  },
  {
    content: "\"People will forget what you said, people will forget what you did, but people will never forget how you made them feel\"",
    author: "Maya Angelou",
    desc: "DESCRIPTION PLACEHOLDER 13"
  },
  {
    content: "\"Try not to become a man of success, but rather a man of value\"",
    author: "Albert Einstein",
    desc: "DESCRIPTION PLACEHOLDER 14"
  },
  {
    content: "\"Nothing is impossible, the word itself says I'm possible\"",
    author: "Audrey Hepburn",
    desc: "DESCRIPTION PLACEHOLDER 15"
  },
  {
    content: "\"Whether you think you can, or you think you can't, you're right\"",
    author: "Henry Ford",
    desc: "DESCRIPTION PLACEHOLDER 16"
  },
]

const quote = QUOTES[new Date().getDate() - 1] || "NONE FOUND";
export default quote;
