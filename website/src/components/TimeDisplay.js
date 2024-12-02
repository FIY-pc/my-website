import React, { useState, useEffect } from 'react';
import "../styles/tools.css"

function TimeDisplay() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const date = time.toLocaleDateString();

    return (
        <div className="time-display">
            <div className="time">{`${hours}:${minutes}:${seconds}`}</div>
            <div className="date">{date}</div>
        </div>
    );
}

export default TimeDisplay;
