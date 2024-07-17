/* eslint-disable quotes */
const router = require("express").Router();
const { Coffee } = require("../../db/models");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/isAdmin");

router
  .get("/", async (req, res) => {
    try {
      const entries = await Coffee.findAll();
      res.json(entries);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const entries = await Coffee.findOne({ where: { id } });
      res.json(entries);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .get("/like/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const entries = await Coffee.findOne({ where: { id } });
      if (entries) {
        entries.like += 1;
        entries.save();
        res.json(entries);
      } else {
        res.status(400).send("Запись по id не найдена");
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })
  .post("/new", verifyAccessToken, isAdmin, async (req, res) => {
    const { name, price, img, like, coffeeType, roasting, country, info } =
      req.body;
    try {
      const entry = await Coffee.create({
        name,
        price,
        img,
        like,
        coffeeType,
        roasting,
        country,
        info,
      });
      res.json(entry);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .delete("/:id", verifyAccessToken, isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
      const task = await Coffee.findOne({ where: { id } });
      // if (task.userId === res.locals.user?.id) {
      task.destroy();
      res.sendStatus(200);
      // } else {
      //   res.status(400).json({ message: 'У вас нет прав на удаление записи' });
      // }
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .put("/:id/:edit", verifyAccessToken, isAdmin, async (req, res) => {
    const { id } = req.params;
    const { name, price, img, like, coffeeType, roasting, country, info } =
      req.body;
    try {
      const book = await Coffee.findByPk(Number(id));
      if (book) {
        book.name = name;
        book.price = price;
        book.img = img;
        book.like = like;
        book.coffeeType = coffeeType;
        book.roasting = roasting;
        book.country = country;
        book.info = info;
        book.save();
        res.status(200).json(book);
      } else {
        res.status(400).send('fghfghgf');
      }
     
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });
// const updateStudentById = async (id) => {
//   try {
//     await Student.update(
//       {
//         last_name: 'Дилинжер',
//         age: 777,
//       },
//       { where: { id } }
//     );
//     console.log('Updating success');
//   } catch (error) {
//     console.log('error ', error);
//   }
// };

module.exports = router;
