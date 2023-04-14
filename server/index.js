import express from "express";
const dogs = "https://dog.ceo/api/breeds/list/all";
const app = express();
import fetch from "node-fetch";

app.use(express.json());

app.get("/random", async (req, res) => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(8880, () => {
  console.log("jojo");
});
