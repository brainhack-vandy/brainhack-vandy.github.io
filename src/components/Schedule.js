import React from 'react';
import scheduleImage from '../images/static_schedule.png';  // Adjust path based on your file structure

const Schedule = () => {
    return (
        <section>
            <div className="schedule-container">
                <h1 className="schedule-heading">
                    Tentative Event <strong className="purple">Schedule</strong>
                </h1>
                <div className="schedule-content">
                    <img 
                        src={scheduleImage}
                        alt="BrainHack Schedule"
                        className="schedule-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Schedule;