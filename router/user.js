const express = require('express');
const router = express.Router();
const connection = require('../config/database.js');

// GET all users /users
router.get("/", async (req, res) => {
  try {
    const command = `SELECT id, nama, nim FROM users`;
    const data = await connection.promise().query(command)

    res.status(200).json({
      status: "Success",
      message: 'Successfully get all users',
      data: data[0]
    })
  } catch (error) {
    res.status(err.statusCode || 500).json({
      status: "Error",
      message: err.message,
    });
  }
})

// GET user detail by nim /users/:nim
router.get("/:nim", async (req, res, next) => {
  try {
    const { nim } = req.params

    const command = `SELECT * FROM users WHERE nim=?`;
    const data = await connection.promise().query(command, [nim])

    if (data[0].length <= 0) {
      const error = new Error(`User ${nim} not found`)
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      status: "Success",
      message: 'Successfully get user',
      data: data[0]
    })
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: "Error",
      message: err.message,
    });
  }
})

module.exports = router;