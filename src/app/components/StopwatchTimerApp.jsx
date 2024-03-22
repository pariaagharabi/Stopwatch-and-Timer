import React, { useState } from 'react';

const StopwatchTimerApp = () => {
    // Initializing, Destructuring and Updating States



    // Defining Methods



    // Re-rendering in UI
    return (
        <>
            <div className="app-container">
                <div className="app-inner-container">

                    <div className="app-header-container">
                        <h1>Stopwatch and Timer App</h1>
                    </div>

                    <div className="stopwatch-container">
                        00:00.00
                    </div>

                    <div className="buttons-container">
                        <div className="start-lap-stop-btns">
                            <button>Start</button>
                            <button>Lap</button>
                            <button>Stop</button>
                        </div>
                        <div className="reset-btn">
                            <button>Reset</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default StopwatchTimerApp;
