const express = require('express');
const router = express.Router();
const connection = require('../config/database.js');

// GET /todos
router.get("/", async (req, res) => {
  try {
    const command = `SELECT * FROM todo`;
    const data = await connection.promise().query(command)

    res.status(200).json({
      status: "Success",
      message: 'Successfully get all todos',
      data: data[0]
    })
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: err,
    })
  }
})

// POST /todos
router.post("/", async (req, res, next) => {
  try {
    const { judul, isi } = req.body;

    if (judul == "") {
      const error = new Error(`Judul cannot be empty.`);
      error.statusCode = 401;
      throw error;
    }

    if (isi == "") {
      const error = new Error(`Isi cannot be empty.`);
      error.statusCode = 401;
      throw error;
    }

    const command = `INSERT INTO todo (judul, isi) VALUES (?, ?)`;
    const [{ insertId }] = await connection.promise().query(command, [judul, isi]);

    res.status(201).json({
      status: "Success",
      message: "Successfully create todo",
    });
  } catch (err) {
    res.status(500).json({
      status: "Error",
      message: err,
    });
  }
})

// PUT /todos/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { judul, isi } = req.body;

    if (judul == "") {
      const error = new Error(`Judul cannot be empty.`);
      error.statusCode = 401;
      throw error;
    }

    if (isi == "") {
      const error = new Error(`Isi cannot be empty.`);
      error.statusCode = 401;
      throw error;
    }

    const command = `UPDATE todo SET judul = ?, isi = ? WHERE id = ?`
    const update = await connection.promise().query(command, [judul, isi, id]);

    res.status(200).json({
      status: "Success",
      message: "Successfully update todo",
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: "Error",
      message: err.message,
    });
  }
});

// DELETE /todos/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const command = `DELETE FROM todo WHERE id=?`;
    const update = await connection.promise().query(command, [id]);

    res.status(200).json({
      status: "Success",
      message: "Successfully delete todo",
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      status: "Error",
      message: err.message,
    });
  }
});

module.exports = router;