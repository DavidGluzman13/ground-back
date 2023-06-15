const { faker } = require("@faker-js/faker");

module.exports = [
  {
    id: 1,
    name: "Marie Curie",
    email: "curieradio@scientist.com",
    age: 42,
  },
  {
    id: 2,
    name: "Jimmy Sullivan",
    email: "therev@a7x.com",
    age: 27,
  },
  {
    id: 3,
    name: "Luke Holland",
    email: "lukeholland@worldclassdrummers.com",
    age: 18,
  },
  {
    id: 4,
    name: "Sun Tzu",
    email: "suntzu@artofwar.com",
    age: 92,
  },
  {
    id: 5,
    name: "Haim Shapira",
    email: "shapirahaim@motek.com",
    age: 56,
  },
  {
    id: 6,
    name: faker.person.fullName(),
    email: "shapirahaim@motek.com",
    age: 56,
  },
];
