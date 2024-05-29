const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

(async () => {
  const client = await pool.connect();

  try {
    // Membuat tabel buku
    await client.query(`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        year INTEGER NOT NULL
      );
    `);

    console.log('Tabel "books" berhasil dibuat.');

    // Membuat tabel mahasiswa
    await client.query(`
      CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        age INTEGER NOT NULL,
        nim VARCHAR(20) NOT NULL,
        jurusan VARCHAR(100) NOT NULL
      );
    `);

    console.log('Tabel "students" berhasil dibuat.');

    // Membuat tabel transaksi
    await client.query(`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
        book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
        return_date DATE NOT NULL
      );
    `);

    console.log('Tabel "transactions" berhasil dibuat.');
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
  } finally {
    // Selalu ingat untuk melepaskan koneksi saat selesai
    client.release();
  }
})();
