app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const newStudent = req.body;

  const index = students.findIndex(s => s.id === id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  students[index] = newStudent; // FULL replacement
  res.json(newStudent);
});
