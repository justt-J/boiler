// Runs only for specific routes.
// Only /students is protected.

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

app.get("/students", auth, (req, res) => {
  res.json(students);
});
