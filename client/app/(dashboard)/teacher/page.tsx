import {
  Announcement,
  EventCalendarContainer,
  ScheduleCalendarContainer
} from '@/components/molecule';
import { SearchParams } from '../admin/page';

const TeacherPage = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3 shadow">
        <div className="h-full bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Schedule</h2>
          <ScheduleCalendarContainer />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
        <EventCalendarContainer searchParams={searchParams} />
      </div>
    </div>
  );
};

export default TeacherPage;
