import { pool } from '../scripts/dbConnect.js'
const getWeights = async (req, res) => {
    try {
    const connection = await pool.getConnection();
    const results = await connection.query('SELECT * FROM weight_entries')
    connection.release();
    res.json(results);
  } catch (err) {
    console.error('Error fetching weights:', err.message);
    res.status(500).json({ error: 'Failed to fetch weights' });
  }
}

const deleteWeights = (req, res) => {

}

const addWeight = async (req, res) => {
  const { weight } = req.body; 

  // Check if weight is provided
  if (!weight) {
    return res.status(400).json({ error: 'Weight is required' });
  }

  try {
    const connection = await pool.getConnection();
    
    // Insert the weight into the database using params
    const result = await connection.query(
      'INSERT INTO weight_entries (weight, date) VALUES (?, ?)', 
      [weight, new Date()] 
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