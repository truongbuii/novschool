'use client';

import { ROLES } from '@/config';
import { IMAGE } from '@/constant';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Flex } from 'antd';
import { ColumnType } from 'antd/es/table';
import Link from 'next/link';
import { useMemo } from 'react';

const useColumns = (data: any[]) => {
  const role = 'admin';

  const InfoColumn: ColumnType<any> = {
    title: 'Info',
    dataIndex: 'info',
    key: 'info',
    render: () => (
      <div className="flex items-center gap-4">
        <Avatar size={42} src={IMAGE.LOGO.src} />
        <div className="flex flex-col">
          <h3 className="font-semibold">Name</h3>
          <p className="text-xs text-gray-500">MathGeometry@gmail.com</p>
        </div>
      </div>
    ),
    width: 60
  };

  const actionColumn: ColumnType<any> = {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    align: 'center',
    render: () => (
      <Flex gap={8} justify="center">
        <Link href={`/list/teachers/1`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nSky">
            <EyeOutlined style={{ fontSize: 16, color: 'white' }} />
          </button>
        </Link>
        {role === ROLES.ADMIN && (
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-nPurple">
            <DeleteOutlined style={{ fontSize: 16, color: 'white' }} />
          </button>
        )}
      </Flex>
    ),
    fixed: 'right',
    width: 15
  };

  const columns = useMemo<ColumnType<any>[]>(
    () =>
      data.map((column) => ({
        title: column,
        dataIndex: column,
        key: column,
        render: (value: any) => <div className="text-dark">{value}</div>,
        width: 30
      })),
    [data]
  );
  return [InfoColumn, ...columns, actionColumn];
};

export default useColumns;
