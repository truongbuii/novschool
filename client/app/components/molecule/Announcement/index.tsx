import { Button } from 'antd';

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <Button type="text" className="text-xs text-gray-400">
          View All
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-nSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">title</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              17:30 - 21:30
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            mollitia illo nisi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
