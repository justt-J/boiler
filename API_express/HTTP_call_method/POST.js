app.post("/students", (req, res) => {
  const student = req.body;
  students.push(student);
  res.status(201).json(student);
});
