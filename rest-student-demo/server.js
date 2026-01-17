import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // parse JSON request bodies

// In-memory "database"
let students = [
  { id: 1, name: "Geek1" },
  { id: 2, name: "Geek2" },
  { id: 3, name: "Geek3" },
];

// Health check
app.get("/", (req, res) => res.json({ ok: true }));

// 1) GET - list students (matches the article pattern) :contentReference[oaicite:1]{index=1}
app.get("/students", (req, res) => {
  res.json(students);
});

// 2) POST - add student (matches the article pattern) :contentReference[oaicite:2]{index=2}
app.post("/students", (req, res) => {
  const student = req.body;

  // Basic validation
  if (!student || typeof student.id !== "number" || typeof student.name !== "string") {
    return res.status(400).json({ message: "Invalid payload. Expected { id: number, name: string }" });
  }

  // Prevent duplicates
  if (students.some((s) => s.id === student.id)) {
    return res.status(409).json({ message: "Student with this id already exists" });
  }

  students.push(student);
  return res.status(201).json({ message: "Record Added", student });
});

// 3) PUT - replace an existing student by id (matches the article logic) :contentReference[oaicite:3]{index=3}
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = req.body;

  if (!student || typeof student.id !== "number" || typeof student.name !== "string") {
    return res.status(400).json({ message: "Invalid payload. Expected { id: number, name: string }" });
  }
  if (student.id !== id) {
    return res.status(400).json({ message: "Body id must match URL id" });
  }

  const idx = students.findIndex((s) => s.id === id);
  if (idx === -1) return res.status(404).json({ message: "Student not found" });

  students[idx] = student; // full replace
  return res.json({ message: "Record Updated", student });
});

// 4) PATCH - partial update (matches the article idea: update only provided keys) :contentReference[oaicite:4]{index=4}
app.patch("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const patch = req.body;

  const student = students.find((s) => s.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });

  // Allow updating only known fields (simple safety)
  const allowed = new Set(["name"]);
  for (const key of Object.keys(patch || {})) {
    if (!allowed.has(key)) {
      return res.status(400).json({ message: `Cannot patch field: ${key}` });
    }
  }

  Object.assign(student, patch); // partial update
  return res.json({ message: "Record Updated using patch", student });
});

// 5) DELETE - remove student by id (matches the article approach) :contentReference[oaicite:5]{index=5}
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = students.findIndex((s) => s.id === id);
  if (idx === -1) return res.status(404).json({ message: "Student not found" });

  students.splice(idx, 1);
  return res.json({ message: "Record Deleted" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
