import pool from "../config/config.js";

const crearTablas = async () => {
    try {
        // Tabla enlaces
        await pool.query(`
            CREATE TABLE IF NOT EXISTS enlaces (
                id SERIAL PRIMARY KEY,
                url TEXT NOT NULL,
                etiquetas TEXT[],
                votos INTEGER DEFAULT 0
            );
        `);

        // Tabla comentarios
        await pool.query(`
                CREATE TABLE IF NOT EXISTS comentarios (
                    id  SERIAL PRIMARY KEY,
                    enlace_id INTEGER REFERENCES enlaces(id),
                    comentario TEXT NOT NULL,
                    votos INTEGER DEFAULT 0
                );
            `);
        
            console.log('Tablas Creadas exitosamente');
    } catch (error) {
        console.log('Error al crear las tablas: ', error);
    }
};

crearTablas();