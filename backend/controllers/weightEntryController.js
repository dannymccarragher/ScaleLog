import { pool } from '../scripts/dbConnect.js'
const getWeights = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.query('SELECT * FROM weight_entries')
    connection.release();

    console.log(results);
    res.json(results);
  } catch (err) {
    console.error('Error fetching weights:', err.message);
    res.status(500).json({ error: 'Failed to fetch weights' });
  }
}

const deleteWeights = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const id = req.params.id;
    const results = await connection.query('DELETE FROM weight_entries WHERE id = ?', [id]); 
    connection.release();
    res.json("Successfully deleted:" + id);
  } catch (err) {
    console.error('Error deleting weight:', err.message);
    res.status(500).json({ error: 'Failed to delete weight' });
  }
}

const addWeight = async (req, res) => {
  const { weight, note } = req.body;

  // Check if weight is provided
  if (!weight) {
    return res.status(400).json({ error: 'Weight is required' });
  }

  try {
    const connection = await pool.getConnection();

    const today = new Date().toISOString().slice(0, 10);


    // Insert the weight into the database using params
    const result = await connection.query(
      'INSERT INTO weight_entries (weight, date) VALUES (?, ?)',
      [weight, today, note || null]
    );

    connection.release();

    // Respond with success message
    res.json({ message: 'Weight added successfully!', data: result });

  } catch (err) {
    console.error('Error adding weight:', err.message);
    res.status(500).json({ error: 'Failed to add weight' });
  }
};


export default {
  getWeights,
  deleteWeights,
  addWeight
};