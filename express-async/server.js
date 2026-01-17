import express from "express";

const app = express();
app.use(express.json());

// ----------------------------
// Async error wrapper (KEY)
// ----------------------------
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// ----------------------------
// Fake async helpers
// ----------------------------

// Simulates async DB call
function fakeDbGetUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === "0") return reject(new Error("DB failure"));
      resolve({ id, name: "User " + id });
    }, 400);
  });
}

// Simulates async external API
function fakeExternalCall() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ service: "payments", status: "ok" }), 600)
  );
}

// Simulates long async task (NON-BLOCKING)
function longAsyncTask(ms) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ finishedInMs: ms }), ms)
  );
}

// ----------------------------
// Routes
// ----------------------------

// Fast health check (always responsive)
app.get("/health", (req, res) => {
  res.json({ ok: true, time: Date.now() });
});

// Proper async route
app.get(
  "/users/:id",
  asyncHandler(async (req, res) => {
    const user = await fakeDbGetUser(req.params.id);
    res.json(user);
  })
);

// Parallel async work
app.get(
  "/dashboard/:id",
  asyncHandler(async (req, res) => {
    const [user, external] = await Promise.all([
      fakeDbGetUser(req.params.id),
      fakeExternalCall(),
    ]);

    res.json({ user, external });
  })
);

// Long async task (does NOT block other requests)
app.get(
  "/long",
  asyncHandler(async (req, res) => {
    const ms = Number(req.query.ms ?? 2000);
    const result = await longAsyncTask(ms);
    res.json({ message: "long task done", result });
  })
);

// Route that FAILS (error handled globally)
app.get(
  "/fail",
  asyncHandler(async () => {
    await Promise.reject(new Error("Something broke"));
  })
);

// ----------------------------
// Global error handler
// ----------------------------
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);

  res.status(500).json({
    error: "Internal Server Error",
    detail: err.message,
  });
});

// ----------------------------
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
