const LogContainer = ({ data, loading, deleteWeight }) => {


    // console.log('Received data:', data);

    return (
        <div>
            <h2 className="Container-Header"> Weight Logs</h2>
            {loading && <p>Loading Logs...</p>}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((log, index) => (
                        <tr key={index}>
                            <td>{new Date(log.date).toLocaleDateString()}</td>
                            <td>{log.weight}</td>
                            <td>
                                <button onClick={() => deleteWeight(log.id)}>Delete Weight</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )


};

export default LogContainer;