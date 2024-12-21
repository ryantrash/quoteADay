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
    desc: "Regardless of your age, dreams and aspirations can come true."
  },
  {
    content: "\"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.\"",
    author: "Martin Luther King Jr.",
    desc: "No matter what happens or what your capabilities may be, you possess the ability to achieve greatness, but you must try."
  },
  {
    content: "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"",
    author: "Winston Churchill",
    desc: "There is always more that can be done to make the world better, but true success is finding the power within to make the change happen."
  },
  {
    content: "\"Nothing ventured, nothing gained.\"",
    author: "Benjamin Franklin",
    desc: "If you do not put yourself out there and try, you cannot achieve anything or be successful."
  },
  {
    content: "\"A journey of a thousand miles begins with a single step.\"",
    author: "Lao Tzu",
    desc: "Even the biggest of tasks can be broken down into easy steps which you can tackle."
  },
  {
    content: "\"The only way to do great work is to love what you do.\"",
    author: "Steve Jobs",
    desc: "Passion and excitement for your work is vital for accomplishing your goals."
  },
  {
    content: "\"Believe you can and you're halfway there.\"",
    author: "Theodore Roosevelt",
    desc: "Knowing that you can accomplish something is an important step in achieving your goals."
  },
  {
    content: "\"Real knowledge is to know the extent of one's ignorance.\"",
    author: "Confucius",
    desc: "True wisdom comes from recognizing whever your weaknesses and limitations are."
  },
  {
    content: "\"Happiness is not something ready made. It comes from your own actions.\"",
    author: "Dalai Lama",
    desc: "Happiness stems from the things you do."
  },
  {
    content: "\"You miss 100% of the shots you don't take.\"",
    author: "Wayne Gretzky",
    desc: "Seizing the opportunities available is the only way to succeed."
  },
  {
    content: "\"The future belongs to those who believe in the beauty fo their dreams.\"",
    author: "Eleanor Roosevelt",
    desc: "Your dreams, if acted upon, shape your future."
  },
  {
    content: "\"People will forget what you said, people will forget what you did, but people will never forget how you made them feel.\"",
    author: "Maya Angelou",
    desc: "The emotions you impart onto others are more important and memorable than the words you say or the actions you do"
  },
  {
    content: "\"Try not to become a man of success, but rather a man of value.\"",
    author: "Albert Einstein",
    desc: "Attempt to be be valuable in the world by making a positive impact as opposed to merely achieving success."
  },
  {
    content: "\"Nothing is impossible, the word itself says I'm possible\"",
    author: "Audrey Hepburn",
    desc: "With hard work and passion, anything can be accomplished."
  },
  {
    content: "\"Whether you think you can, or you think you can't, you're right\"",
    author: "Henry Ford",
    desc: "Your mindset on a task determines the outcome of your reality"
  },
  {
    content: "\"Patience is bitter, but its fruit is sweet.\"",
    author: "Aristotle",
    desc: "Waiting may be difficult, but the results are rewarding."
  },
  {
    content: "\"Be kind, for everyone you meet is fighting a hard battle.\"",
    author: "Socrates",
    desc: "Everybody has their own internal struggles so be kind and sympathetic."
  },
  {
    content: "\"Worry is interst paid by those who borrow trouble.\"",
    author: "George Washington",
    desc: "Worrying is unnecessary and only adds to the troubles."
  },
  {
    content: "\"Experience is the teacher of all things.\"",
    author: "Socrates",
    desc: "Learning is best done through experiencing life and the many challenges that pop up."
  },
  {
    content: "\"It's not the size of the dog in the fight, it's the size of the fight in the dog.\"",
    author: "Mark Twain",
    desc: "Determine and spirit matter more than physical attributes."
  },
  {
    content: "\"Courage is knowing what not to fear.\"",
    author: "Plato",
    desc: "Real courage involves knowing and facing the correct fears instead of getting hung upo on trivial issues."
  },
  {
    content: "\"The way I see it, if you want the rainbow, you gotta put up with the rain.\"",
    author: "Dolly Parton",
    desc: "You must endure hardships to achieve something beautiful."
  },
  {
    content: "\"The only way to have a friend is to be one.\"",
    author: "Ralph Waldo Emerson",
    desc: "You must be a good friend yourself to gains friends."
  },
  {
    content: "\"Genius is one percent inspiration and ninety-nine percent perspiration.\"",
    author: "Thomas Edison",
    desc: "Success is because of hardwork, not just talent and ideas."
  },
  {
    content: "\"Success is not the key to happiness.  Happiness is the key to success. If you love what you are doing,you will be successful.\"",
    author: "Albert Schweitzer",
    desc: "Being passionate about your work leads to happiness and success."
  },
  {
    content: "\"Optimism is the faith that leads to achievement.  Nothing can be done without hope and confidence.\"",
    author: "Helen Keller",
    desc: "Hope for a positive outcome is essential to make your dreams come true."
  },
  {
    content: "\"Life is like riding a bicycle. To keep your balance, you must keep moving.\"",
    author: "Albert Einstein",
    desc: "To maintain stabilty in life, you must continue moving forward."
  },
  {
    content: "\"Go confidently in the direction of your dreams! Live the life you've imagined.\"",
    author: "Henry David Thoreau",
    desc: "Go after your goals with resilience and strength and strive to make your future one of greatness."
  },
  {
    content: "\"The way to get started is to quit talking and begin doing.\"",
    author: "Walt Disney",
    desc: "Stop procrastinating and you can achieve your goals"
  }
  {
    content: "\"Alone we can do so little, together we can do so much.\"",
    author: "Confucious",
    desc: "Collaboration leads to greater accomplishments"
  },
]

const quote = QUOTES[new Date().getDate() - 1] || "NONE FOUND";
export default quote;
