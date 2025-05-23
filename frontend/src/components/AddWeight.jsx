import { useState, forwardRef } from 'react';

const AddWeight = forwardRef(({ refreshLogs }, weightInputRef) => {
  const [weight, setWeight] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = { weight, note };

    try {
      const response = await fetch('http://localhost:3000/weights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
      });

      if (response.ok) {
        alert('Weight entry added!');
        await refreshLogs();
        setWeight('');
        setNote('');
        
      } else {
        console.error('Failed to add entry');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <h2 className="Container-Header">Add Weight</h2>
      <form className="weight-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          ref={weightInputRef}
          type="number"
          step="1"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <textarea
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Add Weight</button>
      </form>
    </>
  );
});

export default AddWeight;
