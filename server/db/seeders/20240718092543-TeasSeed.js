/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teas",
      [
        {
          title: "John Doe",
          placeOrigin: "America",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 2.45,
          corY: 3.23,
          link: 'fgh',
        },
        {
          title: "John Pupka",
          placeOrigin: "America",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 2.55,
          corY: 3.13,
          link: 'fgh',
        },
       
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
