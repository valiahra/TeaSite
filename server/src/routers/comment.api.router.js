const router = require("express").Router();
const { Tea, User, Review } = require("../../db/models");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/isAdmin");

router
  .get("/", async (req, res) => {
    try {
      const comments = await Review.findAll({
        include: [{ model: User }, { model: Tea }],
      });
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .get("/:userId", async (req, res) => {
    // const { userId } = req.params;
    try {
      const { userId } = req.params;
      // console.log('popopopopopo',typeof userId)
      // console.log('titititititititit');
      const comments = await Review.findAll({
        // include: [{ model: User, where: { userId } },]
        where: { userId }
      });
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .post("/new", verifyAccessToken, async (req, res) => {
    const { text, teaId, author } = req.body;
    // const { teaId } = req.body.teaId;

    // const { id } = req.params;

    try {
      // if (res.locals.user) {
      const comment = await Review.create({
        // include: [{ model: User }],
        text,
        userId: res.locals.user.id,
        teaId,
        author,
      });
      res.json(comment);
      // } else {
      //   res.status(400).json({ message: "У вас нет прав на отправку записи" });
      // }
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });

module.exports = router;
