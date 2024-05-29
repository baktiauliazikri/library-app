// models/studentModel.js
const pool = require('../db');

const getAllStudents = async () => {
  try {
    const students = await pool.query('SELECT * FROM students');
    return students.rows;
  } catch (error) {
    throw new Error('Error while fetching students');
  }
};

const getStudentById = async (id) => {
  try {
    const student = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
    return student.rows[0];
  } catch (error) {
    throw new Error('Error while fetching student');
  }
};

const createStudent = async (name, nim, age,jurusan) => {
  try {
    const newStudent = await pool.query('INSERT INTO students (name, nim, age, jurusan) VALUES ($1, $2, $3) RETURNING *', [name, nim, jurusan]);
    return newStudent.rows[0];
  } catch (error) {
    throw new Error('Error while creating student');
  }
};

const updateStudent = async (id, name, nim, jurusan) => {
  try {
    const updatedStudent = await pool.query('UPDATE students SET name = $1, nim = $2, jurusan = $3 WHERE id = $4 RETURNING *', [name, nim, jurusan, id]);
    return updatedStudent.rows[0];
  } catch (error) {
    throw new Error('Error while updating student');
  }
};

const deleteStudent = async (id) => {
  try {
    const deletedStudent = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
    return deletedStudent.rows[0];
  } catch (error) {
    throw new Error('Error while deleting student');
  }
};

module.exports = { 
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
