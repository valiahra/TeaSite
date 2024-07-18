const router = require("express").Router();
const { Tea, User, Comment } = require("../../db/models");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const { isAdmin } = require("../middlewares/isAdmin");

router
  .get("/", async (req, res) => {
    try {
      const comments = await Comment.findAll({
        include: [{ model: User }, { model: Tea }],
      });
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })

  .post("/new", verifyAccessToken, async (req, res) => {
    const { text } = req.body.inputs;
    const teaNumber = req.body.teaNumber;


    // const { id } = req.params;

    try {
      if (res.locals.user) {
        const comment = await Comment.create({
          text,
          userId: res.locals.user.id,
          teaId: teaNumber,
        });
        res.json(comment);
      } else {
        res.status(400).json({ message: "У вас нет прав на отправку записи" });
      }
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  });

module.exports = router;
