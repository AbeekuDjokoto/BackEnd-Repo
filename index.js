import express from "express"
import apiRoutes from "./routes/index.js"

const app = express();
const port = 8081;

app.use(express.json());

//Root Page
app.get("/", (req, res) => {
    res.send("Welcome to our page🚀");
});

app.use(apiRoutes);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});

export default app;