import { EllipsisOutlined } from '@ant-design/icons';
import CountChart from './CountChart';
import { Button } from 'antd';

const CountChartContainer = () => {
  const boys = 20;
  const girls = 30;

  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Button type="text">
          <EllipsisOutlined style={{ fontSize: 30, color: 'gray' }} />
        </Button>
      </div>
      <CountChart boys={boys} girls={girls} />
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">{boys}</h1>
          <h2 className="text-xs text-gray-300">
            Boys ({Math.round((boys / (boys + girls)) * 100)}%)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">{girls}</h1>
          <h2 className="text-xs text-gray-300">
            Girls ({Math.round((girls / (boys + girls)) * 100)}%)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;
