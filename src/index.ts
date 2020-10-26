import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

app.listen(5000, () => {
  console.log(`app is listening to port 5000`);
});
