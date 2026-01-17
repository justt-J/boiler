const router = express.Router();

router.use(auth);

router.get("/", getStudents);
router.post("/", createStudent);

app.use("/students", router);
