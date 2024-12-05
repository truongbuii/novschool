import EventCalendar from './EventCalendar';
import EventList from './EventList';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const EventCalendarContainer = async ({
  searchParams
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  const { date } = searchParams;
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <EventCalendar />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Button type="text">
          <EllipsisOutlined style={{ fontSize: 30, color: 'gray' }} />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
