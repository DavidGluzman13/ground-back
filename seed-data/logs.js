module.exports = [
  {
    id: 1,
    user_id: 1,
    content:
      "Today was a challenging day. I felt overwhelmed with work and struggled to stay positive.",
    feeling: getRandomNumber(2, 3), // Often feeling low (2 or 3)
    hunger: getRandomNumber(1, 5),
    energy: getRandomNumber(1, 5),
    hours_slept: getRandomNumber(5, 8), // Average sleep duration
  },
  {
    id: 2,
    user_id: 1,
    content:
      "Today, I made a conscious effort to focus on positive things and practice self-care. It helped me feel more balanced and uplifted.",
    feeling: getRandomNumber(2, 3), // Often feeling low (2 or 3)
    hunger: getRandomNumber(1, 5),
    energy: getRandomNumber(1, 5),
    hours_slept: getRandomNumber(5, 8), // Average sleep duration
  },
  {
    id: 3,
    user_id: 1,
    content:
      "Today, I made a conscious effort to focus on positive things and practice self-care. It helped me feel more balanced and uplifted.",
    feeling: getRandomNumber(3, 4), // Slightly improved from often feeling low (2 or 3) to a more neutral feeling (3 or 4)
    hunger: getRandomNumber(1, 5),
    energy: getRandomNumber(3, 5), // Improved energy level
    hours_slept: getRandomNumber(7, 9), // Good sleep duration
  },
  {
    id: 4,
    user_id: 1,
    content:
      "I'm feeling more positive today! I had some great conversations and accomplished a few important tasks.",
    feeling: getRandomNumber(4, 5), // Significant improvement from often feeling low (2 or 3) to feeling positive (4 or 5)
    hunger: getRandomNumber(1, 5),
    energy: getRandomNumber(3, 5), // Sustained energy throughout the day
    hours_slept: getRandomNumber(7, 9), // Good sleep duration
  },
  {
    id: 5,
    user_id: 1,
    content:
      "Today started off a bit rough, but I managed to turn things around. I engaged in activities I enjoy and connected with loved ones.",
    feeling: getRandomNumber(3, 4), // Improvement from often feeling low (2 or 3) to a more neutral feeling (3 or 4)
    hunger: getRandomNumber(1, 5),
    energy: getRandomNumber(3, 5), // Sustained energy throughout the day
    hours_slept: getRandomNumber(6, 8), // Average to good sleep duration
  },
  {
    id: 6,
    user_id: 4,
    content: "blah blah",
    feeling: getRandomNumber(3, 4), // Improvement from often feeling low (2 or 3) to a more neutral feeling (3 or 4)
    hunger: getRandomNumber(1, 5),
    energy: getRandomNumber(3, 5), // Sustained energy throughout the day
    hours_slept: getRandomNumber(6, 8), // Average to good sleep duration
  },
];

// Helper function to generate a random number within a given range (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
