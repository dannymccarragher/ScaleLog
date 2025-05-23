import LogContainer from "./LogContainer";

const Logs = ({ logs, loading, fetchLogs }) => {
  const deleteWeight = async (id) => {
    if (!id) {
      console.error('No id provided for deletion');
      return;
    }
    try {
      const URI = `http://localhost:3000/weights/${id}`;
      const response = await fetch(URI, { method: 'DELETE' });

      if (!response.ok) throw new Error('Failed to delete');

      await fetchLogs();
    } catch (err) {
      console.error('Error deleting weight:', err.message);
    }
  };

  return (
    <LogContainer
      data={logs}
      loading={loading}
      deleteWeight={deleteWeight}
    />
  );
};

export default Logs;
