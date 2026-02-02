const express = require("express");
const cors = require("cors");
const sql = require("mssql");

const app = express();
app.use(cors());
app.use(express.json());

const config = {
  user: "sa",
  password: "Nikhil@12345",
  server: "172.17.0.1",
  database: "AppDB",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

app.get("/users", async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query("SELECT * FROM Users");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .query("INSERT INTO Users VALUES (@name, @email)");
    res.send("User added");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));
