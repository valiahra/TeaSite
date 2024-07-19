/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Teas",
      [
        {
          title: "Уда Пусселава",
          placeOrigin: "Шри-Ланка",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 7.61, 
          corY: 80.70,
          link: 'fgh',
        },
        {
          title: "Улун Молочный",
          placeOrigin: "Китай",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 39.90, 
          corY: 116.39,
          link: 'fgh',
        },
        {
          title: "Джамира TGFOP",
          placeOrigin: "Индия",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 21.16, 
          corY: 79.06,
          link: 'fgh',
        },
        {
          title: "Мокалбари Ист SFTGFOP",
          placeOrigin: "Индия",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 29.78, 
          corY: 79.35,
          link: 'fgh',
        },
        {
          title: "Тайский «синий» чай",
          placeOrigin: "Тайланд",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 13.77, 
          corY: 100.51,
          link: 'fgh',
        },
        {
          title: "Да Цзинь Я",
          placeOrigin: "Китай",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 30.66, 
          corY: 104.06,
          link: 'fgh',
        },
        {
          title: "Гиокуро Асахина",
          placeOrigin: "Япония",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 35.68, 
          corY: 139.75,
          link: 'fgh',
        },
        {
          title: "Улун А Ли Шань",
          placeOrigin: "Тайвань",
          img: '/img',
          description: 'DataTypes.TEXT',
          corX: 25.07, 
          corY: 121.56,
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

  