// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // public contains index.html & style.css

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Simple check (can be replaced with MongoDB later)
  if (email === "user@example.com" && password === "password") {
    return res.json({ success: true });
  } else {
    return res.status(401).json({ error: "Invalid email or password" });
  }
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
