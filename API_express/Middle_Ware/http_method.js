app.use((req, res, next) => {
  if (req.method === "DELETE") {
    console.log("Dangerous operation");
  }
  next();
});
