import {
  Announcement,
  Performance,
  ScheduleCalendarContainer
} from '@/components/molecule';
import { IMAGE } from '@/constant';
import {
  CalendarOutlined,
  ExperimentOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import { Avatar } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const SinglePageTeacher = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      <div className="w-full xl:w-2/3 ">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-nSky py-6 px-4 rounded-md flex-1 flex gap-4 shadow">
            <div className="w-1/3">
              <Avatar src={IMAGE.LOGO.src} alt="" size={144} />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Teacher Name</h1>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <ExperimentOutlined size={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <CalendarOutlined size={14} />
                  <span>
                    {new Intl.DateTimeFormat('en-GB').format(
                      new Date('2021-09-01')
                    )}
                  </span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MailOutlined size={14} />
                  <span>Teacher@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <PhoneOutlined size={14} />
                  <span>0972726811</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="shadow bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={IMAGE.Attendance.src}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="shadow bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={IMAGE.Branch.src}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">Math</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            <div className="shadow bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={IMAGE.Lesson.src}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">14</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="shadow bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src={IMAGE.Class}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white rounded-md p-4 h-[800px] shadow">
          <h1>Teacher&apos;s Schedule</h1>
          <ScheduleCalendarContainer />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <div className="bg-white p-4 rounded-md shadow">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-2 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-nSkyLight"
              href={`/list/classes?supervisorId=1`}
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-nPurpleLight"
              href={`/list/students?teacherId=1`}
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className="p-3 rounded-md bg-nYellowLight"
              href={`/list/lessons?teacherId=1`}
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50"
              href={`/list/exams?teacherId=1`}
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-nSkyLight"
              href={`/list/assignments?teacherId=1`}
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SinglePageTeacher;
