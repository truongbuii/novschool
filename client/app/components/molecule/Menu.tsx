import { MENU_ITEMS } from '@/config';
import { Divider } from 'antd';
import Link from 'next/link';

const Menu: React.FC = () => {
  const role: string = 'admin';

  return (
    <div className="mt-4 text-sm">
      {MENU_ITEMS.map((i) => (
        <div className="flex flex-col gap-2" key={i.label}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.label}
          </span>
          {i.children.map((item) => {
            if (item.permit.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-nSkyLight"
                >
                  <span>{item.icon}</span>
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
          <Divider
            style={{
              margin: '0.5rem 0'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Menu;
