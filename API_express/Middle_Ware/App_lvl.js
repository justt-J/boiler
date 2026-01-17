// Runs for every request (or every request under a path).
// Use cases:
//     Logging
//     Metrics
//     Request tracing

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.path}`);
  next();
});
