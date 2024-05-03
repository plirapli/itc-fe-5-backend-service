const express = require("express");
const router = express.Router();
const connection = require("../config/database.js");

// Register new User
router.post("/register", async (req, res, next) => {
  try {
    const { name, username, password } = req.body;

    if (!username || !password) {
      const error = new Error(`Username or password cannot be empty.`);
      error.statusCode = 401;
      throw error;
    }

    const salt = await bcrypt.genSalt(6);
    const hashedPassword = await bcrypt.hash(password, salt);
    const id = nanoid();

    // Cek apakah username udah ada atau engga
    const checkCommand = `SELECT id FROM accounts WHERE username = ?`;
    const [[checkId]] = await connection
      .promise()
      .query(checkCommand, [username]);

    if (checkId) {
      const error = new Error(`Username ${username} already exist!`);
      error.statusCode = 400;
      throw error;
    }

    // Insert data ke tabel User
    const inserCommand = `INSERT INTO accounts VALUES (?, ?, ?, ?)`;
    await connection
      .promise()
      .query(inserCommand, [id, name, username, hashedPassword]);

    // Send response
    res.status(201).json({
      status: "Success",
      message: "Register Successful",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// login User
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      const error = new Error(`Username or password cannot be empty.`);
      error.statusCode = 401;
      throw error;
    }

    // Cek user ada apa engga
    const checkCommand = `SELECT * FROM accounts WHERE username = ?`;
    const [[user]] = await connection.promise().query(checkCommand, [username]);

    if (!user) {
      const error = new Error("Wrong email or password");
      error.statusCode = 400;
      throw error;
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    // Apabila password salah
    if (!checkPassword) {
      const error = new Error("Wrong email or password");
      error.statusCode = 400;
      throw error;
    }

    const { id, name } = user;
    const token = jwt.sign({ id, name, username: user.username }, key, {
      algorithm: "HS256",
      // expiresIn: "3d", // Masa berlaku token
    });

    res.status(200).json({
      status: "Success",
      message: "Login Successful",
      token,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// GET user own profile (users/profile)
router.get("/profile", async (req, res, next) => {
  try {
    const token = getToken(req.headers);
    if (token) {
      jwt.verify(token, tokenKey);
    } else {
      const error = new Error("Login dulu 😠");
      error.statusCode = 403;
      throw error;
    }

    const data = jwt.verify(token, key);
    res.status(200).json({
      status: "Success",
      message: "Successfully get profile",
      data,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

module.exports = router;
