// Middleware often acts as a gatekeeper.

function validateStudent(req, res, next) {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ message: "Invalid student" });
  }
  next();
}

app.post("/students", validateStudent, createStudent);
