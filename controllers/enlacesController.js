import pool from "../config/config.js";

// Controlador para obtener todos los enlaces
export const obtenerEnlaces = async ( req, res ) => {
    try {
        const result = await pool.query('SELECT * FROM enlaces');
        res.json(result.rows);
    } catch (error) {
        console.log('Error al obtener los enlaces: ', error);
        res.status(500).send('Error en el servidor');
    }

};

// Controlador para crear un nuevo enlace

export const crearEnlace = async ( req, res ) => {
    const { url, etiquetas } = req.body; // Datos enviados desde front o thunder

    try {
        const result = await pool.query(
            'INSERT INTO enlaces (url, etiquetas) VALUES ($1, $2) RETURNING *',
            [url, etiquetas]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log('Error al crear un enlace nuevo: ', error);
        res.status(500).send('Error en el servidor');
    }
};

