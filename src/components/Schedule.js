import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const ScheduleCalendar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1200; // xl breakpoint

  const scheduleData = [
    {
      day: "Friday",
      date: "January 24",
      events: [
        {
          time: "5:00 PM - 5:30 PM",
          title: "Registration and Opening Remarks",
          description: "Check-in and registration for participants"
        },
        {
          time: "5:30 PM - 6:00 PM",
          title: "Opening Ceremony and Dinner",
          description: "Welcome ceremony with provided dinner"
        },
        {
          time: "6:00 PM - 7:00 PM",
          title: "Project Pitches",
          description: "Teams present their project ideas"
        }
      ]
    },
    {
      day: "Saturday",
      date: "January 25",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Breakfast and Registration",
          description: "Morning breakfast and continued registration"
        },
        {
          time: "10:00 AM - 10:30 AM",
          title: "Workshop 1",
          description: ""
        },
        {
          time: "11:00 AM - 11:30 AM",
          title: "Workshop 2",
          description: ""
        },
        {
          time: "12:00 PM - 12:45 PM",
          title: "Lunch and Keynote",
          description: "Lunch break with keynote presentation"
        },
        {
          time: "1:00 PM - 1:30 PM",
          title: "On Demand Educationals",
          description: "Office hours"
        },
        {
          time: "2:00 PM - 3:30 PM",
          title: "Unconference",
          description: ""
        },
        {
          time: "2:00 PM - 2:30 PM",
          title: "Workshop 3",
          description: ""
        },
        {
          time: "3:00 PM - 3:30 PM",
          title: "Workshop 4",
          description: ""
        }
      ]
    },
    {
      day: "Sunday",
      date: "January 26",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Breakfast",
          description: "Morning breakfast"
        },
        {
          time: "1:00 PM - 2:00 PM",
          title: "Presentations",
          description: "Final project presentations"
        }
      ]
    }
  ];

  const TimeBlock = ({ time }) => (
    <div className="time-block">
      <span>{time}</span>
      <hr />
    </div>
  );

  const Event = ({ event }) => (
    <div className="event-card">
      <div className="event-time">{event.time}</div>
      <div className="event-content">
        <div className="event-title">{event.title}</div>
        <div className="event-description">{event.description}</div>
      </div>
    </div>
  );

  const DayColumn = ({ dayData }) => (
    <div className="day-column">
      <div className="day-header">
        <h3>{dayData.day}</h3>
        <div className="day-date">{dayData.date}</div>
      </div>
      <div className="events-container">
        {dayData.events.map((event, idx) => (
          <Event key={idx} event={event} />
        ))}
      </div>
    </div>
  );

  return (
    <Container fluid className="schedule-section">
      <Container>
        <h1 className="project-heading">Event Schedule</h1>

        <div className="schedule-container">
          <div className={`schedule-grid ${isDesktop ? 'desktop' : 'mobile'}`}>
            {scheduleData.map((day, idx) => (
              <DayColumn key={idx} dayData={day} />
            ))}
          </div>
        </div>

        <style>
          {`
            .schedule-container {
              background: rgba(0, 0, 0, 0.2);
              padding: 1.5rem;
              border-radius: 8px;
              box-shadow: 0 4px 5px 3px rgba(119, 53, 136, 0.459);
            }

            .schedule-grid {
              display: flex;
              gap: 1.5rem;
              min-height: 600px;
            }

            .schedule-grid.mobile {
              flex-direction: column;
            }

            .schedule-grid.desktop {
              flex-direction: row;
            }

            .day-column {
              flex: 1;
              min-width: 0;
              background: rgba(98, 54, 134, 0.1);
              border-radius: 8px;
              padding: 1rem;
            }

            .day-header {
              padding-bottom: 1rem;
              margin-bottom: 1rem;
              border-bottom: 1px solid rgba(199, 112, 240, 0.2);
            }

            .day-header h3 {
              color: var(--imp-text-color);
              margin: 0;
              font-size: 1.5rem;
            }

            .day-date {
              color: rgba(255, 255, 255, 0.7);
              font-size: 0.9rem;
              margin-top: 0.25rem;
            }

            .events-container {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }

            .event-card {
              background: rgba(199, 112, 240, 0.15);
              border-radius: 6px;
              border-left: 3px solid #c770f0;
              padding: 1rem;
              transition: all 0.3s ease;
            }

            .event-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 8px rgba(199, 112, 240, 0.3);
            }

            .event-time {
              color: var(--imp-text-color);
              font-size: 0.9rem;
              font-weight: 500;
              margin-bottom: 0.5rem;
            }

            .event-title {
              color: white;
              font-weight: 500;
              font-size: 1rem;
              margin-bottom: 0.25rem;
            }

            .event-description {
              color: rgba(255, 255, 255, 0.8);
              font-size: 0.875rem;
              line-height: 1.4;
            }

            @media (max-width: 1199px) {
              .schedule-container {
                padding: 1rem;
                margin: 0 -0.5rem;
              }

              .day-column {
                padding: 0.875rem;
              }

              .day-header h3 {
                font-size: 1.25rem;
              }

              .event-card {
                padding: 0.875rem;
              }

              .event-title {
                font-size: 0.95rem;
              }

              .event-description {
                font-size: 0.825rem;
              }
            }

            @media (min-width: 1200px) {
              .schedule-grid {
                min-height: 700px;
              }
              
              .day-column {
                max-width: calc(33.333% - 1rem);
              }
            }
          `}
        </style>
      </Container>
    </Container>
  );
};

export default ScheduleCalendar;