const db = require('../../config.js/mysql');
const mysql = require('mysql2/promise')

const register = async (req, res) => {
    const { correo, password, dni, tel } = req.body;

    if (!correo || !password || !dni || !tel) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    const sql = 'INSERT INTO usuarios (dni, password, correo, tel) VALUES (?, ?, ?, ?)';
    try {
        const connection = await db.getConnection();
        const [result] = await connection.query(sql, [dni, password, correo, tel]);

        connection.release();

        res.status(201).json({ message: 'Usuario registrado exitosamente', result });
    } catch (err) {
        console.error('Error al registrar el usuario:', err);
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};

module.exports = { register };

