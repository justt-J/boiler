app.post(
  "/students",
  auth,
  rateLimit,
  validateStudent,
  createStudent
);
