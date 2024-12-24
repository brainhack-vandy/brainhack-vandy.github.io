import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from './events';
import './schedule.css';

const ScheduleCalendar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentDate, setCurrentDate] = useState('2025-01-24');
  const calendarRef = React.useRef();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add effect to update calendar view when window width changes
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const isMobile = windowWidth < 768;

      // Update view
      calendarApi.changeView(isMobile ? 'timeGridDay' : 'timeGridThreeDay');

      // Force re-render of the calendar
      calendarApi.updateSize();
    }
  }, [windowWidth]);

  const dateButtons = [
    { date: '2025-01-24', label: 'Friday' },
    { date: '2025-01-25', label: 'Saturday' },
    { date: '2025-01-26', label: 'Sunday' }
  ];

  const handleDateSelect = (date) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(date);
      setCurrentDate(date);
    }
  };

  const getEventClassNames = (eventInfo) => {
    switch (eventInfo.event.extendedProps.type) {
      case 'educational':
        return ['event-color-1', 'clickable-event'];
      case 'events':
        return ['event-color-2'];
      case 'hacking':
        return ['event-color-3'];
      case 'keynote':
        return ['event-color-4', 'clickable-event'];
      case 'unconference':
        return ['event-color-5'];
      default:
        return ['event-color-1'];
    }
  };

  const renderEventContent = (eventInfo) => {
    const isClickable = ['workshop', 'keynote'].includes(eventInfo.event.extendedProps.type);

    if (isClickable) {
      return (
        <a
          href="https://brainhack-vandy.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="custom-event-content clickable"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="event-title">{eventInfo.event.title}</div>
        </a>
      );
    }

    return (
      <div className="custom-event-content">
        <div className="event-title">{eventInfo.event.title}</div>
      </div>
    );
  };

  const isMobile = windowWidth < 768;

  return (
    <Container fluid className="schedule-section">
      <Container>
        <h1 className="page-heading">Tentative <strong className="purple">Event Schedule</strong></h1>

        {isMobile && (
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
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView={isMobile ? 'timeGridDay' : 'timeGridThreeDay'}
            views={{
              timeGridThreeDay: {
                type: 'timeGrid',
                duration: { days: 3 },
                buttonText: '3 day'
              }
            }}
            headerToolbar={{
              left: isMobile ? 'prev,next' : '',
              center: 'title',
              right: isMobile ? 'timeGridDay' : ''
            }}
            dayHeaderFormat={{ weekday: 'long' }}
            initialDate="2025-01-24"
            validRange={{
              start: '2025-01-24',
              end: '2025-01-27'
            }}
            slotMinTime="09:00:00"
            slotMaxTime="19:00:00"
            expandRows={true}
            height={isMobile ? 600 : 800}
            slotDuration="00:30:00"
            events={events}
            eventContent={renderEventContent}
            eventClassNames={getEventClassNames}
            eventDisplay="block"
            allDaySlot={false}
          />
        </div>
      </Container>
    </Container>
  );
};

export default ScheduleCalendar;