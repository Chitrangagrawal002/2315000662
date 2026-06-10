require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = process.env.TOKEN;
app.get("/notifications", async (req, res) => {
  try {
    const { page = 1, limit = 10, type = "" } = req.query;

    let url =
      `http://4.224.186.213/evaluation-service/notifications?page=${page}&limit=${limit}`;

    if (type) {
      url += `&notification_type=${type}`;
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.log(err.response?.data || err.message);
    res.status(500).json({
      error: "Failed to fetch notifications",
    });
  }
});

app.post("/logs", async (req, res) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.response?.data || err.message);

    res.status(500).json({
      error: "Failed to create log",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});