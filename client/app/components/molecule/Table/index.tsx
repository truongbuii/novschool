'use client';

import useColumns from '@/hooks/useColumn';
import { Table } from 'antd';
import { FC } from 'react';

interface CustomTableProps {
  data: any[];
  titleColumn: string[];
}

const CustomTable: FC<CustomTableProps> = ({ data, titleColumn }) => {
  const columns = useColumns(titleColumn);

  return (
    <div className="">
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500 }}
        rowKey="id"
      />
    </div>
  );
};

export default CustomTable;
