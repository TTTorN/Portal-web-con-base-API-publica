const express = require('express');
const argon2 = require('argon2');
const db = require('../bd');

router.post('/registro', async (req, res) => {
    const { email, nombre, password, telefono } = req.body;

    try {
        // cifrado de contraseña
        const password_hash = await argon2.hash(password);           

        const sql = 'INSERT INTO usuarios (email, nombre, password_hash, telefono, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())';
        db.query(sql, [email, nombre, password_hash, telefono], (err, results) => {
            if (err) {
                console.error('Error al registrar el usuario:', err.message);
                res.status(500).send('Error en el servidor.');
            } else {
                res.status(201).send('Usuario registrado con exito.');
            }
        });
    } catch (error) {
        console.error('Error cifrando la contraseña:',err.message);
        res.status(500).send('Error en el servidor.');
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = requ.body;

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err) {
            console.error('Error en la consulta', err.message);
            res.status(500).send('Error en el serevidor.');
        } else if (results.length > 0) {
            try {
                const user = results[0];

                const isMatch = await argon2.verify(user.password_hash, password);
                if (isMatch) {
                    const updatesql = 'UPDATE usuarios SET last_login = NOW() WHERE id = ?';
                    db.query(updatesql, [user.id], (err) => {
                        if (err) {
                            console.error('Error actualizando last_login:', err.message);
                        }
                    });

                    res.send('Inicio de sesion exitoso.');
                } else {
                    res.status(401).send('Credenciales incorrectas.');
                }
            } catch (err) {
                console.error('Error verificando la contraseña:',err.message);
                res.status(500).send('Error en el servidor.');
            }
        } else {
            res.status(404).send('Usuario no encontrado.');
        }
    });
});