const pool = require('#database/connect/maria');

const getPost = async () => {
  try {
    const [rows] = await pool.execute(`SELECT * FROM post`);
    return rows;
  } catch (err) {
    return err;
  }
}

module.exports = {
  getPost,
}