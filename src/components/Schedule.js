import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Schedule() {
  const [activeDay, setActiveDay] = useState(0); // 0: Friday, 1: Saturday, 2: Sunday

  const scheduleData = [
    // Friday
    {
      day: "Friday (1/24)",
      events: [
        {
          time: "3:30 PM - 5:00 PM",
          event: "Setup",
          description: "Event setup and preparation"
        },
        {
          time: "5:00 PM - 5:30 PM",
          event: "Registration",
          description: "Check-in and registration for participants"
        },
        {
          time: "5:30 PM - 6:00 PM",
          event: "Opening Ceremony + Light Dinner",
          description: "Welcome ceremony with provided dinner"
        },
        {
          time: "6:00 PM - 7:00 PM",
          event: "Project Pitches",
          description: "Teams present their project ideas"
        },
        {
          time: "7:00 PM - 7:30 PM",
          event: "Cleanup",
          description: "Day 1 cleanup"
        }
      ]
    },
    // Saturday
    {
      day: "Saturday (1/25)",
      events: [
        {
          time: "8:30 AM - 9:00 AM",
          event: "Setup",
          description: "Morning setup"
        },
        {
          time: "9:00 AM - 10:00 AM",
          event: "Breakfast + Registration",
          description: "Morning breakfast and continued registration"
        },
        {
          time: "12:00 PM - 12:45 PM",
          event: "Lunch + Keynote",
          description: "Lunch break with keynote presentation"
        },
        {
          time: "2:00 PM - 2:30 PM",
          event: "Unconference",
          description: "Participant-driven sessions"
        },
        {
          time: "3:00 PM - 3:30 PM",
          event: "Unconference",
          description: "Participant-driven sessions"
        },
        {
          time: "6:00 PM - 7:00 PM",
          event: "Social Event + Food",
          description: "Evening social gathering with food provided"
        },
        {
          time: "7:00 PM - 7:30 PM",
          event: "Cleanup",
          description: "Day 2 cleanup"
        }
      ]
    },
    // Sunday
    {
      day: "Sunday (1/26)",
      events: [
        {
          time: "8:30 AM - 9:00 AM",
          event: "Setup",
          description: "Morning setup"
        },
        {
          time: "9:00 AM - 10:00 AM",
          event: "Breakfast",
          description: "Morning breakfast"
        },
        {
          time: "1:00 PM - 2:00 PM",
          event: "Presentations + Closing Remarks",
          description: "Final project presentations and event conclusion"
        },
        {
          time: "2:00 PM - 3:00 PM",
          event: "Cleanup",
          description: "Final cleanup"
        }
      ]
    }
  ];

  return (
    <Container fluid className="schedule-section">
      <Container>
        <h1 className="project-heading">Event Schedule</h1>
        
        <div className="schedule-nav">
          {scheduleData.map((day, index) => (
            <Button
              key={index}
              className={`schedule-nav-button ${activeDay === index ? 'active' : ''}`}
              onClick={() => setActiveDay(index)}
            >
              {day.day.split(' ')[0]}
            </Button>
          ))}
        </div>

        <div className="schedule-day-section">
          <h2 className="schedule-day-heading">{scheduleData[activeDay].day}</h2>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {scheduleData[activeDay].events.map((item, index) => (
              <Col md={8} className="schedule-card" key={index}>
                <div className="schedule-card-view">
                  <div className="schedule-time">{item.time}</div>
                  <div className="schedule-content">
                    <h3 className="schedule-title">{item.event}</h3>
                    <p className="schedule-description">{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default Schedule; 