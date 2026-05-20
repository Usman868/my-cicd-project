import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dns from "dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();

const PORT = 3500;
app.use(morgan("dev"));
app.use(express.json());


mongoose.connect("mongodb+srv://usman03228270254_db_user:9dNkIqNcrHdJRkVV@usmancluster.j9gcfkc.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));



app.get("/", (req, res) => {
  res.send("welcome home");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})