import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { events } from './events';
import './ScheduleCalendar.css';

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

  const getEventClassNames = (eventInfo) => {
    const baseClasses = [];
    switch (eventInfo.event.extendedProps.type) {
      case 'workshop':
        return ['event-color-1', 'clickable-event'];
      case 'talk':
        return ['event-color-2'];
      case 'panel':
        return ['event-color-3'];
      case 'keynote':
        return ['event-color-4', 'clickable-event'];
      case 'breakout':
        return ['event-color-5'];
      case 'networking':
        return ['event-color-6'];
      case 'break':
        return ['event-color-7'];
      default:
        return ['event-color-8'];
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

  const handleDatesSet = (dateInfo) => {
    const newDate = dateInfo.start.toISOString().split('T')[0];
    if (newDate !== currentDate) {
      setCurrentDate(newDate);
    }
  };

  return (
    <Container fluid className="schedule-section">
      <Container>
        <h1 className="component-heading">Tentative <strong className="purple">Event Schedule</strong>
        </h1>

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
            dayHeaderFormat={{ weekday: 'long', month: 'numeric', day: 'numeric', separator: '/' }}
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
            events={events}
            eventContent={renderEventContent}
            eventClassNames={getEventClassNames}
            eventDisplay="block"
            allDaySlot={false}
            datesSet={handleDatesSet}
          />
        </div>
      </Container>
    </Container>
  );
};

export default ScheduleCalendar;