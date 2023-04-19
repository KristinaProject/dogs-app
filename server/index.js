import express from "express";
const dogs = "https://dog.ceo/api/breeds/list/all";
const app = express();
import fetch from "node-fetch";
import cors from "cors";

app.use(express.json());
app.use(cors());

app.get("/random", async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(8880, () => {
  console.log("jojo");
});
