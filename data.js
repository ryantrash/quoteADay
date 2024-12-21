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
    content: "\"Real knowledge is to know the extent of one's ignorance\"",
    author: "Confucius",
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
  {
    content: "\"Patience is bitter, but its fruit is sweet.\"",
    author: "Aristotle",
    desc: "DESCRIPTION PLACEHOLDER 17"
  },
  {
    content: "\"Be kind, for everyone you meet is fighting a hard battle.\"",
    author: "Socrates",
    desc: "DESCRIPTION PLACEHOLDER 18"
  },
  {
    content: "\"Worry is interst paid by those who borrow trouble.\"",
    author: "George Washington",
    desc: "DESCRIPTION PLACEHOLDER 19"
  },
  {
    content: "\"Experience is the teacher of all things.\"",
    author: "Socrates",
    desc: "DESCRIPTION PLACEHOLDER 20"
  },
  {
    content: "\"It's not the size of the dog in the fight, it's the size of the fight in the dog.\"",
    author: "Mark Twain",
    desc: "DESCRIPTION PLACEHOLDER 21"
  },
  {
    content: "\"Courage is knowing what not to fear.\"",
    author: "Plato",
    desc: "DESCRIPTION PLACEHOLDER 22"
  },
  {
    content: "\"The way I see it, if you want the rainbow, you gotta put up with the rain.\"",
    author: "Dolly Parton",
    desc: "DESCRIPTION PLACEHOLDER 23"
  },
  {
    content: "\"The only way to have a friend is to be one.\"",
    author: "Ralph Waldo Emerson",
    desc: "DESCRIPTION PLACEHOLDER 24"
  },
  {
    content: "\"Genius is one percent inspiration and ninety-nine percent perspiration.\"",
    author: "Thomas Edison",
    desc: "DESCRIPTION PLACEHOLDER 25"
  },
  {
    content: "\"Success is not the key to happiness.  Happiness is the key to success. If you love what you are doing,you will be successful.\"",
    author: "Albert Schweitzer",
    desc: "DESCRIPTION PLACEHOLDER 26"
  },
  {
    content: "\"Optimism is the faith that leads to achievement.  Nothingf can be done without hope and confidence.\"",
    author: "Helen Keller",
    desc: "DESCRIPTION PLACEHOLDER 27"
  },
  {
    content: "\"Life is like riding a bicycle. To keep your balance, you must keep moving.\"",
    author: "Albert Einstein",
    desc: "DESCRIPTION PLACEHOLDER 28"
  },
  {
    content: "\"Go confidently in the direction of your dreams! Live the life you've imagined.\"",
    author: "Henry David Thoreau",
    desc: "DESCRIPTION PLACEHOLDER 29"
  },
  {
    content: "\"The way to get started is to quit talking and begin doing.\"",
    author: "Walt Disney",
    desc: "DESCRIPTION PLACEHOLDER 30"
  }
  {
    content: "\"Alone we can do so little, together we can do so much.\"",
    author: "Confucious",
    desc: "DESCRIPTION PLACEHOLDER 31"
  },
]

const quote = QUOTES[new Date().getDate() - 1] || "NONE FOUND";
export default quote;
