import { useState, useEffect } from "react";
import LogContainer from "./LogContainer";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLogs();
    }, [logs]);

    const fetchLogs = async () => {

        try {
            const URI = 'http://localhost:3000/weights';
            const config = {
                method: 'GET',
                mode: 'cors'
            };

            const response = await fetch(URI, config);
            const data = await response.json();
            setLogs(data);
            setLoading(false);

            console.log(data);
        } catch (err) {
            console.error(err.message);
            setLoading(false);
        }
    }
    return (

        <LogContainer data={logs} loading={loading}></LogContainer>
    )
}

export default Logs;