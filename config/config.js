import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde .env

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Verificar la conexión a la base de datos
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error al conectar a la base de datos', err.stack);
    } else {
        console.log('Conexión exitosa a la base de datos');
        release();
    }
});

export default pool;