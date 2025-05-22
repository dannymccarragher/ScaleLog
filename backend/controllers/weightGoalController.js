import { pool } from '../scripts/dbConnect.js';

const addGoal = async (req, res) => {
    const { goal } = req.body;

    if (!goal) {
        return res.status(400).json({ error: "Goal is required" });
    }

    const { startingWeight, goalWeight, targetDate } = goal;

    if (!startingWeight || !goalWeight || !targetDate) {
        return res.status(400).json({ error: "Missing required goal fields" });
    }

    try {
        const connection = await pool.getConnection();

        const [result] = await connection.query(
            'INSERT INTO weight_goals (starting_weight, goal_weight, target_date) VALUES (?, ?, ?)',
            [startingWeight, goalWeight, targetDate]
        );

        connection.release();

        res.json({ message: "Goal added successfully", goalId: result.insertId });

    } catch (err) {
        console.error('Error adding goal:', err.message);
        res.status(500).json({ error: "Failed to add goal" });
    }
};

const getGoals = async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const result = await connection.query(
            'SELECT * FROM weight_goals'
        );
        connection.release();
        res.json(result)
    } catch (err) {
        res.status(500).json({ error: "Failed to get goals" });
    }
}

export default {
    addGoal,
    getGoals
};
