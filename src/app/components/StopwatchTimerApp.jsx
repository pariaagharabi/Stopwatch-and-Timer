import React, { useState, useEffect } from 'react';

const StopwatchTimerApp = () => {
    // Initializing, Destructuring and Updating States
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    // Defining Methods
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000)) / 10;

        const formatNumber = (number) => (number < 10 ? `0${number}` : number);

        return `${formatNumber(minutes)}:${formatNumber(seconds)}.${formatNumber(milliseconds)}`;
    };

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 10);
            }, 10);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
    };

    const lapStopwatch = () => {
        setLaps((prevLaps) => [...prevLaps, elapsedTime]);
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };



    // Re-rendering in UI
    return (
        <>
            <div className="app-container">
                <div className="app-inner-container">

                    <div className="app-header-container">
                        <h1>Stopwatch and Timer App</h1>
                    </div>

                    <div className="stopwatch-container">
                        {formatTime(elapsedTime)}
                    </div>

                    <div className="buttons-container">
                        <div className="start-lap-stop-btns">
                            <button onClick={startStopwatch} disabled={isRunning}>Start</button>
                            <button onClick={lapStopwatch} disabled={!isRunning}>Lap</button>
                            <button onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
                        </div>
                        <div className="reset-btn">
                            <button onClick={resetStopwatch}>Reset</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default StopwatchTimerApp;
