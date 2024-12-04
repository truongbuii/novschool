import { UserRole } from '@/types';
import { EllipsisOutlined } from '@ant-design/icons';

interface UserCardProps {
  type: UserRole;
}

const UserCard = ({ type }: UserCardProps) => {
  const modelMap: Record<UserRole, string> = {
    [UserRole.ADMIN]: 'Administrator',
    [UserRole.TEACHER]: 'Teacher',
    [UserRole.STUDENT]: 'Student',
    [UserRole.PARENT]: 'Parent'
  };

  const data = modelMap[type];

  return (
    <div className="rounded-2xl odd:bg-nPurple even:bg-nYellow p-4 flex-1 min-w-[130px] shadow">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <EllipsisOutlined style={{ fontSize: 30, color: 'white' }} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{data}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
