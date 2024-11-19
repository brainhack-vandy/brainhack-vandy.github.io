import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { calendarEvents } from './events';

const ScheduleCalendar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentDate, setCurrentDate] = useState('2025-01-24');
  const calendarRef = React.useRef();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dateButtons = [
    { date: '2025-01-24', label: 'Friday 24' },
    { date: '2025-01-25', label: 'Saturday 25' },
    { date: '2025-01-26', label: 'Sunday 26' }
  ];

  const handleDateSelect = (date) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(date);
      setCurrentDate(date);
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div className="custom-event-content">
        <div className="event-title">{eventInfo.event.title}</div>
      </div>
    );
  };

  const handleDatesSet = (dateInfo) => {
    const newDate = dateInfo.start.toISOString().split('T')[0];
    if (newDate !== currentDate) {
      setCurrentDate(newDate);
    }
  };

  return (
    <Container fluid className="schedule-section">
      <Container>
        <h1 className="project-heading">Event Schedule</h1>

        {windowWidth < 768 && (
          <div className="date-selector">
            {dateButtons.map(({ date, label }) => (
              <button
                key={date}
                onClick={() => handleDateSelect(date)}
                className={`date-button ${currentDate === date ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="schedule-container">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView={windowWidth < 768 ? 'timeGridDay' : 'timeGridThreeDay'}
            views={{
              timeGridThreeDay: {
                type: 'timeGrid',
                duration: { days: 3 },
                buttonText: '3 day'
              }
            }}
            headerToolbar={{
              left: windowWidth < 768 ? 'prev,next' : 'timeGridThreeDay,listDay',
              center: 'title',
              right: windowWidth < 768 ? 'timeGridDay,listDay' : 'prev,next'
            }}
            initialDate="2025-01-24"
            validRange={{
              start: '2025-01-24',
              end: '2025-01-27'
            }}
            navLinks={false}
            slotMinTime="09:00:00"
            slotMaxTime="19:00:00"
            expandRows={true}
            height={windowWidth < 768 ? 600 : 800}
            slotDuration="00:30:00"
            events={calendarEvents}
            eventContent={renderEventContent}
            eventDisplay="block"
            allDaySlot={false}
            datesSet={handleDatesSet}
          />
        </div>

        <style>
          {`
            .date-selector {
              display: flex;
              gap: 0.5rem;
              margin-bottom: 1rem;
              padding: 0.5rem 0;
              justify-content: center;
            }

            .date-button {
              background-color: rgba(199, 112, 240, 0.2);
              border: 1px solid #c770f0;
              color: white;
              padding: 0.5rem 0.75rem;
              border-radius: 6px;
              font-size: 0.875rem;
              white-space: nowrap;
              transition: all 0.3s ease;
              min-width: 70px;
            }

            .date-button:hover {
              background-color: rgba(199, 112, 240, 0.4);
            }

            .date-button.active {
              background-color: #c770f0;
              font-weight: 600;
            }

            .schedule-container {
              background: rgba(0, 0, 0, 0.2);
              padding: 1rem;
              border-radius: 12px;
              box-shadow: 0 4px 5px 3px rgba(119, 53, 136, 0.459);
              margin: 2rem 0;
            }

            .fc {
              background: rgba(98, 54, 134, 0.1);
              border-radius: 12px;
              padding: 1rem;
            }

            /* Reduced font sizes */
            .fc {
              font-size: 0.875rem;
            }

            .fc-toolbar-title {
              font-size: 1rem !important;
              font-weight: 600 !important;
              color: white !important;
            }

            .fc-timegrid-slot-label {
              font-size: 0.875rem !important;
              padding: 0.25rem !important;
            }

            .fc-col-header-cell-cushion {
              font-size: 0.875rem;
              font-weight: 600;
              color: white !important;
              padding: 0.5rem 0.25rem !important;
            }

            .fc-theme-standard td, 
            .fc-theme-standard th,
            .fc-theme-standard .fc-scrollgrid {
              border-color: rgba(199, 112, 240, 0.3) !important;
            }

            .fc-timegrid-slot-label,
            .fc-timegrid-axis-cushion {
              color: rgba(255, 255, 255, 0.9);
              font-weight: 500;
            }

            .fc .fc-button {
              font-size: 0.875rem;
              padding: 0.4rem 0.8rem;
              font-weight: 500;
            }

            .fc .fc-button-primary {
              background-color: #c770f0;
              border-color: #c770f0;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            .fc .fc-button-primary:hover {
              background-color: #a355c9;
              border-color: #a355c9;
            }

            .fc .fc-button-primary:not(:disabled):active,
            .fc .fc-button-primary:not(:disabled).fc-button-active {
              background-color: #8f40b9;
              border-color: #8f40b9;
            }

            .custom-event-content {
              padding: 0.25rem;
              height: 100%;
            }

            .custom-event-content .event-title {
              color: white;
              font-weight: 600;
              font-size: 0.875rem;
              margin-bottom: 0.25rem;
              line-height: 1.2;
            }

            .fc-timegrid-slot {
              height: 2.5rem !important;
            }

            /* Mobile-specific styles */
            @media (max-width: 767px) {
              .schedule-container {
                padding: 0.5rem;
                margin: 1rem -0.5rem;
              }
              
              .fc {
                padding: 0.5rem;
                font-size: 0.75rem;
              }

              .fc-toolbar-title {
                font-size: 0.875rem !important;
              }

              .custom-event-content .event-title {
                font-size: 0.75rem;
              }

              .fc .fc-button {
                font-size: 0.75rem;
                padding: 0.3rem 0.6rem;
              }

              .fc-timegrid-slot {
                height: 2rem !important;
              }
            }

            .fc-timegrid-event {
              margin: 1px 0;
              border-radius: 4px;
            }
          `}
        </style>
      </Container>
    </Container>
  );
};

export default ScheduleCalendar;