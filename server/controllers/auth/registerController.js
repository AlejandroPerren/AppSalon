const db = require('../../config.js/mysql').db;
const mysql = require('mysql2/promise')

const register = async (req, res) => {
    const { correo, password, dni, tel } = req.body;

    if (!correo || !password || !dni || !tel) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const sql = 'INSERT INTO usuarios (dni, password, correo, tel) VALUES (?, ?, ?, ?)';
    await db.query(sql, [dni, password, correo, tel], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
};

module.exports = { register };

