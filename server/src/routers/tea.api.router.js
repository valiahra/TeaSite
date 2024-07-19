/* eslint-disable quotes */
const router = require("express").Router();
const { Tea, User, Review } = require("../../db/models");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/isAdmin");

router
  .get("/", async (req, res) => {
    try {
      const tea = await Tea.findAll();
      res.json(tea.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const tea = await Tea.findOne({
        include: [{ model: Review }],
        where: { id },
      });
      res.json(tea);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  // .get("/like/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const entries = await Coffee.findOne({ where: { id } });
  //     if (entries) {
  //       entries.like += 1;
  //       entries.save();
  //       res.json(entries);
  //     } else {
  //       res.status(400).send("Запись по id не найдена");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.sendStatus(400);
  //   }
  // })
  .post("/new", verifyAccessToken, isAdmin, async (req, res) => {
    const { title, placeOrigin, img, description, corX, corY, link } = req.body;
    try {
      const tea = await Tea.create({
        title,
        placeOrigin,
        img,
        description,
        corX,
        corY,
        link,
      });
      res.json(tea);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .delete("/:id", verifyAccessToken, isAdmin, async (req, res) => {
    const { id } = req.params;
    try {
      const tea = await Tea.findOne({ where: { id } });
      // if (task.userId === res.locals.user?.id) {
      tea.destroy();
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
    const { title, placeOrigin, img, description, corX, corY, link } = req.body;
    try {
      const tea = await Tea.findByPk(Number(id));
      if (tea) {
        tea.title = title;
        tea.placeOrigin = placeOrigin;
        tea.img = img;
        tea.description = description;
        tea.corX = corX;
        tea.corY = corY;
        tea.link = link;

        tea.save();
        res.status(200).json(tea);
      } else {
        res.status(400).send("Not found");
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });

module.exports = router;
