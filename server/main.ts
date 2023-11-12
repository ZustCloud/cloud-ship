import express from 'express'
import routes from "./src/routes";

const app = express();
const port = 3000;

app.use(routes)

app.listen(port);