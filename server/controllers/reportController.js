const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const getHistoryReport = async (req, res) => {
  try {
    const client = await pool.connect();
    const { nim, student_name, book_id, book_name, borrow_date, return_date, duration } = req.query;
    
    let filterQuery = 'WHERE 1=1';
    let queryParams = [];
    
    if (nim) {
      filterQuery += ' AND student_id = $1';
      queryParams.push(nim);
    }
    if (student_name) {
      filterQuery += ' AND student_name = $2';
      queryParams.push(student_name);
    }
    
    const query = `
      SELECT * FROM transactions
      ${filterQuery}
      ORDER BY borrow_date DESC;
    `;
    
    const result = await client.query(query, queryParams);
    client.release();
    
    res.json(result.rows);
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil laporan riwayat peminjaman buku.' });
  }
};

module.exports = { getHistoryReport };