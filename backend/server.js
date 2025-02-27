const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// 🔹 Express-session beállítása
app.use(
  session({
    secret: "nagyonbiztoskulcs",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

// 🔹 MySQL kapcsolat (XAMPP)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "felhasznalok",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL kapcsolat hiba:", err);
  } else {
    console.log("✅ Sikeresen csatlakoztál a MySQL adatbázishoz!");
  }
});

// 🔹 Regisztráció végpont
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: "Adatbázis hiba" });
      if (results.length > 0)
        return res.status(400).json({ error: "Ez az email már foglalt!" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const sql =
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err)
          return res.status(500).json({ error: "Nem sikerült regisztrálni!" });
        res.json({ message: "✅ Sikeres regisztráció!" });
      });
    }
  );
});

// 🔹 Bejelentkezés kezelése
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Adatbázis hiba" });
    if (results.length === 0)
      return res.status(401).json({ error: "Nincs ilyen felhasználó!" });

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: "Szerver hiba" });

      if (isMatch) {
        req.session.user = user;
        return res.json({ message: "✅ Sikeres bejelentkezés!", user });
      } else {
        return res.status(401).json({ error: "❌ Hibás jelszó!" });
      }
    });
  });
});

// 🔹 Kilépés végpont
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err)
      return res.status(500).json({ error: "Nem sikerült kijelentkezni!" });
    res.json({ message: "✅ Sikeres kijelentkezés!" });
  });
});

// 🔹 Ellenőrizzük, hogy a felhasználó be van-e jelentkezve
app.get("/check-auth", (req, res) => {
  if (req.session.user) {
    res.json({ isAuthenticated: true, user: req.session.user });
  } else {
    res.json({ isAuthenticated: false });
  }
});

// 🔹 Indítsuk el a szervert
app.listen(5000, () => {
  console.log("✅ Backend fut a 5000-es porton!");
});
