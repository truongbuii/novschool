import { Icons } from '@/constant';
import { Avatar, Badge, Input } from 'antd';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full">
        <Input
          placeholder="Search..."
          prefix={<Icons.Search />}
          className="w-[200px]"
        />
      </div>

      <div className="flex items-center gap-6 justify-end w-full">
        <Badge count={0} offset={[0, 0]}>
          <Avatar
            size="default"
            icon={
              <Icons.Message
                style={{
                  color: '#A6A4F1'
                }}
              />
            }
            className="cursor-pointer"
            style={{
              backgroundColor: 'transparent'
            }}
          />
        </Badge>
        <Badge count={2} offset={[-3, 3]}>
          <Avatar
            size="default"
            icon={
              <Icons.Notification
                style={{
                  color: '#A6A4F1'
                }}
              />
            }
            className="cursor-pointer"
            style={{
              backgroundColor: 'transparent'
            }}
          />
        </Badge>

        <div className="text-right flex gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500">Student</span>
          </div>
          <Avatar
            size="default"
            icon={<Icons.Notification />}
            className="cursor-pointer"
            style={{
              backgroundColor: '#CFCEFF'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
