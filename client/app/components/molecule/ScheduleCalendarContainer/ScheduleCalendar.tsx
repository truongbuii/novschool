'use client';

import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment-timezone'; // Import moment-timezone
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

interface CalendarEvent {
  title: string;
  allDay: boolean;
  startTime: Date;
  endTime: Date;
}
const userTimezone = moment.tz.guess();

const convertEventTime = (start: string, end: string) => {
  return {
    startTime: moment.tz(start, userTimezone).toDate(),
    endTime: moment.tz(end, userTimezone).toDate()
  };
};

const mockCalendarEvents: CalendarEvent[] = [
  {
    title: 'Math',
    allDay: false,
    ...convertEventTime('2024-12-02T08:00:00', '2024-12-02T08:45:00')
  },
  {
    title: 'English',
    allDay: false,
    ...convertEventTime('2024-12-02T09:00:00', '2024-12-02T09:45:00')
  },
  {
    title: 'Biology',
    allDay: false,
    ...convertEventTime('2024-12-02T10:00:00', '2024-12-02T10:45:00')
  },
  {
    title: 'Physics',
    allDay: false,
    ...convertEventTime('2024-12-02T11:00:00', '2024-12-02T11:45:00')
  },
  {
    title: 'Chemistry',
    allDay: false,
    ...convertEventTime('2024-12-02T13:00:00', '2024-12-02T13:45:00')
  },
  {
    title: 'History',
    allDay: false,
    ...convertEventTime('2024-12-02T14:00:00', '2024-12-02T14:45:00')
  },
  {
    title: 'Biology',
    allDay: false,
    ...convertEventTime('2024-12-03T10:00:00', '2024-12-03T10:45:00')
  },
  {
    title: 'Physics',
    allDay: false,
    ...convertEventTime('2024-12-03T11:00:00', '2024-12-03T11:45:00')
  },
  {
    title: 'History',
    allDay: false,
    ...convertEventTime('2024-12-03T14:00:00', '2024-12-03T14:45:00')
  },
  {
    title: 'Math',
    allDay: false,
    ...convertEventTime('2024-12-04T08:00:00', '2024-12-04T08:45:00')
  },
  {
    title: 'English',
    allDay: false,
    ...convertEventTime('2024-12-04T09:00:00', '2024-12-04T09:45:00')
  },
  {
    title: 'Physics',
    allDay: false,
    ...convertEventTime('2024-12-04T11:00:00', '2024-12-04T11:45:00')
  },
  {
    title: 'Chemistry',
    allDay: false,
    ...convertEventTime('2024-12-04T13:00:00', '2024-12-04T13:45:00')
  },
  {
    title: 'History',
    allDay: false,
    ...convertEventTime('2024-12-04T14:00:00', '2024-12-04T14:45:00')
  },
  {
    title: 'Math',
    allDay: false,
    ...convertEventTime('2024-12-05T08:00:00', '2024-12-05T08:45:00')
  },
  {
    title: 'English',
    allDay: false,
    ...convertEventTime('2024-12-05T09:00:00', '2024-12-05T09:45:00')
  },
  {
    title: 'Physics',
    allDay: false,
    ...convertEventTime('2024-12-05T11:00:00', '2024-12-05T11:45:00')
  },
  {
    title: 'Chemistry',
    allDay: false,
    ...convertEventTime('2024-12-05T13:00:00', '2024-12-05T13:45:00')
  },
  {
    title: 'History',
    allDay: false,
    ...convertEventTime('2024-12-05T14:00:00', '2024-12-05T14:45:00')
  },
  {
    title: 'Math',
    allDay: false,
    ...convertEventTime('2024-12-06T08:00:00', '2024-12-06T08:45:00')
  },
  {
    title: 'English',
    allDay: false,
    ...convertEventTime('2024-15-09T09:00:00', '2024-12-09T09:45:00')
  },
  {
    title: 'Physics',
    allDay: false,
    ...convertEventTime('2024-12-06T11:00:00', '2024-12-06T11:45:00')
  },
  {
    title: 'Chemistry',
    allDay: false,
    ...convertEventTime('2024-12-09T13:00:00', '2024-12-09T13:45:00')
  },
  {
    title: 'History',
    allDay: false,
    ...convertEventTime('2024-12-06T14:00:00', '2024-12-06T14:45:00')
  }
];

const localizer = momentLocalizer(moment);

const WORK_HOURS_START = new Date(2024, 1, 0, 8, 0, 0);
const WORK_HOURS_END = new Date(2024, 1, 0, 18, 0, 0);

const ScheduleCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={mockCalendarEvents}
      startAccessor="startTime"
      endAccessor="endTime"
      views={['work_week', 'day']}
      view={view}
      onView={handleOnChangeView}
      min={WORK_HOURS_START}
      max={WORK_HOURS_END}
      style={{ height: '98%' }}
    />
  );
};

export default ScheduleCalendar;
