// TODO: Add quotes.
const QUOTES = [
  {
    content: "QUOTE PLACEHOLDER 1",
    author: "AUTHOR PLACEHOLDER 1",
    desc: "DESCRIPTION PLACEHOLDER 1"
  },
  {
    content: "QUOTE PLACEHOLDER 1",
    author: "AUTHOR PLACEHOLDER 1",
    desc: "DESCRIPTION PLACEHOLDER 1"
  }
]

const quote = QUOTES[new Date().getDate() - 1] || "NONE FOUND";
export default quote;
