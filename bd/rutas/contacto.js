const express = require('express');
const axios = require('axios');
const ruter = express.Router();

Router.post('/contacto', async (req, res) => {
    const { gRecaptchaResponse, nombre, email, mensaje } = req.body;

    try {
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify`,
            null,
            {
                params: {
                    secret: 'aqui va la clave secreta de recaptcha',
                    response: gRecaptchaResponse
                }
            }
        );
        if (response.data.succes) {
            // aqui va la logica para guardar o enviar el mensaje a donde corresponda
            res.status(200).send('Formulario enviado correctamente');
        } else {
            res.status(400).send('Error en la validación del reCAPTCHA');
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Error en el servidor');
    }
});

module.exports = router;