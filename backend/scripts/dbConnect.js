import { config } from 'dotenv';
import mysql from 'mysql2/promise';

// Load environment variables from .env file
config({ path: './.env' });

// Create a MySQL connection pool using environment variables
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const connectToDatabase = async () => {
  let connection;

  try {
    connection = await pool.getConnection();
    console.log('Connected to the database!');

  } catch (err) {
    console.error('Error connecting to the database:', err.message);

  }
};

connectToDatabase();

export default connectToDatabase;
