const isAdmin = (req, res, next) => {
  if (res.locals.user?.isAdmin) {
    next();
  } else {
    res.status(400).send(`Not admin`)
  }
};

module.exports = { isAdmin };
