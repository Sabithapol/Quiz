
const faker = require("faker");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cluckrs")
    .del()
    .then(() => {
      const cluckrs = Array.from({ length: 100 }).map(() => {
        return {
          username: faker.name.findName(),
          content: faker.lorem.sentence(),
          logoUrl: faker.image.imageUrl()
        };
      });
      // Inserts seed entries
      return knex("cluckrs").insert(cluckrs);
    });
};
