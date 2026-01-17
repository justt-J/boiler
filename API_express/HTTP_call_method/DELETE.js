app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) return res.status(404).json({ message: "Not found" });

  students.splice(index, 1);
  res.status(204).send();
});
