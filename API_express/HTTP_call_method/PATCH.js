app.patch("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const patch = req.body;

  const student = students.find(s => s.id === id);
  if (!student) return res.status(404).json({ message: "Not found" });

  Object.assign(student, patch); // PARTIAL update
  res.json(student);
});
