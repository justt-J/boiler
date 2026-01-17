app.use(async (req, res, next) => {
  try {
    await someAsyncTask();
    next();
  } catch (err) {
    next(err);
  }
});
