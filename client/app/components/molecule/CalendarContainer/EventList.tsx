interface Event {
  id: number;
  title: string;
  class: string;
  startTime: Date;
  endTime: Date;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: 'Lake Trip',
    class: '1A',
    startTime: new Date('2024-12-03T10:30:00.000Z'),
    endTime: new Date('2024-12-03T14:30:00.000Z')
  },
  {
    id: 2,
    title: 'Picnic',
    class: '2A',
    startTime: new Date('2024-12-03T19:02:02.000Z'),
    endTime: new Date('2024-12-03T18:01:01.000Z')
  },
  {
    id: 3,
    title: 'Beach Trip',
    class: '3A',
    startTime: new Date('2024-12-03T18:01:01.000Z'),
    endTime: new Date('2024-12-03T18:01:01.000Z')
  }
];

const EventList = async ({ dateParam }: { dateParam: string | undefined }) => {
  const date = dateParam ? new Date(dateParam) : new Date();

  if (isNaN(date.getTime())) {
    return <div className="text-red-500">Invalid date provided.</div>;
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-UK', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return mockEvents.map((event) => (
    <div
      className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-nSky even:border-t-nPurple"
      key={event.id}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-gray-600">{event.title}</h1>
        <span className="text-gray-300 text-xs">
          {formatTime(event.startTime)} - {formatTime(event.endTime)}
        </span>
      </div>
      <p className="mt-2 text-gray-400 text-sm">{event.class}</p>
    </div>
  ));
};

export default EventList;
