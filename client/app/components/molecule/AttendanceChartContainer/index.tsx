import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import AttendanceChart from './AttendanceChart';

const AttendanceChartContainer = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const lastMonday = new Date(today);
  lastMonday.setDate(today.getDate() - daysSinceMonday);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const attendanceMap: { [key: string]: { present: number; absent: number } } =
    {
      Mon: { present: 20, absent: 5 },
      Tue: { present: 18, absent: 7 },
      Wed: { present: 22, absent: 3 },
      Thu: { present: 25, absent: 0 },
      Fri: { present: 19, absent: 6 }
    };

  const data = daysOfWeek.map((day) => ({
    name: day,
    present: attendanceMap[day].present,
    absent: attendanceMap[day].absent
  }));

  return (
    <div className="bg-white rounded-lg p-4 h-full shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <EllipsisOutlined style={{ fontSize: 30, color: 'gray' }} />
      </div>

      <AttendanceChart data={data} />
    </div>
  );
};

export default AttendanceChartContainer;
